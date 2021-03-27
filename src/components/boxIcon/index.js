import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderWidth: 1.2,
    borderColor: colors.border_color,
    borderStyle: 'solid',
  },
});

export default function BoxIcon({icon, size = 40, bg, action, border}) {
  let rootStyle = [
    styles.contain,
    {
      width: size,
      height: size,
      borderRadius: size,
      backgroundColor: bg ? bg : colors.white,
    },
  ];
  if (border) {
    rootStyle.push(styles.border);
  }
  return (
    <TouchableOpacity onPress={action} style={rootStyle}>
      {icon}
    </TouchableOpacity>
  );
}
