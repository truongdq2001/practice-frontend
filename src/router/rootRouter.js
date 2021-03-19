import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTERS} from './routerType';
import Home from '../views/Home';
import Products from '../views/Products';
import SplashScreen from '../views/auth/splashscreen';
import SignIn from '../views/auth/signin';

export default function RootRouter() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTERS.SPLASHSCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ROUTERS.HOME} component={Home} />
        <Stack.Screen name={ROUTERS.PRODUCTS} component={Products} />
        <Stack.Screen name={ROUTERS.SPLASHSCREEN} component={SplashScreen} />
        <Stack.Screen name={ROUTERS.SIGNIN} component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
