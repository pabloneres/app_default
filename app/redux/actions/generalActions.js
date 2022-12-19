import { generalConstants } from "./../constants";

/**
 * Skip welcome
 *
 * @returns {{type: string}}
 */
export const skipWelcome = () => {
	return {
		type: generalConstants.WELCOME_SKIP,
	}
};

/**
 * Skip terms
 *
 * @returns {{type: string}}
 */
export const skipTerms = () => {
	return {
		type: generalConstants.TERMS_SKIP,
	}
};

/**
 * Enable notifications
 *
 * @returns {{type: string}}
 */
export const enableNotifications = () => {
	return {
		type: generalConstants.NOTIFICATION_ON,
	}
};

/**
 * Disable notifications
 *
 * @returns {{type: string}}
 */
export const disableNotifications = () => {
	return {
		type: generalConstants.NOTIFICATION_OFF,
	}
};

/**
 * Enable notifications
 *
 * @returns {{type: string}}
 */
export const enableTouchID = () => {
	return {
		type: generalConstants.TOUCHID_ON,
	}
};

/**
 * Disable notifications
 *
 * @returns {{type: string}}
 */
export const disableTouchID = () => {
	return {
		type: generalConstants.TOUCHID_OFF,
	}
};

/**
 * Set types
 *
 * @param types
 *
 * @returns {{data: {types}, type: string}}
 */
export const setTypes = (types) => {
	return {
		type: generalConstants.TYPES,
		data: {
			types
		}
	}
};

/**
 * RedirectTo
 *
 * @returns {{type: string}}
 */
export const redirectTo = (screen) => {
	return {
		type: generalConstants.REDIRECT_TO,
		data: {
			screen
		}
	}
};

/**
 * User Search
 *
 * @returns {{type: string}}
 */
export const userSearch = (user) => {
	return {
		type: generalConstants.USER_SEARCH,
		data: user
	}
};

/**
 * Save Menus
 *
 * @returns {{type: string}}
 */
export const saveMenus = (menus) => {
	return {
		type: generalConstants.MENUS,
		data: menus
	}
};

/**
 * Fast login app
 *
 * @returns {{type: string, data: *}}
 */
export const fastLogin = (data) => {
	return {
		type: generalConstants.FAST_LOGIN,
		data: data
	}
};

/**
 * Save Faq Search
 *
 * @returns {{type: string}}
 */
export const saveFaqSearch = (data) => {
	return {
		type: generalConstants.SAVE_FAQ_SEARCH,
		data: data
	}
};

/**
 * Remove Faq Search
 *
 * @returns {{type: string}}
 */
export const removeFaqSearch = (data) => {
	return {
		type: generalConstants.REMOVE_FAQ_SEARCH,
		data: data
	}
};

/**
 * Save filters
 *
 * @returns {{type: string}}
 */
export const saveFilters = (data) => {
	return {
		type: generalConstants.SAVE_FILTERS,
		data: data
	}
};
