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
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {images} from '../../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from '../../../router/routerType';
import stylesCommon from '../../../themes/stylesCommon';
import Icon from 'react-native-vector-icons/FontAwesome';
import {scale} from '../../../hooks/scale';
export default function SignIn() {
  const {navigate} = useNavigation();
  const [showHideEye, setShowHideEye] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [checkScreen, setCheckScreen] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNavigate = () => {
    checkScreen ? setCheckScreen(false) : setCheckScreen(true);
  };
  const handleSubmit = () => {
    navigate(ROUTERS.MAINSTACK);
  };
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
          {!checkScreen && (
            <TouchableOpacity
              style={styles.viewButtonBack}
              onPress={() => setCheckScreen(true)}>
              <Image source={images.iconBack} style={styles.iconBack} />
            </TouchableOpacity>
          )}
          <View style={styles.viewLogo}>
            <Image
              source={checkScreen ? images.logoSignIn : images.logoSignUp}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.textTitle}>
              {checkScreen ? 'Login' : 'Sign up'}
            </Text>
            <Text style={styles.textSub}>
              {checkScreen
                ? 'Login with social networks'
                : 'Create your account'}
            </Text>
          </View>
          {checkScreen && (
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
          )}
          <View
            style={[
              styles.viewInput,
              {marginVertical: checkScreen ? scale(16) : 0},
            ]}>
            <View style={styles.viewInputContain}>
              {!checkScreen && (
                <TextInput
                  placeholder="jimmy john"
                  style={[styles.inputEmail, {marginBottom: 10}]}
                  ref={nameRef}
                  returnKeyType="next"
                  onSubmitEditing={() => emailRef.current.focus()}
                  value={name}
                  onChangeText={e => setName(e)}
                />
              )}
              <TextInput
                placeholder="jimmy@yahoo.com.vn"
                style={styles.inputEmail}
                ref={emailRef}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={email}
                onChangeText={e => setEmail(e)}
              />
              <View style={styles.viewInputPassword}>
                <TextInput
                  placeholder="password"
                  style={styles.inputPassword}
                  secureTextEntry={showHideEye}
                  ref={passwordRef}
                  value={password}
                  onChangeText={e => setPassword(e)}
                />
                <TouchableOpacity
                  onPress={() => setShowHideEye(!showHideEye)}
                  style={styles.viewIconHide}>
                  <Icon name={showHideEye ? 'eye-slash' : 'eye'} size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {checkScreen && (
            <TouchableOpacity>
              <Text style={styles.textLink}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
          <View style={styles.buttonLogin}>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.buttonLoginContain}>
              <Text style={styles.textLinkLogin}>
                {checkScreen ? 'Log in' : 'Sign up'}
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => handleNavigate()}>
            <Text style={styles.textLink}>
              {checkScreen ? 'Sign up' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
