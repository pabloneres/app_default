import React, { Component } from "react";
import PropTypes from "prop-types";
import { StatusBar } from "expo-status-bar";
import {
	KeyboardAvoidingView,
	Platform,
	View,
} from "react-native";
import { ViewPropTypes, TextPropTypes } from "deprecated-react-native-prop-types";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
	STATUS_BAR_WHITE,
	STATUS_BAR_PRIMARY,
	STATUS_BAR_DARK,
	STATUS_BAR_DEFAULT,
	STATUS_BAR_TRANSPARENT,
	STATUS_BAR_SUPORTE,
	STATUS_BAR_HOME,
	STATUS_BAR_GREY
} from "./../../config/styles";

import { STATUS_BAR_HEIGHT } from "./../../config/general";

import styles from "./styles";

class UIViewScreen extends Component {
	static propTypes = {
		...ViewPropTypes,
		enableStatusBar: PropTypes.bool,
		enableStatusBarHeight: PropTypes.bool,
		hasForm: PropTypes.bool,
		statusBarTheme: PropTypes.oneOf(["default", "primary", "dark", "transparent", "support", "grey", "home"]),
		statusBarProps: PropTypes.any,
		iosFixModalHeight: PropTypes.bool,
	};

	static defaultProps = {
		style: {},
		hasForm: false,
		enableStatusBar: false,
		enableStatusBarHeight: null,
		statusBarTheme: "default",
		statusBarProps: {},
		iosFixModalHeight: true,
	};

	render() {
		const { enableStatusBar, enableStatusBarHeight, hasForm, awareScrollView, statusBarProps, statusBarTheme, style, iosFixModalHeight, ...rest } = this.props;

		const enableStatusBarHeightFinal = enableStatusBarHeight === null ? enableStatusBar : enableStatusBarHeight;

		const isIOS = Platform.OS === "ios";

		let props = {
			...rest,
			style: {
				...styles.screen,
				...style,
			}
		};

		let STATUS_BAR_CONFIG = STATUS_BAR_WHITE;

		if (statusBarTheme === "primary") {
			STATUS_BAR_CONFIG = STATUS_BAR_PRIMARY;
		}
		if (statusBarTheme === "home") {
			STATUS_BAR_CONFIG = STATUS_BAR_HOME;
		}
		else if (statusBarTheme === "dark") {
			STATUS_BAR_CONFIG = STATUS_BAR_DARK;
		}
		else if (statusBarTheme === "default") {
			STATUS_BAR_CONFIG = STATUS_BAR_DEFAULT;
		}
		else if (statusBarTheme === "tranparent") {
			STATUS_BAR_CONFIG = STATUS_BAR_TRANSPARENT;
		}
		else if (statusBarTheme === "support") {
			STATUS_BAR_CONFIG = STATUS_BAR_SUPORTE;
		}
		else if (statusBarTheme === "grey") {
			STATUS_BAR_CONFIG = STATUS_BAR_GREY;
		}

		let ComponentView = (hasForm && awareScrollView) ? KeyboardAwareScrollView : (hasForm) ? KeyboardAvoidingView : View

		if (isIOS && hasForm) {
			props = {
				...props,
				behavior: "padding",
				contentContainerStyle: { flex: 1 }
			};
		}

		if (awareScrollView) {
			props = {
				...props,
				contentContainerStyle: { flex: 1 }
			}
		}

		return (
			<ComponentView {...props}>
				{(enableStatusBarHeightFinal || (enableStatusBar && isIOS && iosFixModalHeight)) && <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: STATUS_BAR_CONFIG.backgroundColor }} />}
				{enableStatusBar && <StatusBar translucent {...STATUS_BAR_CONFIG} {...statusBarProps} />}
				{this.props.children}
			</ComponentView>
		);
	}
}

export default UIViewScreen;
