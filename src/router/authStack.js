import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTERS} from './routerType';
import SignIn from '../views/auth/signin';
import SplashScreen from '../views/auth/splashscreen';
import IntroScreen from '../views/auth/introScreen';

export default function AuthStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ROUTERS.INTROSCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTERS.INTROSCREEN} component={IntroScreen} />
      <Stack.Screen name={ROUTERS.SIGNIN} component={SignIn} />
    </Stack.Navigator>
  );
}
