import { authConstants } from "./../constants";
import { authService, walletService, authLogin } from "./../services";
import { store } from "../../redux/store/configureStore";

/**
 * Authenticate user
 *
 * @param {Object} data
 *
 * @returns {function(*)}
 */
export const login = (data) => {
	return {
		type: authConstants.LOGIN,
		data: data
	};
};

/**
 * Authenticate user
 *
 * @param {Object} data
 *
 * @returns {function(*)}
 */
export const updateMatricula = (data) => {
	return {
		type: authConstants.UPDATE_MATRICULA,
		data: data
	};
};

/**
 * Logout
 *
 * @returns {Function}
 */
export const logout = () => {
	authService.logout().then((response) => {
	}).catch((data) => {
	});

	return {
		type: authConstants.LOGOUT,
	};
};

/**
 * Logout without request, only locally
 *
 * @returns {{type: string}}
 */
export const silentLogout = () => {
	return {
		type: authConstants.LOGOUT,
	}
};

/**
 * Register user
 *
 * @param data
 *
 * @returns {{type: string, data: *}}
 */
export const register = (data) => {
	return {
		type: authConstants.REGISTER,
		data: data,
	}
};

/**
 * Completed register user
 *
 * @param data
 *
 * @returns {{type: string, data: *}}
 */
export const registerCompleted = (data) => {
	return {
		type: authConstants.REGISTER_COMPLETED,
		data: data,
	}
};

/**
 * Edit user data
 *
 * @param data
 *
 * @returns {{type: string, data: *}}
 */
export const editUserData = (data) => {
	return {
		type: authConstants.EDIT_USER_DATA,
		data: data,
	}
};

/**
 * Re-load user data from server
 *
 * @returns {function(*)}
 */
export const refreshUserData = () => {
	const matricula = store.getState().auth.matricula;

	return (dispatch) => {
		dispatch({
			type: authConstants.USERDATA_REQUEST,
		});

		// Get user data
		authLogin.getUserData(matricula)
			.then((response) => {
				dispatch({
					type: authConstants.USERDATA_SUCCESS,
					data: response.data,
				});
			})
			.catch((data) => {
				dispatch({
					type: authConstants.USERDATA_ERROR,
					data: {
						error_type: data.error_type,
						error_message: data.error_message,
						error_errors: data.error_errors,
					}
				});
			});
	};
};

/**
 * Re-load user balance data from server
 *
 * @returns {function(*)}
 */
export const refreshBalance = () => {
	return (dispatch) => {
		dispatch({
			type: authConstants.BALANCE_REQUEST,
		});

		// Get user data
		walletService.getBalance().then((response) => {
			dispatch({
				type: authConstants.BALANCE_SUCCESS,
				data: response.data.data,
			});
		})
			.catch((data) => {
				dispatch({
					type: authConstants.BALANCE_ERROR,
					data: {
						error_type: data.error_type,
						error_message: data.error_message,
						error_errors: data.error_errors,
					}
				});
			});
	};
};

/**
 * Edit user avatar
 *
 * @param avatar
 *
 * @returns {{data: {type: *, avatar: *}, type: string}}
 */
export const editUserAvatar = (avatar) => {
	return {
		type: authConstants.EDIT_USER_AVATAR,
		data: {
			avatar: avatar,
		},
	}
};


/**
 * Phone confirmed
 *
 * @returns {{type: string, data: *}}
 */
export const phoneConfirmed = () => {
	return {
		type: authConstants.PHONE_CONFIRMED,
	}
};

/**
 * Unlock App
 *
 * @returns {{type: string, data: *}}
 */
export const unlockApp = () => {
	return {
		type: authConstants.UNLOCK_APP,
	}
};


/**
 * Push token
 *
 */
export const updatePushToken = (data) => {
	return {
		type: authConstants.CHANGE_PUSH_TOKEN,
		data: data
	}
};