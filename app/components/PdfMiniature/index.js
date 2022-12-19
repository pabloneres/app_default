import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from 'react-native'
import WebView from 'react-native-webview'

class PdfMiniature extends Component {
    static propTypes = {
        scrollEnabled: PropTypes.bool,
    };

    static defaultProps = {
        scrollEnabled: false
    };

    render() {
        return (
            <WebView
                style={{ flex: 1 }}
                scrollEnabled={this.props.scrollEnabled}

                showsVerticalScrollIndicator={false}
                source={{ uri: this.props.uri }}
            />
        )
    }
}

export default PdfMiniature
