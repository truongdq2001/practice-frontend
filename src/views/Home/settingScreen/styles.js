import {StyleSheet} from 'react-native';
import {scale} from '../../../hooks/scale';
import {colors} from '../../../themes/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  viewSpace: {
    height: scale(50),
  },
  viewIconLeft: {
    width: scale(40),
    height: scale(40),
    borderWidth: 1,
    borderColor: colors.border_color,
    borderRadius: scale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewImage: {
    marginVertical: scale(24),
    height: scale(190),
  },
  viewBody: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: scale(16),
  },
  boxCircleIcon: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40),
    backgroundColor: colors.border_bg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelSetting: {
    fontSize: scale(20),
    lineHeight: scale(26),
    color: colors.title,
    fontWeight: '700',
    textAlign: 'left',
    width: '100%',
    marginVertical: scale(15),
  },
  titleTab: {
    fontSize: scale(20),
    lineHeight: scale(26),
    color: colors.title,
    fontWeight: '700',
  },
  textSub: {
    fontSize: scale(16),
    lineHeight: scale(21),
    color: colors.textSub,
    fontWeight: '500',
  },
});
