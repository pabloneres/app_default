import React, { useRef } from "react";
import { NavigationContainer, useNavigationContainerRef, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


// Import screens
import Home from "../../screens/Home";


export const navigationRef = createNavigationContainerRef();
export default function () {

	const routeNameRef = useRef();

	return (
		<NavigationContainer
			ref={navigationRef}
			onReady={() => {
				routeNameRef.current = navigationRef.getCurrentRoute().name;
			}}
			onStateChange={() => {
				const previousRouteName = routeNameRef.current;
				const currentRouteName = navigationRef.getCurrentRoute().name;

				if (previousRouteName !== currentRouteName) {
					if (!__DEV__) {

					}
				}

				// Save the current route name for later comparison
				routeNameRef.current = currentRouteName;
			}}>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
					animationTypeForReplace: 'push',
				}}
			>
				<Stack.Screen name="Home" component={Home} />

			</Stack.Navigator>
		</NavigationContainer>
	);
}