import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTERS} from './routerType';
import SignIn from '../views/auth/signin';
import SplashScreen from '../views/auth/splashscreen';
import INTRO_SCREEN from '../views/auth/introScreen';
import SignUp from '../views/auth/signUp';

export default function AUTH_STACK() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ROUTERS.INTRO_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTERS.INTRO_SCREEN} component={INTRO_SCREEN} />
      <Stack.Screen name={ROUTERS.SIGNIN} component={SignIn} />
      <Stack.Screen name={ROUTERS.SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  );
}
