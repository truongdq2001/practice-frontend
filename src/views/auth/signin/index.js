import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {images} from '../../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from '../../../router/routerType';
export default function SignIn() {
  const {navigate} = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'position' : 'padding'}
        keyboardVerticalOffset={Platform.OS === 'android' && -250}
        style={{backgroundColor: '#fffff'}}>
        <View style={styles.root}>
          <StatusBar barStyle="dark-content" backgroundColor="lightgreen" />
          <View style={styles.viewTop} />
          <Image source={images.logo} style={styles.viewLogo} />
          <Text style={styles.textTitle}>Welcome to App Rick</Text>
          <View style={styles.viewInput}>
            <TextInput
              placeholder="jinmy@yahoo.com.vn"
              style={styles.styleInput}
            />
            <TextInput
              placeholder="*****************"
              style={styles.styleInput}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigate(ROUTERS.HOME)}
            style={styles.viewButton}>
            <Text style={styles.textSignIn}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
