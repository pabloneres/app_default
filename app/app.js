import React, { Component } from "react";
import { MenuProvider } from "react-native-popup-menu";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { RootSiblingParent } from 'react-native-root-siblings';
import * as Font from 'expo-font';
import * as Updates from 'expo-updates';
import * as Sentry from 'sentry-expo';
import {
    LogBox,
    View,
    StyleSheet
} from "react-native";

LogBox.ignoreAllLogs(true);

// Moment Language
import moment from "moment";

moment.locale("pt-br");
import { persistor, store } from "./redux/store/configureStore";

import Main from "./navigations/Main";

import { SENTRY_DNS, IS_DEBUG } from "./config/general";
// import Splash from "./screens/Splash";
import { BACKGROUND_COLOR, COLOR_PRIMARY } from "./config/styles"

const customFonts = {
    'icomoon': require('./assets/fonts/icons/icomoon.ttf'),
    'manrope': require('./assets/fonts/manrope/manrope.ttf'),
    'manropemedium': require('./assets/fonts/manrope/manropemedium.ttf'),
    'manropebold': require('./assets/fonts/manrope/manropebold.ttf'),
    'manropeblack': require('./assets/fonts/manrope/manropeblack.ttf'),
};

Sentry.init({
    dsn: SENTRY_DNS,
    enableInExpoDevelopment: false,
    debug: IS_DEBUG,
    enableNative: false,
});

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            loadedFonts: false,
            loadedImages: false,
        };
    }

    componentDidMount() {
        this.listenerUpdate = Updates.addListener(async (event) => {
            if (event.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
                await Updates.reloadAsync();
            }
        });

        // Load fonts
        Font.loadAsync(customFonts).finally(() => {
            this.setState({
                loadedFonts: true,
            });

            if (this.state.loadedFonts) {
                setTimeout(() => {
                    this.setState({
                        ready: true,
                    });
                }, 800);
            }
        });
    }

    componentWillUnmount() {
        // Remove listener
        this.listenerUpdate && this.listenerUpdate.remove();
    }

    render() {
        return (
            <View style={styles.wrapperAll}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        {(bootstrapped) => {

                            if (bootstrapped && this.state.ready) {
                                return (
                                    <RootSiblingParent>
                                        <MenuProvider customStyles={{ backdrop: { opacity: 0.5, backgroundColor: "#000" } }}>
                                            <Main />
                                        </MenuProvider>
                                    </RootSiblingParent>
                                )
                            }

                            if (!this.state.loadedFonts) return null;

                            return <></>
                            // return <Splash />
                        }}
                    </PersistGate>
                </Provider>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapperAll: {
        backgroundColor: COLOR_PRIMARY,
        flex: 1
    }
})
