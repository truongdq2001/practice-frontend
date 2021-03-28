import {StyleSheet, Dimensions} from 'react-native';
import {scale} from '../../../hooks/scale';
import {colors} from '../../../themes/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
  },

  viewBanner: {
    width: '100%',
    marginVertical: scale(16),
    paddingHorizontal: scale(16),
  },
  wrapperBanner: {
    borderRadius: scale(16),
    borderWidth: 1,
    borderColor: colors.border_color,
    overflow: 'hidden',
  },
  viewBannerTop: {
    width: '100%',
    position: 'relative',
    height: scale(250),
  },
  viewVideo: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  btnPlay: {
    position: 'absolute',
    bottom: scale(16),
    right: scale(16),
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  viewBannerBottom: {
    width: '100%',
    padding: scale(16),
  },
  labelBanner: {
    fontSize: scale(24),
    lineHeight: scale(32),
    fontWeight: '700',
    color: colors.black,
  },
  subLabelBanner: {
    fontSize: scale(14),
    lineHeight: scale(21),
    color: colors.black,
    fontWeight: '600',
  },
  viewBody: {
    width: '100%',
    paddingHorizontal: scale(16),
  },
  containTag: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(8),
    paddingHorizontal: scale(16),
    borderRadius: scale(16),
    borderWidth: 1,
    borderColor: colors.border_color,
    borderStyle: 'solid',
    marginVertical: scale(12),
    overflow: 'hidden',
  },

  viewTagImage: {
    height: '100%',
    width: '25%',
  },
  imageTag: {
    width: scale(80),
    height: scale(80),
    resizeMode: 'contain',
  },
  viewTagProgress: {},
  tagLabel: {
    fontSize: scale(24),
    fontWeight: '700',
    lineHeight: scale(32),
    color: colors.black,
  },
  viewProgress: {
    marginTop: scale(8),
  },
});
