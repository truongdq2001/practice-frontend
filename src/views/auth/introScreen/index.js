import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';
import {images} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from '../../../router/routerType';
import {colors} from '../../../themes/colors';
const dataIntro = [
  {
    key: 'one',
    title: 'Learn anytime and anywhere',
    text: `Quarantine is the perfect time to spend your day learning something new, from anywhere!`,
    image: images.intro1,
    backgroundColor: '#ffffff',
  },
  {
    key: 'two',
    title: 'Find a course for you',
    text: `Quarantine is the perfect time to spend your day learning something new, from anywhere!`,
    image: images.intro2,
    backgroundColor: '#ffffff',
  },
  {
    key: 'three',
    title: 'Improve your skills',
    text:
      'Quarantine is the perfect time to spend your day learning something new, from anywhere!',
    image: images.intro3,
    backgroundColor: '#ffffff',
  },
];
export default function INTRO_SCREEN() {
  const {navigate} = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View style={[styles.slide, {backgroundColor: item?.backgroundColor}]}>
        <TouchableOpacity
          onPress={() => handleEventSkip()}
          style={styles.viewButtonSkip}>
          <Text style={styles.textSkip}>Skip</Text>
        </TouchableOpacity>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const handleEventSkip = () => {
    navigate(ROUTERS.MAIN_STACK);
  };

  const renderButtonNext = () => {
    return (
      <View style={styles.viewButtonNext}>
        <Text style={styles.textButtonNext}>Next</Text>
      </View>
    );
  };
  const renderButtonDone = () => {
    return (
      <View style={styles.viewButtonNext}>
        <Text style={styles.textButtonNext}>Let’s Start</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor={colors.white}
        barStyle="dark-content"
      />
      <AppIntroSlider
        keyExtractor={item => item.title}
        renderItem={renderItem}
        data={dataIntro}
        renderDoneButton={renderButtonDone}
        renderNextButton={renderButtonNext}
        bottomButton
        activeDotStyle={{backgroundColor: '#65AAEA'}}
        onDone={() => navigate(ROUTERS.SIGNIN)}
      />
    </View>
  );
}
