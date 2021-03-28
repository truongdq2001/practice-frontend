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
import styles from '../signin/styles';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from '../../../router/routerType';
import stylesCommon from '../../../themes/stylesCommon';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomInput from '../../../components/customInput';
import IconFeather from 'react-native-vector-icons/Feather';
import CustomButton from '../../../components/customButton';
export default function SignUp() {
  const {navigate} = useNavigation();
  const [showHideEye, setShowHideEye] = useState(true);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    navigate(ROUTERS.MAIN_STACK);
  };

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
          <TouchableOpacity
            onPress={() => navigate(ROUTERS.SIGNIN)}
            style={styles.viewBtnBack}>
            <IconFeather name="chevron-left" size={30} />
          </TouchableOpacity>
          <View style={styles.viewLogo}>
            <Image source={images.logoSignUp} />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.textTitle}>{'Sign up'}</Text>
            <Text style={styles.textSub}>{'Create your account'}</Text>
          </View>
          <View style={styles.viewInput}>
            <View style={styles.viewWrapInput}>
              <CustomInput
                placeholder="Thomas Edison"
                styleInput={styles.styleCustomInput}
                ref={nameRef}
                returnKeyType="next"
                onSubmitEditing={() => emailRef.current.focus()}
                value={name}
                onChangeText={e => setName(e)}
              />
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

          <CustomButton
            styleButton={styles.buttonLogin}
            styleText={styles.textBtnLogin}
            text="Sign up"
            onPress={() => handleSubmit()}
          />
          <TouchableOpacity onPress={() => navigate(ROUTERS.SIGNIN)}>
            <Text style={styles.textLink}>{'Login'}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
