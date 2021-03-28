import React from 'react';
import {Image} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from '../../../../hooks/scale';
import {colors} from '../../../../themes/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: scale(8),
    height: scale(350),
    borderWidth: 1,
    borderColor: colors.border_color,
    borderStyle: 'solid',
    overflow: 'hidden',
    marginVertical: scale(16),
  },
  viewCardTop: {
    width: '100%',
    height: '65%',
    position: 'relative',
  },
  viewCardBottom: {
    width: '100%',
    height: '35%',
    padding: scale(16),
  },
  styleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textHours: {
    fontSize: scale(14),
    lineHeight: scale(18),
    fontWeight: '500',
    color: colors.toggle,
  },
  viewPrice: {
    position: 'absolute',
    backgroundColor: colors.border_bg,
    bottom: scale(16),
    right: scale(24),
    paddingHorizontal: scale(16),
    paddingVertical: scale(4),
    borderRadius: scale(16),
  },
  textPrice: {
    fontWeight: '700',
    fontSize: scale(14),
    color: colors.white,
    lineHeight: scale(16),
  },
  textTitle: {
    fontSize: scale(24),
    fontWeight: '700',
    lineHeight: scale(32),
    color: colors.black,
    marginTop: scale(6),
  },
  textSub: {
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '500',
    color: colors.black,
    marginTop: scale(6),
  },
});

export default function CardCourse(props) {
  const {imageCard, price, hours, title, subTitle} = props;
  return (
    <View style={styles.container}>
      <View style={styles.viewCardTop}>
        <Image source={imageCard} style={styles.styleImage} />
        {price && (
          <View style={styles.viewPrice}>
            <Text style={styles.textPrice}>${price}</Text>
          </View>
        )}
      </View>
      <View style={styles.viewCardBottom}>
        <Text style={styles.textHours}>{hours}</Text>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSub}>{subTitle}</Text>
      </View>
    </View>
  );
}
