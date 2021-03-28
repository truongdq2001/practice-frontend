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
import BoxIcon from '../../../components/boxIcon';
export default function ProfileScreen() {
  const {navigate, goBack} = useNavigation();

  function RedirectItem({title, action}) {
    return (
      <TouchableOpacity onPress={action} style={styles.rootRedirect}>
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
          <BoxIcon
            border
            size={37.5}
            icon={<Icon name="chevron-left" size={25} />}
          />
        }
        title="Profile"
        actionLeft={() => goBack()}
      />
      <View style={styles.viewBody}>
        <Avatar
          customStyle={styles.styleAvatar}
          source={images.user}
          size={150}
        />
        <RedirectItem
          title="Your Courses"
          action={() => navigate(ROUTERS.YOUR_COURSES)}
        />
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
