import React from 'react';
import {StatusBar} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import CustomHeader from '../../../../components/CustomHeader';
import {colors} from '../../../../themes/colors';
import Icon from 'react-native-vector-icons/Feather';
import BoxIcon from '../../../../components/boxIcon';
import {useNavigation} from '@react-navigation/native';
const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
});

export default function YourCourse() {
  const {goBack, navigate} = useNavigation();
  return (
    <View style={styles.root}>
      <View style={{height: 50}} />
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <CustomHeader
        title="Your course"
        childrenLeft={
          <BoxIcon
            icon={<Icon name="chevron-left" size={25} />}
            border
            action={() => goBack()}
            size={40}
          />
        }
      />
    </View>
  );
}
