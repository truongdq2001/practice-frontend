import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  root: {
    width: width,
    height: height,
  },
  container: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  viewCard: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  viewImageUser: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  viewUserInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    height: '100%',
  },
  textName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textAddress: {
    fontSize: 16,
    marginVertical: 5,
  },
  viewLoading: {
    position: 'absolute',
    width: '100%',
    height: height,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink',
    justifyContent: 'center',
  },
  viewLoadMore: {
    width: '100%',
    alignItems: 'center',
  },
  viewBtnLoadMore: {
    width: 200,
    height: 50,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
    borderRadius: 20,
  },
  textLoadmore: {
    color: 'white',
    fontSize: 20,
  },
});
