import {
	Platform,
	StyleSheet,
} from "react-native";

import {
	BACKGROUND_COLOR_GREY,
	BORDER_COLOR,
	COLOR_PRIMARY, CONTENT,
	HEADER,
} from "./../../config/styles";

import { hexToRgb } from "./../../helpers/color";
import { isIPhoneWithMonobrow } from "~/helpers/statusBarHeight";

const rgbColorPrimary = hexToRgb(COLOR_PRIMARY);

const themes = {
	default: {
		androidPressColor: `rgba(255, 255, 255, 0.7)`,
		styleContainer: {
			backgroundColor: HEADER.backgroundColor,
		},
		styleContainerShadow: {
			elevation: 7,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 5 },
			shadowOpacity: 0.15,
			shadowRadius: 3,
		},
		styleButtonWrap: {},
		styleButtonIcon: {
			color: HEADER.iconColor,
		},
		styleTitle: {
			color: HEADER.color,
		},
		styleSubTitle: {
			color: HEADER.subTitleColor,
		},
	},
	primary: {
		androidPressColor: `rgba(255, 255, 255, 0.7)`,
		styleContainer: {
			backgroundColor: COLOR_PRIMARY,
		},
		styleContainerShadow: {
			elevation: 7,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 5 },
			shadowOpacity: 0.15,
			shadowRadius: 3,
		},
		styleButtonWrap: {},
		styleButtonIcon: {
			color: "#fff",
		},
		styleTitle: {
			color: "#fff",
		},
		styleSubTitle: {
			color: "#fff",
		},
	},
	grey: {
		androidPressColor: `rgba(255, 255, 255, 0.7)`,
		styleContainer: {
			backgroundColor: BACKGROUND_COLOR_GREY,
		},
		styleContainerShadow: {
			elevation: 7,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 5 },
			shadowOpacity: 0.15,
			shadowRadius: 3,
		},
		styleButtonWrap: {},
		styleButtonIcon: {
			color: HEADER.iconColor,
		},
		styleTitle: {
			color: HEADER.color,
		},
		styleSubTitle: {
			color: HEADER.subTitleColor,
		},
	},
	image: {
		androidPressColor: `rgba(255, 255, 255, 0.7)`,
		statusBarBackground: "rgba(0,0,0,0.1)",
		styleContainerWrap: {
			backgroundColor: "#005e2f",
		},
		styleContainer: {},
		styleContainerShadow: {
			elevation: 8,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 5 },
			shadowOpacity: 0.15,
			shadowRadius: 4,
		},
		styleButtonWrap: {},
		styleButtonIcon: {
			color: HEADER.iconColor,
		},
		styleTitle: {
			color: HEADER.color,
		},
		styleSubTitle: {
			color: HEADER.subTitleColor,
		},
	},
};

const styles = StyleSheet.create({
	borderStyles: {
	},
	containerWrap: {
		...Platform.select({
			ios: {
				zIndex: 2,
			},
		}),
	},
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		height: HEADER.height,
		...Platform.select({
			android: {
				zIndex: 2,
			},
		}),
	},
	leftContainer: {},
	rightContainer: {},
	centerContainer: {
		flex: 1,
		paddingHorizontal: 5,
		paddingRight: 5,
	},
	buttonWrap: {
		width: HEADER.iconWidth,
		height: "100%",
		borderRadius: 0
	},
	button: {
		height: "100%",
		borderRadius: 0
	},
	buttonIcon: {
		fontSize: HEADER.iconSize,
	},
	titleText: {
		fontFamily: HEADER.fontFamily,
		fontSize: HEADER.fontSize,
		textAlign: "center",
	},
	subTitleText: {
		marginTop: 5,
		fontFamily: HEADER.subTitleFontFamily,
		fontSize: HEADER.subTitleFontSize,
		textAlign: "center",
	},
	tabsContainer: {
		paddingHorizontal: 5,
		backgroundColor: HEADER.backgroundColor,
		flexDirection: "row",
		paddingTop: 5,
		justifyContent: "space-around"
	},
	tab: {
		justifyContent: "center",
		alignItems: "center",
		borderColor: COLOR_PRIMARY,
	},
	textTabContainer: {
		paddingHorizontal: 10,
		paddingBottom: 8
	},
	activeTabBorder: {
		position: "absolute",
		bottom: -1,
		height: 1,
		backgroundColor: COLOR_PRIMARY,
		width: "100%"
	}
});

export {
	styles,
	themes,
};
