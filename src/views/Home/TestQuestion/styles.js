import {Dimensions, StyleSheet} from 'react-native';
import {scale} from '../../../hooks/scale';
import {colors} from '../../../themes/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  viewBody: {
    flex: 1,
    paddingHorizontal: scale(16),
    justifyContent: 'space-between',
    paddingBottom: scale(30),
  },
  viewBtn: {
    width: '100%',
  },
  viewQuestion: {
    width: '100%',
    alignItems: 'center',
    marginTop: scale(30),
  },
  textCount: {
    fontSize: scale(14),
    lineHeight: scale(21),
    color: colors.black,
  },
  textQuestion: {
    fontSize: scale(24),
    lineHeight: scale(32),
    color: colors.black,
    marginVertical: scale(8),
  },
  viewImage: {
    marginVertical: scale(16),
  },
  answerItem: {
    width: '100%',
    padding: scale(16),
    borderWidth: 1,
    borderColor: colors.border_color,
    borderStyle: 'solid',
    borderRadius: scale(8),
    marginVertical: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
