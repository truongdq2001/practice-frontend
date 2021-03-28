import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
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
import CustomInput from '../../../components/customInput';
import IconFeather from 'react-native-vector-icons/Feather';
import CustomButton from '../../../components/customButton';
export default function SignIn() {
  const {navigate} = useNavigation();
  const [showHideEye, setShowHideEye] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    navigate(ROUTERS.MAIN_STACK);
  };
  const IconSocial = ({name}) => (
    <TouchableOpacity style={styles.viewIconSocials}>
      <Icon name={name} size={25} color="#fff" />
    </TouchableOpacity>
  );
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={stylesCommon.viewStatusBar} />
      <KeyboardAvoidingView style={{backgroundColor: '#fff'}}>
        <View style={styles.root}>
          <View style={styles.viewLogo}>
            <Image source={images.logoSignIn} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.textTitle}>{'Login'}</Text>
            <Text style={styles.textSub}>{'Login with social networks'}</Text>
          </View>
          <View style={styles.viewSocials}>
            <IconSocial name="facebook" />
            <IconSocial name="instagram" />
            <IconSocial name="google" />
          </View>
          <View style={styles.viewInput}>
            <View style={styles.viewWrapInput}>
              <CustomInput
                placeholder="jimmy@yahoo.com.vn"
                styleInput={styles.styleCustomInput}
                ref={emailRef}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={email}
                onChangeText={e => setEmail(e)}
              />
              <CustomInput
                placeholder="password"
                styleInput={styles.styleCustomInput}
                ref={passwordRef}
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={password}
                secureTextEntry={!showHideEye}
                onChangeText={e => setPassword(e)}
                rightIcon={
                  <IconFeather
                    name={showHideEye ? 'eye' : 'eye-off'}
                    size={25}
                  />
                }
                onPressRight={() => setShowHideEye(!showHideEye)}
              />
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.textLink}>Forgot Password?</Text>
          </TouchableOpacity>
          <CustomButton
            styleButton={styles.buttonLogin}
            styleText={styles.textBtnLogin}
            text="Login"
            onPress={() => handleSubmit()}
          />
          <TouchableOpacity onPress={() => navigate(ROUTERS.SIGN_UP)}>
            <Text style={styles.textLink}>{'Sign up'}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
