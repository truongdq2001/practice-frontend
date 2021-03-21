import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTERS} from './routerType';
import HomeStack from './homeStack';
export default function MainStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ROUTERS.HOMESTACK}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTERS.HOMESTACK} component={HomeStack} />
    </Stack.Navigator>
  );
}
