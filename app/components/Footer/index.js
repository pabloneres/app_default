import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native"
import Logo from "~/assets/svg/logo.svg"


class UIFooter extends Component {
    render() {

        return (
            <View style={{ width: "100%", height: 30, marginTop: 50, marginBottom: 10 }}>
                <Logo
                    width="100%"
                    height="75%"
                />
            </View>
        );
    }
}

export default UIFooter;
