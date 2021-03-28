import {StyleSheet} from 'react-native';
import {scale} from '../../../../hooks/scale';
import {colors} from '../../../../themes/colors';

export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: scale(16),
  },
  formSearch: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  customStyleInput: {
    width: '80%',
    borderWidth: 1,
  },
  textResult: {
    fontSize: scale(24),
    fontWeight: '700',
    lineHeight: scale(32),
    color: colors.black,
  },
  viewTextResult: {
    width: '100%',
    marginVertical: scale(12),
  },
});
