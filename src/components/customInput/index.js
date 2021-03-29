import React from 'react';
import {View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {scale} from '../../hooks/scale';

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleInput: {
    flex: 1,
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: scale(12),
    paddingVertical: scale(16),
    paddingHorizontal: scale(21),
    fontSize: scale(18),
    fontWeight: '600',
  },
  viewIcon: {
    position: 'absolute',
  },
});

export default React.forwardRef(
  (
    {
      leftIcon,
      rightIcon,
      customStyle,
      onPressLeft,
      onPressRight,
      styleInput,
      ...props
    },
    ref,
  ) => {
    let rootStyleContain = [styles.viewContainer];
    let rootStyleInput = [styles.styleInput];
    if (customStyle) {
      rootStyleContain.push(customStyle);
    }
    if (styleInput) {
      rootStyleInput.push(styleInput);
    }

    return (
      <View style={rootStyleContain}>
        {leftIcon && (
          <TouchableOpacity
            onPress={onPressLeft}
            style={[styles.viewIcon, {left: scale(20)}]}>
            {leftIcon}
          </TouchableOpacity>
        )}
        <TextInput {...props} style={rootStyleInput} ref={ref} />
        {rightIcon && (
          <TouchableOpacity
            onPress={onPressRight}
            style={[styles.viewIcon, {right: scale(20)}]}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    );
  },
);
