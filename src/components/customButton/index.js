import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {scale} from '../../hooks/scale';
import {colors} from '../../themes/colors';

const styles = StyleSheet.create({
  viewButton: {
    backgroundColor: colors.primary,
    height: scale(50),
    borderRadius: scale(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  textButton: {
    fontSize: scale(16),
    lineHeight: scale(18),
    fontWeight: '500',
    color: colors.white,
  },
});

export default ({
  styleButton,
  styleText,
  onPress,
  text,
  icon,
  activeOpacity = 0,
}) => {
  let rootStyleButton = [styles.viewButton];
  let rootStyleTextButton = [styles.textButton];

  if (styleButton) {
    rootStyleButton.push(styleButton);
  }
  if (styleText) {
    rootStyleTextButton.push(styleText);
  }

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={rootStyleButton}>
      {icon}
      <Text style={rootStyleTextButton}>{text}</Text>
    </TouchableOpacity>
  );
};
