import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import BoxIcon from '../../../components/boxIcon';
import {useNavigation} from '@react-navigation/native';
export default function CourseLesson({}) {
  const {navigate, goBack} = useNavigation();
  return (
    <View style={styles.root}>
      <Text>CourseLesson</Text>
    </View>
  );
}
