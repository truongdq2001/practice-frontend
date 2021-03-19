import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {images} from '../../assets/images';
import {getProduct} from '../../store/actions';
import {useState} from 'react';
export default function Products() {
  const dataCard = useSelector(state => state.productReducers);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const handleLoadMore = async () => {
    await dispatch(getProduct(page));
  };
  return (
    <View style={styles.root}>
      <ScrollView>
        <View style={styles.container}>
          {dataCard.data?.map(item => (
            <View key={item.idCard} style={styles.viewCard}>
              <Image source={images.user} style={styles.viewImageUser} />
              <View style={styles.viewUserInfo}>
                <Text style={styles.textName}>{item?.name}</Text>
                <Text style={styles.textAddress}>{item?.address}</Text>
                <Text style={styles.textAddress}>{item?.birthday}</Text>
              </View>
            </View>
          ))}
          <View style={styles.viewLoadMore}>
            <TouchableOpacity
              onPress={() => {
                setPage(page + 1);
                handleLoadMore();
              }}
              style={styles.viewBtnLoadMore}>
              {dataCard?.loading ? (
                <ActivityIndicator color="white" size="small" />
              ) : (
                <Text style={styles.textLoadmore}>
                  {dataCard?.data?.length === 0 ? 'Download' : 'Load more'}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
