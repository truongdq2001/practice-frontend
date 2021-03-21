import React, {createRef, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {ROUTERS} from './routerType';
import MainStack from './mainStack';
import AuthStack from './authStack';

export default function RootRouter() {
  const ref = createRef();
  const routerNameRef = useRef();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer
      ref={ref}
      onReady={() => {
        routerNameRef.current = ref.current.getCurrentRoute().name;
      }}
      onStateChange={() => {
        const previousRouteName = routerNameRef.current;
        const currentRouteName = ref.current.getCurrentRoute().name;
        console.log(
          'ScreenTracking : prev,next : ',
          previousRouteName,
          currentRouteName,
        );  
        routerNameRef.current = currentRouteName;
      }}>
      <Stack.Navigator
        initialRouteName={ROUTERS.AUTHSTACK}
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={ROUTERS.MAINSTACK} component={MainStack} />
        <Stack.Screen name={ROUTERS.AUTHSTACK} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
