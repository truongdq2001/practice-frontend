import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSplash: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  viewProgressBar: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
});
