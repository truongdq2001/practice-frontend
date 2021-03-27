import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {scale} from '../../hooks/scale';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  avatarContain: {
    borderWidth: 5,
    borderColor: colors.border_bg,
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
export default function Avatar({source, customStyle, size = 170}) {
  let rootStyle = [
    styles.avatarContain,
    {
      width: scale(size),
      height: scale(size),
      borderRadius: scale(size),
    },
  ];
  if (customStyle) {
    rootStyle.push(customStyle);
  }
  return (
    <View style={rootStyle}>
      <Image
        source={source}
        style={[styles.avatar, {borderRadius: scale(size)}]}
      />
    </View>
  );
}
