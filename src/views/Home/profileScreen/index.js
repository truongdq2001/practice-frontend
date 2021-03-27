import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import CustomHeader from '../../../components/CustomHeader';
import {colors} from '../../../themes/colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../../../components/Avatar';
import {images} from '../../../assets/images';
import {ROUTERS} from '../../../router/routerType';
export default function ProfileScreen() {
  const {navigate} = useNavigation();

  function RedirectItem({title}) {
    return (
      <TouchableOpacity style={styles.rootRedirect}>
        <Text style={styles.textRedirect}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.root}>
      <View style={styles.viewSpace} />
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <CustomHeader
        childrenLeft={
          <View style={styles.viewIconLeft}>
            <Icon name="chevron-left" size={25} />
          </View>
        }
        title="Profile"
        actionLeft={() => navigate(ROUTERS.AUTH_STACK)}
      />
      <View style={styles.viewBody}>
        <Avatar
          customStyle={styles.styleAvatar}
          source={images.user}
          size={150}
        />
        <RedirectItem title="Your Courses" />
        <RedirectItem title="Saved" />
        <RedirectItem title="Payment" />
        <TouchableOpacity
          onPress={() => navigate(ROUTERS.AUTH_STACK)}
          style={styles.btnLogout}>
          <Text style={styles.textLogout}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
