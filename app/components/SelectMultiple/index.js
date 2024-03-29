import React, { Component } from "react";
import PropTypes from "prop-types";
import {
	FlatList,
	Image,
	Keyboard,
	Modal,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { ViewPropTypes, TextPropTypes } from "deprecated-react-native-prop-types";
import {
	themes,
	styles,
} from "./styles";

import UIButton from "./../Button";
import UIHeader from "./../Header";
import UIIcon from "./../Icon";
import UILoading from "./../Loading";
import UIViewScreen from "./../ViewScreen";

import Item from "./item";

class UISelectMultiple extends Component {
	static propTypes = {
		theme: PropTypes.oneOf(["default"]),
		options: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string,
		onPress: PropTypes.func,
		onRequestClose: PropTypes.func,
		onSelectItem: PropTypes.func,
		isLoading: PropTypes.bool,
		icon: PropTypes.string,
		iconSize: PropTypes.number,
		editable: PropTypes.bool,
		placeholder: PropTypes.string,
		value: PropTypes.array,
		valueLabel: PropTypes.string,
		showArrow: PropTypes.bool,
		listEmpty: PropTypes.string,
		buttonOkPosition: PropTypes.oneOf(["header", "footer"]),
		buttonOkText: PropTypes.string,
		buttonOkNeedChange: PropTypes.bool,
		containerStyle: ViewPropTypes.style,
		labelStyle: TextPropTypes.style,
		elementStyle: ViewPropTypes.style,
		fieldStyle: TextPropTypes.style,
		label: PropTypes.string,
		hasError: PropTypes.bool,
		errorMessage: PropTypes.string,
		showCheckIcon: PropTypes.bool,
		showListSeparator: PropTypes.bool,
		iconPosition: PropTypes.oneOf(["left", "right"]),
		itemStyle: PropTypes.any,
		itemLabelStyle: PropTypes.any,
	};

	static defaultProps = {
		theme: "default",
		editable: true,
		iconSize: 17,
		title: "",
		subtitle: "",
		placeholder: "",
		value: [],
		valueLabel: "",
		showArrow: true,
		isLoading: false,
		label: "",
		listEmpty: "Nenhum item encontrado.",
		buttonOkPosition: "footer",
		buttonOkText: "CONTINUAR",
		buttonOkNeedChange: false,
		hasError: false,
		errorMessage: "",
		showCheckIcon: true,
		iconPosition: "right",
		showListSeparator: true,
	};

	constructor(props) {
		super(props);

		this.state = {
			modalVisible: false,
			value: (this.props.value === null || typeof this.props.value === "undefined") ? [] : this.props.value,
			valueLabel: this.props.valueLabel || "",
			valueTemp: [],
		};
	}

	/**
	 * Get config theme
	 *
	 * @param attr
	 */
	getThemeConfig = (attr) => (
		themes[this.props.theme][attr]
	);

	/**
	 * Focus field
	 */
	focus = () => {
		this.show();
	};

	/**
	 * Show modal
	 */
	show = () => {
		if (!this.state.modalVisible && this.props.editable) {
			// Dismiss keyboard
			Keyboard.dismiss();

			this.setState(state => ({
				modalVisible: true,
				valueTemp: [...state.value],
			}));

			if (this.props.onPress) {
				this.props.onPress();
			}

			return true;
		}
	};

	/**
	 * Hide modal
	 */
	hide = (action = null) => {
		if (this.state.modalVisible) {
			this.setState(state => {
				const newState = {
					modalVisible: false,
				};

				if (action === "selected") {
					newState.value = state.valueTemp;
					newState.valueLabel = this.getOptionByValue(state.valueTemp);
				}

				return newState;
			}, () => {
				if (action === "cancel" && this.props.onRequestClose) {
					this.props.onRequestClose(this.state.value, this.state.valueLabel);
				}
				else if (action === "selected" && this.props.onSelectItem) {
					this.props.onSelectItem(this.state.value, this.state.valueLabel);
				}
			});
		}
	};

	/**
	 * Reset value
	 */
	resetValue = () => {
		this.setState({
			value: [],
			valueLabel: "",
		});
	};

	/**
	 * Set value
	 *
	 * @param value
	 * @param [valueLabel] - Will be searched by value in the options
	 */
	setValue = (value, valueLabel) => {
		if (!valueLabel) {
			let optionByValue = this.getOptionByValue(value);

			if (optionByValue) {
				valueLabel = optionByValue;
			}
		}

		this.setState({
			value: (value === null || typeof value === "undefined") ? [] : value,
			valueLabel: valueLabel,
		});
	};

	/**
	 * Get value
	 */
	getValue = () => this.state.value;

	/**
	 * Get value label
	 */
	getValueLabel = () => this.state.valueLabel;

	/**
	 * Get option by value
	 *
	 * @param value
	 *
	 * @returns {null}
	 */
	getOptionByValue = (value) => {
		if (value === null) {
			return '';
		}

		let options = [];

		value.forEach((item_value) => {
			let index = this.props.options.findIndex(item => String(item.value) === String(item_value));

			if (index !== -1) {
				options.push(this.props.options[index].label);
			}
		});

		return options.join(", ");
	};

	/**
	 * Add/Remove value
	 *
	 * @param value
	 */
	toggleValue = (value) => {
		let newData = [...this.state.valueTemp];
		let index = newData.findIndex(item => String(item) === String(value));

		if (index !== -1) {
			newData.splice(index, 1);
		}
		else {
			newData.push(value);
		}

		this.setState(state => ({
			valueTemp: newData,
		}));
	};

	_renderItem = ({ item }) => (
		<Item
			theme={this.props.theme}
			title={item.title}
			label={item.label}
			active={this.state.valueTemp.findIndex(item_ => String(item_) === String(item.value)) !== -1}
			onPress={() => this.toggleValue(item.value)}
			showCheckIcon={this.props.showCheckIcon}
			iconPosition={this.props.iconPosition}
			itemStyle={this.props.itemStyle}
			itemLabelStyle={this.props.itemLabelStyle}
		/>
	);

	_renderList = () => {
		if (this.props.isLoading) {
			return (
				<View style={{ paddingVertical: 30 }}>
					<UILoading />
				</View>
			);
		}

		const data = this.props.options;

		if (!data.length) {
			return (
				<View style={styles.listEmpty}>
					<Text style={styles.listEmptyText}>
						{this.props.listEmpty}
					</Text>
				</View>
			)
		}

		let listSeparatorStyle = this.getThemeConfig("listSeparatorStyle");

		return (
			<FlatList
				data={data}
				keyExtractor={(item, index) => String(index)}
				renderItem={this._renderItem}
				ItemSeparatorComponent={!this.props.showListSeparator ? null : () => (
					<View style={[styles.listSeparator, listSeparatorStyle]} />
				)}
				contentContainerStyle={[styles.scrollContentStyle, { paddingBottom: this.props.buttonOkPosition === "footer" ? 90 : 0 }]}
			/>
		)
	};

	render() {
		let arrowColor = this.getThemeConfig("arrowColor");
		let borderColor = this.getThemeConfig("borderColor");
		let disabledColor = this.getThemeConfig("disabledColor");
		let disabledBackground = this.getThemeConfig("disabledBackground");
		let iconColor = this.getThemeConfig("iconColor");
		let errorColor = this.getThemeConfig("errorColor");
		let errorStyle = this.getThemeConfig("errorStyle");
		let placeholderTextColor = this.getThemeConfig("placeholderColor");

		let elementStyle = [styles.element];
		elementStyle.push(this.getThemeConfig("elementStyle"));
		elementStyle.push(this.props.elementStyle);

		let labelStyle = [styles.label];
		labelStyle.push(this.getThemeConfig("labelStyle"));
		labelStyle.push(this.props.labelStyle);

		let fieldStyle = [styles.field];
		fieldStyle.push(this.getThemeConfig("fieldStyle"));
		fieldStyle.push(this.props.fieldStyle);

		const { valueLabel } = this.state;

		if (!valueLabel) {
			fieldStyle.push({ color: placeholderTextColor });
		}

		let error = null;

		if (this.props.icon) {
			fieldStyle.push({ paddingLeft: 0 });
		}

		if (!this.props.editable) {
			borderColor = disabledColor;

			elementStyle.push({ backgroundColor: disabledBackground });
		}

		if (this.props.hasError) {
			borderColor = errorColor;

			error = (
				<Text style={[styles.error, errorStyle, { color: errorColor }]}>
					{this.props.errorMessage}
				</Text>
			);
		}

		elementStyle.push({ borderColor: borderColor });

		return (
			<View style={[styles.container, this.props.containerStyle]}>
				{this.props.label.length > 0 && (
					<Text style={labelStyle} onPress={this.show}>
						{this.props.label}
					</Text>
				)}
				<TouchableWithoutFeedback
					disabled={!this.props.editable || this.props.isLoading}
					onPress={this.show}>
					<View style={elementStyle}>
						{this.props.icon && (
							<View style={styles.icon}>
								<UIIcon
									name={this.props.icon}
									color={iconColor}
									size={this.props.iconSize}
								/>
							</View>
						)}
						<Text numberOfLines={1} style={fieldStyle}>
							{valueLabel ? valueLabel : this.props.placeholder}
						</Text>
						{this.props.isLoading && (
							<View style={styles.loading}>
								<UILoading size="small" />
							</View>
						)}
						{this.props.showArrow && <View style={styles.arrow}>
							<UIIcon name="select-arrow" color={arrowColor} size={10} />
						</View>}
					</View>
				</TouchableWithoutFeedback>
				{error}
				<Modal
					transparent={true}
					animationType="slide"
					onRequestClose={() => this.hide("cancel")}
					visible={this.state.modalVisible}>
					<UIViewScreen theme="primary" enableStatusBar statusBarTheme="primary" enableStatusBarHeight={false}>
						<UIHeader
							theme="primary"
							left={{
								icon: "select-back",
								onPress: () => this.hide("cancel")
							}}
							center={{ title: this.props.title, subTitle: this.props.subtitle }}
							right={(!this.props.isLoading && this.props.buttonOkPosition === "header") ? (
								<UIButton
									theme="link_white"
									disabled={String(this.state.valueTemp).length === 0 || (this.props.buttonOkNeedChange && this.state.valueTemp === this.state.value)}
									title={this.props.buttonOkText}
									onPress={() => this.hide("selected")}
									style={{ height: "100%", borderRadius: 0 }}
									styleText={{ fontSize: 13 }}
									styleButton={{ paddingHorizontal: 34, height: "100%" }}
								/>
							) : null}
							styleTitle={{ textAlign: "left" }}
							styleSubTitle={{ textAlign: "left" }}
						/>
						<View style={styles.contentWrap}>
							{this._renderList()}
						</View>
						{(!this.props.isLoading && this.props.buttonOkPosition === "footer") && (
							<View pointerEvents="box-none" style={styles.footer}>
								<View pointerEvents="none" style={styles.footerImage}>
									<Image
										source={require("./../../assets/img/footer-overlay.png")}
										resizeMode="stretch"
										style={styles.footerImage}
									/>
								</View>
								<View style={styles.footerInner}>
									<UIButton
										type="block"
										disabled={String(this.state.valueTemp).length === 0 || (this.props.buttonOkNeedChange && this.state.valueTemp === this.state.value)}
										title={this.props.buttonOkText}
										onPress={() => this.hide("selected")}
										style={{ minWidth: 220 }}
									/>
								</View>
							</View>
						)}
					</UIViewScreen>
				</Modal>
			</View>
		);
	}
}

export default UISelectMultiple;
