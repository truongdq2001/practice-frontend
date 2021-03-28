import React, {useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import CustomInput from '../../../components/customInput';
import Icon from 'react-native-vector-icons/Feather';
import {scale} from '../../../hooks/scale';
import {colors} from '../../../themes/colors';
import styles from './styles';
import BoxIcon from '../../../components/boxIcon/';
import HashTag from '../../../components/HashTag';
import CardCourse from './components/CardCourse';
import {dataCourse} from './data';
export default function CourseScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <View style={{height: 50}} />
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <View style={styles.viewHeader}>
          <View style={styles.viewHeaderContent}>
            <Text style={styles.textHead1}>Hello,</Text>
            <Text style={styles.textHead2}>Juana Antonieta</Text>
          </View>
          <BoxIcon icon={<Icon name="bell" size={25} />} border size={50} />
        </View>
        <CustomInput
          placeholder="Search course"
          rightIcon={<Icon name="search" size={30} />}
        />
        <View style={styles.viewCategory}>
          <Text style={styles.labelCategory}>Category : </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <View style={styles.viewScrollHashTag}>
              <HashTag text="Facebook" />
              <HashTag text="Twitter" />
              <HashTag text="UX" />
              <HashTag text="UI" />
              <HashTag text="Css" />
              <HashTag text="Javascript" />
              <HashTag text="Fullstack" />
            </View>
          </ScrollView>
        </View>
        <FlatList
          style={styles.viewFlat}
          data={dataCourse}
          keyExtractor={item => item.idCard + ''}
          renderItem={({item}) => <CardCourse {...item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
