import React from 'react';
import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import CustomHeader from '../../../components/CustomHeader';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import BoxIcon from '../../../components/boxIcon';
import {colors} from '../../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from '../../../router/routerType';
import CustomButton from '../../../components/customButton';
import {images} from '../../../assets/images';

export default function TestQuestion() {
  const {goBack, navigate} = useNavigation();

  function AnswerItem() {
    return (
      <TouchableOpacity style={styles.answerItem}>
        <View>
          <Text>A.</Text>
        </View>
        <View>
          <Text>P is element of html ?</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.root}>
      <View style={{height: 50}} />
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <CustomHeader
        childrenLeft={
          <BoxIcon
            border
            action={() => goBack()}
            size={40}
            icon={<Icon name="chevron-left" size={25} />}
          />
        }
      />
      <View style={styles.viewBody}>
        <View style={styles.viewQuestion}>
          <Text style={styles.textCount}>1 of 20 </Text>
          <Text style={styles.textQuestion}>
            Which tag for the biggest header?
          </Text>
          <View style={styles.viewImage}>
            <Image source={images.course3} />
          </View>
          <AnswerItem />
          <AnswerItem />
          <AnswerItem />
        </View>
        <View style={styles.viewBtn}>
          <CustomButton text="Continue" />
        </View>
      </View>
    </View>
  );
}
