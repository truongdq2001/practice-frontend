import React, {useEffect} from 'react';
import RootRouter from './src/router/rootRouter';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/store/store';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </SafeAreaProvider>
  );
}
