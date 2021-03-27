import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scale} from '../../hooks/scale';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  rootHeader: {
    width: '100%',
    height: scale(40),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(16),
  },
  viewLeft: {
    width: scale(50),
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewRight: {
    width: scale(50),
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewCenter: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: scale(24),
    color: colors.title,
    lineHeight: scale(32),
    fontWeight: '700',
  },
});

export default function CustomHeader({
  title,
  childrenLeft,
  childrenRight,
  actionLeft,
  actionRight,
  customStyle,
}) {
  let rootStyle = [styles.rootHeader];
  if (customStyle) {
    rootStyle.push(customStyle);
  }
  return (
    <View style={rootStyle}>
      <TouchableOpacity style={styles.viewLeft} onPress={actionLeft}>
        {childrenLeft}
      </TouchableOpacity>
      <View style={styles.viewCenter}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.viewRight} onPress={actionRight}>
        {childrenRight}
      </TouchableOpacity>
    </View>
  );
}
