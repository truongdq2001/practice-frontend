import React, {useState} from 'react';
import {View, Image, StatusBar, Text} from 'react-native';
import CustomHeader from '../../../components/CustomHeader';
import {colors} from '../../../themes/colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {images} from '../../../assets/images';
import TabItem from './components/tabItem';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import ToggleSwitch from '../../../lib/ToggleSwitch/ToggleSwitch';
import BoxIcon from '../../../components/boxIcon';
export default function SettingScreen() {
  const {navigate, goBack} = useNavigation();
  const [toggle, setToggle] = useState(false);

  function GenTextCenter({text1, text2}) {
    return (
      <View>
        <Text style={styles.titleTab}>{text1}</Text>
        <Text style={styles.textSub}>{text2}</Text>
      </View>
    );
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={styles.viewSpace} />
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <CustomHeader
          actionLeft={() => goBack()}
          childrenLeft={
            <BoxIcon
              icon={<Icon name="chevron-left" size={25} color={colors.black} />}
              size={40}
              border
            />
          }
          title="Settings"
        />
        <View style={styles.viewImage}>
          <Image source={images.logoSetting} />
        </View>
        <View style={styles.viewBody}>
          <TabItem
            childLeft={
              <BoxIcon
                icon={<Icon name="bell" size={20} color={colors.white} />}
                size={40}
                bg={colors.border_bg}
              />
            }
            childCenter={<Text style={styles.titleTab}>Notifications</Text>}
            childRight={
              <ToggleSwitch
                isOn={toggle}
                onColor={colors.toggle}
                onToggle={() => setToggle(!toggle)}
              />
            }
          />
          <Text style={styles.labelSetting}>Account information</Text>
          <TabItem
            childLeft={
              <BoxIcon
                icon={<Icon name="user" size={20} color={colors.white} />}
                size={40}
                bg={colors.border_bg}
              />
            }
            childCenter={<GenTextCenter text1="Name" text2="Juana Antonieta" />}
            childRight={
              <Icon
                name="chevron-right"
                size={45}
                color={colors.border_color}
              />
            }
          />
          <TabItem
            childLeft={
              <BoxIcon
                icon={<Icon name="mail" size={20} color={colors.white} />}
                size={40}
                bg={colors.border_bg}
              />
            }
            childCenter={
              <GenTextCenter text1="Email" text2="codertruong2001@gmail.com" />
            }
            childRight={
              <Icon
                name="chevron-right"
                size={45}
                color={colors.border_color}
              />
            }
          />
          <TabItem
            childLeft={
              <BoxIcon
                icon={<Icon name="lock" size={20} color={colors.white} />}
                size={40}
                bg={colors.border_bg}
              />
            }
            childCenter={
              <GenTextCenter text1="Password" text2="change 2 weeks a go!" />
            }
            childRight={
              <Icon
                name="chevron-right"
                size={45}
                color={colors.border_color}
              />
            }
          />
        </View>
      </View>
    </ScrollView>
  );
}
