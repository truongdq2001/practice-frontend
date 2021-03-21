import {StyleSheet} from 'react-native';
import {scale} from '../../../hooks/scale';
export default StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: '#78746D',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: scale(14),
    lineHeight: scale(21),
  },
  title: {
    fontSize: scale(24),
    color: '#000',
    textAlign: 'center',
    lineHeight: scale(32),
    fontWeight: '500',
  },
  viewButtonSkip: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  textSkip: {
    fontSize: scale(14),
    color: '#78746D',
    fontWeight: '500',
    lineHeight: scale(16),
  },
  viewButtonNext: {
    backgroundColor: '#E3562A',
    height: 50,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtonNext: {
    fontSize: scale(16),
    lineHeight: scale(18),
    fontWeight: '500',
    color: '#fff',
  },
});
