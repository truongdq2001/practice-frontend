import React from 'react';
import {View, Text} from 'react-native';
import CardQuiz from './cardQuiz';
import styles from './styles';
export default function CourseTest() {
  return (
    <View style={styles.root}>
      <View style={styles.viewContain}>
        <CardQuiz />
      </View>
    </View>
  );
}
