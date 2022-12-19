import React from 'react';
import { View, Text } from 'react-native';
import messaging from '@react-native-firebase/messaging';

class Home extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>teste</Text>
            </View>
        )
    }
}

export default Home