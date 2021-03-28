import {StyleSheet} from 'react-native';
import {scale} from '../../../../hooks/scale';
import {colors} from '../../../../themes/colors';
export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  viewBanner: {
    width: '100%',
    paddingHorizontal: scale(16),
    height: scale(250),
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  wrapPrice: {
    width: '100%',
    paddingHorizontal: scale(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  viewPrice: {
    paddingVertical: scale(4),
    paddingHorizontal: scale(12),
    borderRadius: scale(12),
    width: scale(60),
    backgroundColor: colors.border_bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPrice: {
    color: colors.white,
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: scale(19.6),
  },
  viewBody: {
    width: '100%',
    paddingHorizontal: scale(16),
    marginTop: scale(30),
  },
  textLabel: {
    fontSize: scale(24),
    fontWeight: '700',
    color: colors.black,
    lineHeight: scale(32),
  },
  textNormal: {
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: scale(21),
    color: colors.black,
  },
});
