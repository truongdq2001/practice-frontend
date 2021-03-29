import {StyleSheet} from 'react-native';
import {scale} from '../../../hooks/scale';
import {colors} from '../../../themes/colors';

export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  viewTittle: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scale(12),
  },
  title: {
    fontSize: scale(24),
    lineHeight: scale(32),
    color: colors.black,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: scale(16),
    lineHeight: scale(24),
    color: colors.black,
  },
  viewTopTab: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
  },
  btnTopTab: {
    width: '32%',
    height: '100%',
    backgroundColor: colors.primary2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperBtn: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtnTopTab: {
    fontSize: scale(16),
    lineHeight: scale(26),
    color: colors.black,
  },
  radiusLeft: {
    borderTopLeftRadius: scale(16),
    borderBottomLeftRadius: scale(16),
  },
  radiusRight: {
    borderTopRightRadius: scale(16),
    borderBottomRightRadius: scale(16),
  },
});
