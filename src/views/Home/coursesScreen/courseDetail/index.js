import React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {colors} from '../../../../themes/colors';
import styles from './styles';
import CustomHeader from '../../../../components/CustomHeader';
import BoxIcon from '../../../../components/boxIcon';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
export default function CourseDetail({route}) {
  const {goBack} = useNavigation();
  const {course} = route.params;
  return (
    <View style={styles.root}>
      <View style={{height: 50}} />
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <CustomHeader
        childrenLeft={
          <BoxIcon
            size={40}
            border
            action={() => goBack()}
            icon={<Icon name="chevron-left" size={25} />}
          />
        }
        title={course.title}
      />
      <View style={styles.viewBanner}>
        <Image source={course.imageCard} style={styles.img} />
      </View>
      <View style={styles.wrapPrice}>
        <View style={styles.viewPrice}>
          <Text style={styles.textPrice}>$ {course.price}</Text>
        </View>
      </View>
      <View style={styles.viewBody}>
        <Text style={styles.textLabel}>About the course</Text>
        <Text style={styles.textNormal}>{course.description}</Text>
        <View style={{height: 30}} />
        <Text style={styles.textLabel}>Duration</Text>
        <Text style={[styles.textNormal, {color: colors.toggle}]}>
          {course.hours}
        </Text>
      </View>
    </View>
  );
}
