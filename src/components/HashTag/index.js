import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {scale} from '../../hooks/scale';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    borderRadius: scale(12),
    marginHorizontal: scale(6),
  },
  textHashTag: {
    fontSize: scale(14),
    lineHeight: scale(18),
    color: colors.typography,
    fontWeight: '700',
  },
});
export default function HashTag({text, isActive}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          backgroundColor: isActive ? colors.primary : colors.border_bg,
        },
      ]}>
      <Text style={styles.textHashTag}>#{text}</Text>
    </TouchableOpacity>
  );
}
