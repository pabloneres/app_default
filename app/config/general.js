import * as Application from 'expo-application';
import * as Updates from 'expo-updates';
import Constants from "expo-constants";
import {
	Platform,
} from "react-native";

import { getStatusBarHeight, isIPhoneWithMonobrow } from "./../helpers/statusBarHeight";

// -----------------------------------------------------------------------------
// General
// -----------------------------------------------------------------------------
export const APP_NAME = Application.applicationName;
export const APP_VERSION = Application.nativeApplicationVersion;
export const APP_BUILD = Application.nativeBuildVersion;
export const APP_RELEASE_CHANNEL = Updates.releaseChannel;
export const IS_DEBUG = false; //TESTE
export const STATUS_BAR_HEIGHT = getStatusBarHeight();
export const BOTTOM_BAR_HEIGHT = isIPhoneWithMonobrow() ? 18 : 0;
export const TIMEOUT_TRANSITION_FIX = Platform.OS === 'ios' ? 400 : 200;

// -----------------------------------------------------------------------------
// API's
// -----------------------------------------------------------------------------
export const SENTRY_DNS = "https://f57ac442317d40ef9f413845e2b320e7@o517317.ingest.sentry.io/4504301069008896";
export const ONESIGNAL_ID = "172e987e-2ef0-4b37-96e8-36c2ff211122";
export const SMARTLOOK_KEY = "";
export const FACEBOOK_APP_ID = "1675471216157234";
export const FACEBOOK_VERSION = "v13.0";
export const IOS_CLIENT_ID = "47699115069-hd3sgfiuvrtptq169rf2r71b9j1nb9d6.apps.googleusercontent.com";
export const ANDROID_CLIENT_ID = "47699115069-mr915avlq68rinco7ura3rfr2fsdqd0n.apps.googleusercontent.com";
export const WEB_CLIENT_ID = "47699115069-8u0jjubp9oej9vd2fn1ih8uqine5964t.apps.googleusercontent.com";
export const API_GOOGLE_GEOCODING = "AIzaSyAVmVY7rlGzNF1KXmb2YENYxNb7jLl9ayo";

// -----------------------------------------------------------------------------
// API
// -----------------------------------------------------------------------------
// export const URLS = {
// 	default: {
// 		api: IS_DEBUG ? 'https://api-empresa.byponto.com.br/api/v1/funcionario/' : 'https://api-empresa.byponto.com.br/api/v1/funcionario/',
// 		api_admin: IS_DEBUG ? 'https://api-empresa.byponto.com.br/api/v1/admin/' : 'https://api-empresa.byponto.com.br/api/v1/admin/',
// 		api_app: IS_DEBUG ? 'https://api.byponto.com.br/api/v1/app/' : 'https://api.byponto.com.br/api/v1/app/',
// 		site: IS_DEBUG ? '' : '',
// 	},
// 	'prod-v1': {
// 		api: 'https://api-empresa.byponto.com.br/api/v1/funcionario/',
// 		api_admin: 'https://api-empresa.byponto.com.br/api/v1/admin/',
// 		api_app: 'https://api.byponto.com.br/api/v1/app/',
// 		site: '',
// 	},
// };

export const URLS = {
	default: {
		api: IS_DEBUG ? 'http://140.238.188.45' : 'http://140.238.188.45',
	},
	'prod-v1': {
		api: "http://140.238.188.45/api/",
		site: '',
	},
};

export const PATHS = {
	auth: "",
	cooperado: "/api/cooperado/v1",
	service: "/api/cooperado/services/v1",
	classificado: "/api/cooperado/classificados/v1",
	noticia: "/api/cooperado/services/v1"
}

export const API_URL = URLS[APP_RELEASE_CHANNEL].api;

export const SITE_URL = URLS[APP_RELEASE_CHANNEL].site;
export const EXCHANGE_AND_RETURN_URL = `${SITE_URL}app/institucional/trocas-e-devolucoes`;
export const PRIVACY_POLICY_URL = `${SITE_URL}app/institucional/politica-de-privacidade`;
export const TERMS_OF_USE_URL = `${SITE_URL}app/institucional/termos-de-uso`;

// -----------------------------------------------------------------------------
// Third data
// -----------------------------------------------------------------------------
export const APP_ANDROID_ID = 'br.com.byponto';
export const APP_IOS_ID = '1581346533';

// -----------------------------------------------------------------------------
// Errors
// -----------------------------------------------------------------------------
export const API_ERRO_TYPE_VALIDATION = "validation";
export const API_ERRO_TYPE_API = "api";
export const API_ERRO_TYPE_SERVER = "server";
export const API_ERRO_TYPE_CONNECTION = "connection";
export const API_ERRO_TYPE_OTHER = "other";
export const API_ERRO_TYPE_ACCESS_TOKEN = "access_token";
export const API_ERRO_TYPE_CANCEL = "cancel";

// -----------------------------------------------------------------------------
// Texts
// -----------------------------------------------------------------------------
export const TEXTS = {
	listEmpty: "Nenhum resultado encontrado",
	listError: "Ocorreu um erro",
	listErrorButton: "Tentar novamente",
}
