import React from 'react';
import { View, Text, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

class Home extends React.Component {

    componentDidMount() {
      console.log("teste")

      this.requestPermission()

      messaging().onMessage(async remoteMessage => {
        Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      });

      messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      });
    }

    requestPermission = () => {
        messaging().requestPermission().then((response) => {
            this.firebaseInit()
        }).catch((error) => {
            console.log(error)
        })
    }

    firebaseInit() {
        // Check permission
        messaging().hasPermission()
            .then(enabled => {
                if (enabled) {
                    // Get firebase token
                    this.firebaseGetToken();
                }
                else {
                    // Request permission
                    messaging().requestPermission()
                        .then(() => {
                            // Get firebase token
                            this.firebaseGetToken();
                        })
                        .catch(error => {
                            console.log(error)
                            // User has rejected permissions
                        });
                }
            });
    }

    firebaseGetToken() {
        messaging().getToken().then(token => {
            console.log(token)
        });
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