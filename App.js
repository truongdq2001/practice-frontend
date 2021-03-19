import React from 'react';
import RootRouter from './src/router/rootRouter';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './src/store/store';
import {Provider} from 'react-redux';
export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </SafeAreaProvider>
  );
}
