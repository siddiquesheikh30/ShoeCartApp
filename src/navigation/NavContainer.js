/* eslint-disable prettier/prettier */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import LoginScreen from '../screens/LoginScreen';
const Stack = createNativeStackNavigator();

function NavContainer() {
    // const { isLoggedIn } = useUserInfo();
    // console.log('userInfo>>>', isLoggedIn);
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ contentStyle: { backgroundColor: '#fff' } }}
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen name="Cart" component={CartScreen} />

                <Stack.Screen
                    name="Detail"
                    component={ProductDetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavContainer;
