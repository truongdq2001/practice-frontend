import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import CustomInput from '../../../components/customInput';
import Icon from 'react-native-vector-icons/Feather';
import {scale} from '../../../hooks/scale';
export default function COURSE_SCREEN() {
  const [showHideEye, setShowHideEye] = useState(false);
  return (
    <View>
      <SafeAreaView>
        <View style={{height: 50}} />
      </SafeAreaView>
      <CustomInput
        placeholder="placeholder"
        secureTextEntry={showHideEye}
        rightIcon={<Icon name={showHideEye ? 'eye-off' : 'eye'} size={25} />}
        onPressRight={() => setShowHideEye(!showHideEye)}
      />
      <Text>COURSE_SCREEN</Text>
    </View>
  );
}
