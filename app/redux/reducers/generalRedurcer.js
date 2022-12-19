import { REHYDRATE } from "redux-persist";
import { authConstants, generalConstants } from "./../constants";

const reducerKey = "general";

const defaultState = {
	welcomeSkip: false,
	termsSkip: false,
	notifiable: true,
	touchID: false,
	types: [],
	enableWhatsapp: false,
	whatsapp: null,
	whatsappText: null,
	whatsappUrl: null,
	userSearch: null,
	menus: [],
	fastLogin: null,
	lastSearchs: [],
	filters: {
		entrega: {
			selectedPropertie: 0,
			selectedCulture: "*",
			selectedSafra: "2024-2024",
		},
		historicoVendas: 0,
		historicoPedidos: 0,
		notasFiscais: 0,
	}
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case REHYDRATE:
			let persistUpdate = {};

			if (action.payload && action.payload[reducerKey]) {
				const persistCache = action.payload[reducerKey];

				persistUpdate = {
					notifiable: persistCache.notifiable === false ? false : defaultState.notifiable,
					welcomeSkip: persistCache.welcomeSkip ?? defaultState.welcomeSkip,
					termsSkip: persistCache.termsSkip ?? defaultState.termsSkip,
					touchID: persistCache.touchID === true ? true : defaultState.touchID,
					userSearch: persistCache.userSearch ?? defaultState.userSearch,
					menus: persistCache.menus ?? defaultState.menus,
					lastSearchs: persistCache.lastSearchs ?? defaultState.lastSearchs,
					filters: persistCache.filters ?? defaultState.filters,
				};

				if (persistCache.fastLogin) {
					persistUpdate.fastLogin = {
						username: persistCache.fastLogin.username ?? defaultState.fastLogin.username,
						password: persistCache.fastLogin.password ?? defaultState.fastLogin.password,
					}
				}

			}

			return Object.assign({}, state, persistUpdate);

		case authConstants.LOGOUT:
			return Object.assign({}, state, {
				notifiable: true,
			});

		case generalConstants.WELCOME_SKIP:
			return Object.assign({}, state, {
				welcomeSkip: true,
			});


		case generalConstants.FAST_LOGIN:
			return Object.assign({}, state, {
				fastLogin: {
					username: action.data.username,
					password: action.data.password
				}
			});


		case generalConstants.TERMS_SKIP:
			return Object.assign({}, state, {
				termsSkip: true,
			});

		case generalConstants.NOTIFICATION_ON:
			return Object.assign({}, state, {
				notifiable: true,
			});

		case generalConstants.NOTIFICATION_OFF:
			return Object.assign({}, state, {
				notifiable: false,
			});

		case generalConstants.TOUCHID_ON:
			return Object.assign({}, state, {
				touchID: true,
			});

		case generalConstants.TOUCHID_OFF:
			return Object.assign({}, state, {
				touchID: false,
			});

		case generalConstants.TYPES:
			return Object.assign({}, state, {
				types: action.data.types,
			});

		case generalConstants.USER_SEARCH:
			return Object.assign({}, state, {
				userSearch: action.data,
			});

		case generalConstants.MENUS:
			return Object.assign({}, state, {
				menus: action.data,
			});

		case generalConstants.SETTING_WHATSAPP:
			return Object.assign({}, state, {
				enableWhatsapp: action.payload.enable_whatsapp,
				whatsapp: action.payload.whatsapp,
				whatsappUrl: action.payload.whatsapp_url,
			});

		case generalConstants.SAVE_FAQ_SEARCH:
			return Object.assign({}, state, {
				lastSearchs: action.data,
			});

		case generalConstants.SAVE_FILTERS:
			return Object.assign({}, state, {
				filters: action.data,
			});

		default:
			return state;
	}
}
