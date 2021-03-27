import {StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import {scale} from '../../../hooks/scale';
import {colors} from '../../../themes/colors';
export default StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  viewLogo: {
    marginTop: scale(50),
  },
  viewText: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scale(15),
  },
  textTitle: {
    fontSize: scale(30),
    lineHeight: scale(32),
    fontWeight: 'bold',
    color: '#3C3A36',
  },
  textSub: {
    fontWeight: '400',
    fontSize: scale(18),
    lineHeight: scale(21),
    marginTop: scale(12.5),
  },
  viewSocials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewIconSocials: {
    backgroundColor: '#65AAEA',
    width: scale(40),
    height: scale(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(8),
    marginHorizontal: scale(10),
  },
  viewInput: {
    width: '100%',
    marginVertical: scale(16),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textLink: {
    fontWeight: '700',
    fontSize: scale(16),
    lineHeight: scale(16),
    color: '#78746D',
  },
  buttonLogin: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scale(10),
  },

  textBtnLogin: {
    fontSize: scale(16),
    lineHeight: scale(18),
    color: '#ffffff',
    fontWeight: '700',
  },
  viewWrapInput: {
    width: '90%',
  },
  styleCustomInput: {
    borderWidth: 1,
    marginVertical: scale(8),
  },
  viewBtnBack: {
    position: 'absolute',
    top: scale(10),
    left: scale(20),
    width: scale(50),
    height: scale(50),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border_color,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(50),
  },
});
