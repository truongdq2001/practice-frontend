import React, {useRef, useState} from 'react';
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
import stylesCommon from '../../../themes/stylesCommon';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function SignIn() {
  const {navigate} = useNavigation();
  const [showHideEye, setShowHideEye] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={stylesCommon.viewStatusBar} />
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={-180}
        style={{backgroundColor: '#fff'}}>
        <View style={styles.root}>
          <View style={styles.viewLogo}>
            <Image source={images.logoSignIn} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.textTitle}>Login</Text>
            <Text style={styles.textSub}>Login with social networks</Text>
          </View>
          <View style={styles.viewSocials}>
            <TouchableOpacity style={styles.viewIconSocials}>
              <Icon name="facebook" size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewIconSocials}>
              <Icon name="instagram" size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewIconSocials}>
              <Icon name="google" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.viewInput}>
            <View style={styles.viewInputContain}>
              <TextInput
                placeholder="jimmy@yahoo.com.vn"
                style={styles.inputEmail}
                ref={emailRef}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
              />
              <View style={styles.viewInputPassword}>
                <TextInput
                  placeholder="password"
                  style={styles.inputPassword}
                  secureTextEntry={showHideEye}
                  ref={passwordRef}
                />
                <TouchableOpacity
                  onPress={() => setShowHideEye(!showHideEye)}
                  style={styles.viewIconHide}>
                  <Icon name={showHideEye ? 'eye-slash' : 'eye'} size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.textLink}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style={styles.buttonLogin}>
            <TouchableOpacity style={styles.buttonLoginContain}>
              <Text style={styles.textLinkLogin}>Log in</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text style={styles.textLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
