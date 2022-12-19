import { REHYDRATE } from "redux-persist";
import { authConstants } from "./../constants";

const reducerKey = "auth";

const defaultState = {
	tokenPush: null,
	isAuthenticated: false,
	isLoadingUserData: false,
	accessToken: "",
	refreshToken: "",
	sendSmsVerifiedAt: null,
	addresses: [],
	matricula: "",
	userData: {
		matricula: null,
		nome: "",
		email: "",
		celular: "",
		telefone: "",
		endereco: "",
		complemento: "",
		bairro: "",
		cep: "",
		cidade: "",
		estabelecimento: {
			codigo: null,
			codigoRegional: null,
			nome: ""
		},
		areaPropria: null,
		areaArendada: null,
		dataCadastro: "",
		dataInativacao: null,
		cidadePrevisaoTempo: "",
	}
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case REHYDRATE:
			let persistUpdate = {};

			if (action.payload && action.payload[reducerKey]) {
				const persistCache = action.payload[reducerKey];

				persistUpdate = {
					isAuthenticated: persistCache.isAuthenticated,
					accessToken: persistCache.accessToken,
					refreshToken: persistCache.refreshToken,
					matricula: persistCache.matricula,
					tokenPush: persistCache.tokenPush
				};

				if (persistCache.userData) {
					persistUpdate.userData = {
						matricula: persistCache.userData.matricula ?? defaultState.userData.matricula,
						nome: persistCache.userData.nome ?? defaultState.userData.nome,
						email: persistCache.userData.email ?? defaultState.userData.email,
						celular: persistCache.userData.celular ?? defaultState.userData.celular,
						telefone: persistCache.userData.telefone ?? defaultState.userData.telefone,
						endereco: persistCache.userData.endereco ?? defaultState.userData.endereco,
						complemento: persistCache.userData.complemento ?? defaultState.userData.complemento,
						bairro: persistCache.userData.bairro ?? defaultState.userData.bairro,
						cep: persistCache.userData.cep ?? defaultState.userData.cep,
						cidade: persistCache.userData.cidade ?? defaultState.userData.cidade,
						estabelecimento: persistCache.userData.estabelecimento ?? defaultState.userData.estabelecimento,
						areaPropria: persistCache.userData.areaPropria ?? defaultState.userData.areaPropria,
						areaArendada: persistCache.userData.areaArendada ?? defaultState.userData.areaArendada,
						dataCadastro: persistCache.userData.dataCadastro ?? defaultState.userData.dataCadastro,
						dataInativacao: persistCache.userData.dataInativacao ?? defaultState.userData.dataInativacao,
						cidadePrevisaoTempo: persistCache.userData.cidadePrevisaoTempo ?? defaultState.userData.cidadePrevisaoTempo,
					}
				}
			}

			return Object.assign({}, state, persistUpdate);

		case authConstants.LOGOUT:
			return Object.assign({}, state, defaultState);

		case authConstants.LOGIN:
			return Object.assign({}, state, {
				isAuthenticated: true,
				accessToken: `Bearer ${action.data.access_token}`,
				refreshToken: `Bearer ${action.data.refresh_token}`,
				matricula: action.data.matricula,
				userData: {
					...state.userData,
					matricula: action.data.matricula,
					nome: action.data.nome,
					email: action.data.email,
					celular: action.data.celular,
					telefone: action.data.telefone,
					endereco: action.data.endereco,
					complemento: action.data.complemento,
					bairro: action.data.bairro,
					cep: action.data.cep,
					cidade: action.data.cidade,
					estabelecimento: action.data.estabelecimento,
					areaPropria: action.data.areaPropria,
					areaArendada: action.data.areaArendada,
					dataCadastro: action.data.dataCadastro,
					dataInativacao: action.data.dataInativacao,
					cidadePrevisaoTempo: action.data.cidadePrevisaoTempo,
				}
			});

		case authConstants.UPDATE_TOKENS:
			return Object.assign({}, state, {
				accessToken: `Bearer ${action.data.accessToken}`,
				refreshToken: `Bearer ${action.data.refreshToken}`,
			});

		case authConstants.UPDATE_MATRICULA:
			return Object.assign({}, state, {
				matricula: action.data.matricula,
			});

		case authConstants.REGISTER:
			return Object.assign({}, state, {
				isAuthenticated: true,
				accessToken: `Bearer ${action.data.accessToken}`,
				matricula: action.data.matricula,
				userData: {
					...state.userData,
					matricula: action.data.matricula,
					nome: action.data.nome,
					email: action.data.email,
					celular: action.data.celular,
					telefone: action.data.telefone,
					endereco: action.data.endereco,
					complemento: action.data.complemento,
					bairro: action.data.bairro,
					cep: action.data.cep,
					cidade: action.data.cidade,
					estabelecimento: action.data.estabelecimento,
					areaPropria: action.data.areaPropria,
					areaArendada: action.data.areaArendada,
					dataCadastro: action.data.dataCadastro,
					dataInativacao: action.data.dataInativacao,
					cidadePrevisaoTempo: action.data.cidadePrevisaoTempo,
				},
			});

		case authConstants.REGISTER_COMPLETED:
			return Object.assign({}, state, {
				userData: {
					...state.userData,
					matricula: action.data.matricula,
					nome: action.data.nome,
					email: action.data.email,
					celular: action.data.celular,
					telefone: action.data.telefone,
					endereco: action.data.endereco,
					complemento: action.data.complemento,
					bairro: action.data.bairro,
					cep: action.data.cep,
					cidade: action.data.cidade,
					estabelecimento: action.data.estabelecimento,
					areaPropria: action.data.areaPropria,
					areaArendada: action.data.areaArendada,
					dataCadastro: action.data.dataCadastro,
					dataInativacao: action.data.dataInativacao,
					cidadePrevisaoTempo: action.data.cidadePrevisaoTempo,
				},
			});

		case authConstants.EDIT_USER_DATA:
			return Object.assign({}, state, {
				userData: {
					...state.userData,
					matricula: action.data.matricula,
					nome: action.data.nome,
					email: action.data.email,
					celular: action.data.celular,
					telefone: action.data.telefone,
					endereco: action.data.endereco,
					complemento: action.data.complemento,
					bairro: action.data.bairro,
					cep: action.data.cep,
					cidade: action.data.cidade,
					estabelecimento: action.data.estabelecimento,
					areaPropria: action.data.areaPropria,
					areaArendada: action.data.areaArendada,
					dataCadastro: action.data.dataCadastro,
					dataInativacao: action.data.dataInativacao,
					cidadePrevisaoTempo: action.data.cidadePrevisaoTempo,
				},
			});

		case authConstants.USERDATA_REQUEST:
			return Object.assign({}, state, {
				isLoadingUserData: true,
			});

		case authConstants.USERDATA_SUCCESS:
			return Object.assign({}, state, {
				isLoadingUserData: false,
				userData: {
					...state.userData,
					matricula: action.data.matricula,
					nome: action.data.nome,
					email: action.data.email,
					celular: action.data.celular,
					telefone: action.data.telefone,
					endereco: action.data.endereco,
					complemento: action.data.complemento,
					bairro: action.data.bairro,
					cep: action.data.cep,
					cidade: action.data.cidade,
					estabelecimento: action.data.estabelecimento,
					areaPropria: action.data.areaPropria,
					areaArendada: action.data.areaArendada,
					dataCadastro: action.data.dataCadastro,
					dataInativacao: action.data.dataInativacao,
					cidadePrevisaoTempo: action.data.cidadePrevisaoTempo,
				}
			});

		case authConstants.USERDATA_ERROR:
			return Object.assign({}, state, {
				isLoadingUserData: false,
			});

		case authConstants.EDIT_USER_AVATAR:
			return Object.assign({}, state, {
				userData: {
					...state.userData,
					avatar: action.data.avatar,
				},
			});

		case authConstants.CHANGE_PUSH_TOKEN:
			return Object.assign({}, state, {
				tokenPush: action.data
			});

		default:
			return state;
	}
}
