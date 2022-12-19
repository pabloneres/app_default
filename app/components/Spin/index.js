import React from "react";
import { Animated, Easing } from "react-native";

class Spin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            spin: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.loop(
            Animated.timing(this.state.spin, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: false,
            })
        ).start()
    }


    render() {
        const { spin } = this.state

        return (
            <Animated.View
                style={{
                    transform:
                        [
                            {
                                rotate: spin.interpolate(
                                    {
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '360deg'],
                                    }
                                )
                            }
                        ],
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}

export default Spin