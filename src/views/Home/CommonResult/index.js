import React from 'react';
import {View, StatusBar, StyleSheet, Image, Text} from 'react-native';
import {colors} from '../../../themes/colors';
import CustomHeader from '../../../components/CustomHeader';
import BoxIcon from '../../../components/boxIcon';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {scale} from '../../../hooks/scale';
import {images} from '../../../assets/images';
import CustomButton from '../../../components/customButton';
const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  body: {
    paddingHorizontal: scale(16),
    width: '100%',
    marginTop: scale(200),
  },
  viewText: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: scale(30),
  },
  viewBtn: {
    width: '100%',
    marginTop: scale(50),
  },
});
export default function CommonResult() {
  const {goBack, navigate} = useNavigation();
  return (
    <View style={styles.root}>
      <View style={{height: 50}} />
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <CustomHeader
        childrenLeft={
          <BoxIcon
            border
            action={() => goBack()}
            size={40}
            icon={<Icon name="chevron-left" size={25} />}
          />
        }
        title="Payment"
      />
      <View style={styles.body}>
        <Image source={images.imageSaved} />
        <View style={styles.viewText}>
          <Text style={styles.textLarge}>No Payment Method</Text>
          <Text style={styles.textSub}>You don’t have any payment method</Text>
        </View>
        <View style={styles.viewBtn}>
          <CustomButton text="Continue" />
        </View>
      </View>
    </View>
  );
}
