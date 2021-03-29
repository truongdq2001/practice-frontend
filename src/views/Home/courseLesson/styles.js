import {StyleSheet} from 'react-native';
import {scale} from '../../../hooks/scale';
import {colors} from '../../../themes/colors';

export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: scale(16),
  },
  contain: {
    width: '100%',
    alignItems: 'center',
    marginTop: scale(16),
    position: 'relative',
  },
  viewBanner: {
    width: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  viewContent: {
    width: '100%',
    marginTop: scale(20),
  },
  title: {
    fontSize: scale(24),
    lineHeight: scale(32),
    color: colors.black,
    fontWeight: '700',
  },
  btnPlay: {
    position: 'absolute',
    right: scale(10),
    bottom: scale(10),
  },
  subTitle: {
    fontSize: scale(16),
    lineHeight: scale(24),
    color: colors.black,
  },
});
