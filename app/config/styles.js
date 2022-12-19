// -----------------------------------------------------------------------------
// General
// -----------------------------------------------------------------------------
// Only HEX colors
export const COLOR_PRIMARY = "#74BF3A";
export const COLOR_SECONDARY = "#1170B5";
export const COLOR_THIRD = "#f6ede8"; //NOT DEFINED
export const GREEN_SUPPORT = "#E3F2D9"; //NOT DEFINED
export const TEXT_COLOR = "#222222"; //NOT DEFINED
export const TEXT_COLOR_ALT = "#ACB3BF"; //NOT DEFINED
export const TITLE_COLOR = "#222222"; //NOT DEFINED
export const SUBTITLE_COLOR = "#989292"; //NOT DEFINED
export const BACKGROUND_COLOR = "#ffffff";
export const BACKGROUND_COLOR_SUPORTE = "#003A4D";
export const BACKGROUND_COLOR_GREY = "#F5F5F7";
export const BORDER_COLOR = "#f2e7e7"; //NOT DEFINED
export const BORDER_RADIUS = 5; //NOT DEFINED
export const ERROR_COLOR = "#d50000"; //NOT DEFINED

// -----------------------------------------------------------------------------
// Fonts
// -----------------------------------------------------------------------------
export const FONTS = {
	fontFamily: "manrope",
	fontFamilyMedium: "manropemedium",
	fontFamilyBold: "manropebold",
	fontFamilyBlack: "manropeblack",
	sizeExtraSmall: 9,
	sizeSmall: 10,
	sizeMiddle: 12,
	sizeBase: 14,
	sizeLarge: 18,
	sizeExtraLarge: 21,
	sizeIcon: 17,
	lineHeightPlus: 7,
	color: TEXT_COLOR,
	colorAlt: TEXT_COLOR_ALT,
	titleColor: TITLE_COLOR,
};

// -----------------------------------------------------------------------------
// Header
// -----------------------------------------------------------------------------
export const HEADER = {
	height: 56,
	backgroundColor: BACKGROUND_COLOR,
	fontFamily: FONTS.fontFamilyBold,
	fontSize: 18,
	color: TEXT_COLOR,
	subTitleFontFamily: FONTS.fontFamily,
	subTitleFontSize: FONTS.sizeMiddle,
	subTitleColor: SUBTITLE_COLOR,
	iconWidth: 65,
	iconSize: 15,
	iconColor: TEXT_COLOR_ALT,
};

// -----------------------------------------------------------------------------
// StatusBar
// -----------------------------------------------------------------------------
export const STATUS_BAR_WHITE = {
	style: "dark",
	backgroundColor: "#fff",
};

export const STATUS_BAR_PRIMARY = {
	style: "light",
	backgroundColor: BACKGROUND_COLOR
};

export const STATUS_BAR_HOME = {
	style: "dark",
	backgroundColor: GREEN_SUPPORT
};

export const STATUS_BAR_DARK = {
	style: "light",
	backgroundColor: "#000",
};

export const STATUS_BAR_DEFAULT = {
	style: "dark",
	backgroundColor: BACKGROUND_COLOR
};

export const STATUS_BAR_TRANSPARENT = {
	style: "light",
	backgroundColor: "transparent",
};

export const STATUS_BAR_SUPORTE = {
	style: "light",
	backgroundColor: BACKGROUND_COLOR_SUPORTE,
};

export const STATUS_BAR_GREY = {
	style: "dark",
	backgroundColor: BACKGROUND_COLOR_GREY,
};

// -----------------------------------------------------------------------------
// Content
// -----------------------------------------------------------------------------
export const CONTENT = {
	paddingVertical: 24,
	paddingHorizontal: 30,
};

// -----------------------------------------------------------------------------
// Buttons
// -----------------------------------------------------------------------------
export const BUTTONS = {
	paddingHorizontal: 30,
	height: 40,
	iconMargin: 8,
	fontFamily: FONTS.fontFamilyBold,
	fontSize: 12,
	iconSize: 12,
	borderRadius: BORDER_RADIUS,
};

// -----------------------------------------------------------------------------
// FORM
// -----------------------------------------------------------------------------
export const FORM = {
	fontFamily: FONTS.fontFamily,
	fieldHeight: 40,
	fieldSpacing: 20,
	textareaMinHeight: 100,
	placeholderColor: TEXT_COLOR_ALT,
	selectArrowColor: "#9eabb5",
	labelMarginBottom: 5,
	labelFontFamily: FONTS.fontFamilyBold,
	labelFontSize: 12,
	labelFontColor: TEXT_COLOR,
	labelTextAlign: "left",
	errorFontFamily: FONTS.fontFamily,
	errorFontSize: FONTS.sizeSmall,
	counterFontSize: FONTS.sizeSmall,
	counterColor: "#9c9c9c",
	fieldFontSize: 12,
	fieldColor: TITLE_COLOR,
	fieldColorFocus: TITLE_COLOR,
	fieldBackgroundColor: BACKGROUND_COLOR,
	fieldBorderWidth: 2,
	fieldBorderColor: "#F5F5F7",
	fieldBorderRadius: 5,
	fieldFocusPlaceholderColor: TEXT_COLOR,
	fieldFocusBackgroundColor: "#fff",
	fieldFocusBorderColor: COLOR_PRIMARY,
	fieldFocusLabelColor: COLOR_PRIMARY,
	iconColor: COLOR_PRIMARY,
	iconColorFocus: COLOR_PRIMARY,
	clearColor: COLOR_PRIMARY,
	buttonColor: "red",
	fieldDisabledBorderColor: "#d9d9d9",
	fieldDisabledBackground: "#f2f2f2",
	selectListHeight: 54,
	selectListFontFamily: FONTS.fontFamily,
	selectListFontSize: FONTS.sizeBase,
	selectListColor: TEXT_COLOR_ALT,
	selectListIconColor: "#eeeeee",
	selectActiveListColor: COLOR_PRIMARY,
	selectActiveListIconColor: COLOR_PRIMARY,
	selectListSeparatorColor: "#f3f4f6",
	selectListTitleFontFamily: FONTS.fontFamilyBold,
	selectListTitleFontSize: FONTS.sizeBase,
	selectListTitleColor: COLOR_PRIMARY,
};

// -----------------------------------------------------------------------------
// SWITCH
// -----------------------------------------------------------------------------
export const SWITCH = {
	wrapColor: TEXT_COLOR_ALT,
	buttonColor: "#fff",
	activeWrapColor: COLOR_PRIMARY,
	activeButtonColor: "#fff",
};

// -----------------------------------------------------------------------------
// MODAL
// -----------------------------------------------------------------------------
export const MODAL = {
	titleFontFamily: FONTS.fontFamilyBold,
	titleFontSize: 16,
	titleColor: "#000",
	textFontFamily: FONTS.fontFamily,
	textFontSize: FONTS.sizeBase,
	textColor: COLOR_PRIMARY,
	overlayRGBA: "rgba(0, 0, 0, 0.5)",
	backgroundColor: "#fff",
	headerHeight: 56,
	headerIconColor: "#2d2e2e",
	borderRadius: 5,
};

// -----------------------------------------------------------------------------
// Toast
// -----------------------------------------------------------------------------
export const TOAST = {
	styleContainer: {
		alignItems: "center",
		paddingVertical: 12,
		paddingHorizontal: 20,
		marginHorizontal: 30,
		minWidth: "90%",
		maxWidth: "90%",
		backgroundColor: "rgba(0,0,0, 1)",
		borderRadius: 10,
	},
	styleText: {
		fontFamily: FONTS.fontFamily,
		fontSize: FONTS.sizeBase,
		color: "#fff",
		textAlign: "center",
	},
};

// -----------------------------------------------------------------------------
// MenuFloat
// -----------------------------------------------------------------------------
export const MENU_FLOAT = {
	styleContainer: {
		paddingVertical: 10,
		width: "auto",
		minWidth: 150,
		borderRadius: 8,
		elevation: 0,
		shadowOpacity: 0,
		backgroundColor: "#FFF"
	},
	styleOptionWrap: {
		paddingVertical: 10,
		paddingHorizontal: 18,
	},
	styleOptionDivider: {
		marginHorizontal: 0,
		height: 1,
		backgroundColor: "#f2e7e7",
	},
	styleOptionText: {
		fontFamily: FONTS.fontFamily,
		fontSize: 14,
		color: "#fff",
	},
};

//--------------------------------------------------
// CheckBox
// -------------------------------------------------

export const CHECKBOX = {
	acceptOptionCheck: {
		alignItems: "center",
		justifyContent: "center",
		width: 20,
		height: 20,
		borderRadius: 5,
		backgroundColor: BACKGROUND_COLOR_SUPORTE,
		marginRight: 15
	},
	checkedOption: {
		backgroundColor: "#FFF",
		width: 10,
		height: 10,
		borderRadius: 5,
	},
}


export const MAPSTYLE = [
	{
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#002733"
			}
		]
	},
	{
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#0a222c"
			}
		]
	},
	{
		"elementType": "labels",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#8ec3b9"
			}
		]
	},
	{
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#1a3646"
			}
		]
	},
	{
		"featureType": "administrative",
		"elementType": "geometry",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "administrative.country",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#4b6878"
			}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "administrative.land_parcel",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#64779e"
			}
		]
	},
	{
		"featureType": "administrative.neighborhood",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "administrative.province",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#4b6878"
			}
		]
	},
	{
		"featureType": "landscape.man_made",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#334e87"
			}
		]
	},
	{
		"featureType": "landscape.natural",
		"stylers": [
			{
				"color": "#0a222c"
			}
		]
	},
	{
		"featureType": "landscape.natural",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#023e58"
			}
		]
	},
	{
		"featureType": "landscape.natural",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#0a222c"
			}
		]
	},
	{
		"featureType": "poi",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#283d6a"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#6f9ba5"
			}
		]
	},
	{
		"featureType": "poi",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#1d2c4d"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#023e58"
			}
		]
	},
	{
		"featureType": "poi.park",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#3C7680"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#0c2733"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.icon",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#98a5be"
			}
		]
	},
	{
		"featureType": "road",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#1d2c4d"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#2c6675"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry.stroke",
		"stylers": [
			{
				"color": "#255763"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#b0d5ce"
			}
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#023e58"
			}
		]
	},
	{
		"featureType": "transit",
		"stylers": [
			{
				"visibility": "off"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#98a5be"
			}
		]
	},
	{
		"featureType": "transit",
		"elementType": "labels.text.stroke",
		"stylers": [
			{
				"color": "#1d2c4d"
			}
		]
	},
	{
		"featureType": "transit.line",
		"elementType": "geometry.fill",
		"stylers": [
			{
				"color": "#283d6a"
			}
		]
	},
	{
		"featureType": "transit.station",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#3a4762"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [
			{
				"color": "#0e1626"
			}
		]
	},
	{
		"featureType": "water",
		"elementType": "labels.text.fill",
		"stylers": [
			{
				"color": "#4e6d70"
			}
		]
	}
]