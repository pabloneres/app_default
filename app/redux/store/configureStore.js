import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
//import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";

import {
	authRedurcer,
	generalRedurcer,
	unlockReducer,
} from "./../reducers";

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	timeout: null,
	blacklist: [
		"lock"
	],
};

const rootReducer = combineReducers({
	auth: authRedurcer,
	general: generalRedurcer,
	lock: unlockReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (__DEV__) {
	//middleware.push(logger);
}

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));
export const persistor = persistStore(store);
