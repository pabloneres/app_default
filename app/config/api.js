import axios from "axios";
import { store } from "./../redux/store/configureStore";
import { authConstants } from "./../redux/constants";

import {
	APP_VERSION,
	APP_BUILD,
	APP_RELEASE_CHANNEL,
	API_URL,
	API_ERRO_TYPE_VALIDATION,
	API_ERRO_TYPE_API,
	API_ERRO_TYPE_SERVER,
	API_ERRO_TYPE_CONNECTION,
	API_ERRO_TYPE_OTHER,
	API_ERRO_TYPE_ACCESS_TOKEN,
	API_ERRO_TYPE_CANCEL,
	IS_DEBUG,
} from "./general";
import { navigationRef } from "~/navigations/Main";
import refreshToken from "./refreshToken";
import { authRefresh, authService } from "~/redux/services";

// -----------------------------------------------------------------------------
// General
// -----------------------------------------------------------------------------
export const API_HEADER_DEFAULT = {
	Accept: "application/json",
	"Content-Type": "application/json",
	Language: "pt",
	"App-Version": APP_VERSION,
	"App-Build": APP_BUILD,
	"App-Channel": APP_RELEASE_CHANNEL,
	"App-Debug": IS_DEBUG,
};

// -----------------------------------------------------------------------------
// Instance
// -----------------------------------------------------------------------------
export const api = axios.create({
	baseURL: API_URL,
	timeout: 3 * 60 * 1000, // 3 minutes
	headers: API_HEADER_DEFAULT,
});

/**
 * Update acess token on default request
 *
 * @param accessToken
 */
export const apiUpdateAccessToken = (accessToken) => {
	accessToken = accessToken ? accessToken : store.getState().auth.accessToken;

	// Set accessToken to instance
	api.defaults.headers.common["Authorization"] = accessToken;
};

/**
 * Update company slug in headers
 *
 * @param slug
 */

// -----------------------------------------------------------------------------
// Errors, Refresh token
// -----------------------------------------------------------------------------
api.interceptors.request.use((config) => {

	if (!config.headers.common["Authorization"]) {
		config.headers["Authorization"] = store.getState().auth.accessToken;

		// Update accessToken on instance
		apiUpdateAccessToken();
	}

	return config;
});

api.interceptors.response.use((response) => {

	return response;
}, (error) => {
	if (axios.isCancel(error)) {
		let errorReturn = {
			error: error,
			error_type: API_ERRO_TYPE_CANCEL,
			error_message: "Requisição cancelada.",
			error_errors: {},
		};

		errorReturn.toString = () => errorReturn.error_message;

		return Promise.reject(errorReturn);
	}

	const originalRequest = error.config;

	if (error.response.status === 403 && !error.config._retry) {
		// Logout
		// Like authActions.silentLogout()
		// store.dispatch({
		// 	type: authConstants.LOGOUT,
		// });

		// let errorReturn = {
		// 	error: error,
		// 	...getError(error),
		// };

		// errorReturn.toString = () => errorReturn.error_message;

		// navigationRef.navigate("Login")
		// return Promise.reject(errorReturn);

		// return
		error.config._retry = true
		// return
		authRefresh.refreshToken({
			currentToken: store.getState().auth.refreshToken
		}).then(((response) => {
			store.dispatch({
				type: authConstants.UPDATE_TOKENS,
				data: response.data
			});
			apiUpdateAccessToken(response.data.accessToken)

			originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`
			return axios(originalRequest)
		})).catch((error) => {
			store.dispatch({
				type: authConstants.LOGOUT,
			});
			return navigationRef.navigate("Login")
			// let errorReturn = {
			// 	error: error,
			// 	...getError(error),
			// };

			// errorReturn.toString = () => errorReturn.error_message;

			// navigationRef.navigate("Login")
			// return Promise.reject(errorReturn);
		})

	}

	let errorReturn = {
		error: error,
		...getError(error),
	};

	errorReturn.toString = () => errorReturn.error_message;

	return Promise.reject(errorReturn);
});

/**
 * Get erro to response
 *
 * @param error
 * @returns {{error_type: string, error_message: string, error_errors}}
 */
export function getError(error) {
	let error_type = "";
	let error_message = "";
	let error_errors = {};

	// Has response from server
	if (error.response) {
		const { data } = error.response;

		// Key message on data
		if (data.hasOwnProperty("message")) {
			error_message = data.error_message;
		}

		// 401 with message
		if (error.response.status === 401) {
			error_type = API_ERRO_TYPE_OTHER;

			if (!error_message) {
				error_message = "Os dados informados estão incorretos, verifique e tente novamente.";
			}
		}

		// 403 with message
		if (error.response.status === 403) {
			error_type = API_ERRO_TYPE_OTHER;

			if (!error_message) {
				error_message = "Usuário deslogado.";
			}
		}

		// Form validation error
		else if (error.response.status === 422) {
			error_type = API_ERRO_TYPE_VALIDATION;

			// Get first validation error
			if (data.hasOwnProperty("errors")) {
				let data_errors = data.errors;

				// First error
				for (let key in data_errors) {
					if (data_errors.hasOwnProperty(key)) {
						error_message = data_errors[key][0];

						break;
					}
				}

				for (let key in data_errors) {
					if (data_errors.hasOwnProperty(key)) {
						error_errors[key] = data_errors[key][0];
					}
				}
			}
		}
		// Too Many Requests
		else if (error.response.status === 429) {
			error_type = API_ERRO_TYPE_SERVER;

			if (!error_message) {
				error_message = "Foi atingido o limite de requisições ao servidor, por favor tente novamente mais tarde.";
			}
		}
		// Internal server error
		else if (error.response.status === 500) {
			error_type = API_ERRO_TYPE_SERVER;

			if (!error_message) {
				error_message = "Ocorreu uma falha de comunicação com o servidor.";
			}
		}
		// Not found
		else if (error.response.status === 404) {
			error_type = API_ERRO_TYPE_OTHER;

			if (!error_message) {
				error_message = "A url acessada não existe.";
			}
		}
		// 400-499 with message
		else if (error.response.status > 400 && error.response.status < 499) {
			error_type = API_ERRO_TYPE_API;

			if (!error_message) {
				error_message = "Ocorreu um erro, por favor tente novamente.";
			}
		}
		else {
			error_type = API_ERRO_TYPE_OTHER;

			if (!error_message) {
				error_message = "Ocorreu um erro, por favor tente novamente.";
			}
		}
	}
	else {
		error_type = API_ERRO_TYPE_CONNECTION;
		error_message = "Falha de comunicação com o servidor, verifique sua conexão com a internet e tente novamente.";
	}

	return {
		error_type: error_type,
		error_message: error_message,
		error_errors: error_errors,
	};
}
