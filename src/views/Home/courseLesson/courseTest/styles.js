import {StyleSheet} from 'react-native';
import {colors} from '../../../../themes/colors';
import {scale} from '../../../../hooks/scale';
export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },

  viewContain: {
    paddingHorizontal: scale(16),
  },
  viewCardQuiz: {
    width: '100%',
    height: scale(500),
    borderWidth: 1,
    borderColor: colors.border_color,
    borderRadius: scale(8),
    padding: scale(16),
  },
  viewQuizContain: {
    marginTop: scale(30),
  },
  textQuiz: {
    color: colors.primary,
    fontSize: scale(14),
    lineHeight: scale(21),
  },
  labelQuiz: {
    fontSize: scale(20),
    lineHeight: scale(32),
    color: colors.black,
    fontWeight: '700',
    marginTop: scale(10),
  },
  labelSubQuiz: {
    fontSize: scale(14),
    color: colors.black,
    lineHeight: scale(21),
    marginTop: scale(5),
  },
  viewBtnGoQuiz: {
    marginTop: scale(30),
  },
  customBtn: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
  },
});
