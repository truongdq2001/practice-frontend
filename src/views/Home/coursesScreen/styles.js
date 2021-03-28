import {StyleSheet} from 'react-native';
import {scale} from '../../../hooks/scale';
import {colors} from '../../../themes/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: scale(16),
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: scale(12),
  },
  textHead1: {
    fontSize: scale(16),
    lineHeight: scale(26),
    color: colors.black,
    fontWeight: '400',
  },
  textHead2: {
    fontSize: scale(32),
    lineHeight: scale(42),
    fontWeight: '700',
    color: colors.black,
  },
  viewCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    marginVertical: scale(20),
  },
  labelCategory: {
    fontSize: scale(16),
    lineHeight: scale(21),
    color: colors.black,
    marginRight: scale(10),
  },
  viewScrollHashTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewBody: {},
  viewFlat: {
    width: '100%',
    height: '100%',
    zIndex: 999,
  },
});
