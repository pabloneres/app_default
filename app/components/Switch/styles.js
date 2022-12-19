import { StyleSheet } from "react-native";
import {
	BACKGROUND_COLOR_SUPORTE,
	COLOR_SECONDARY,
	SWITCH,
} from "./../../config/styles";

const themes = {
	default: {
		wrapColor: SWITCH.wrapColor,
		buttonColor: SWITCH.buttonColor,
		activeWrapColor: SWITCH.activeWrapColor,
		activeButtonColor: SWITCH.activeButtonColor,
		buttonX: 4,
		buttonXActive: 16,
		containerStyle: {},
		buttonStyle: {},
	},
	secondary: {
		wrapColor: SWITCH.wrapColor,
		buttonColor: SWITCH.buttonColor,
		activeWrapColor: COLOR_SECONDARY,
		activeButtonColor: SWITCH.activeButtonColor,
		buttonX: 4,
		buttonXActive: 20,
		containerStyle: {},
		buttonStyle: {},
	},
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		width: 30,
		height: 20,
		borderRadius: 10,
		backgroundColor: BACKGROUND_COLOR_SUPORTE,
	},
	button: {
		width: 10,
		height: 10,
		borderRadius: 5,
	},
});

export {
	styles,
	themes,
};
