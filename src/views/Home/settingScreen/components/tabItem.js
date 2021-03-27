import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from '../../../../hooks/scale';
import {colors} from '../../../../themes/colors';

const styles = StyleSheet.create({
  rootTab: {
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.border_color,
    borderRadius: scale(16),
    height: scale(100),
    marginVertical: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  viewLeftAndRight: {
    width: scale(70),
  },
  viewCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
});

export default function TabItem({childLeft, childCenter, childRight, action}) {
  return (
    <TouchableOpacity activeOpacity={1} onPress={action} style={styles.rootTab}>
      <View style={[styles.viewLeftAndRight, styles.viewFlex]}>
        {childLeft}
      </View>
      <View style={styles.viewCenter}>{childCenter}</View>
      <View style={[styles.viewLeftAndRight, styles.viewFlex]}>
        {childRight}
      </View>
    </TouchableOpacity>
  );
}
