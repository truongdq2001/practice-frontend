import React from 'react';
import {View, Text, Button} from 'react-native';
import styled from './styled';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from '../../router/routerType';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../store/actions';
export default function Home() {
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styled.root}>
      <Button
        onPress={() => {
          navigate(ROUTERS.PRODUCTS);
        }}
        title="Product"
      />
    </View>
  );
}
