import {StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

export default function CustomStatusBar(style) {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(style);
    }, []),
  );
}
