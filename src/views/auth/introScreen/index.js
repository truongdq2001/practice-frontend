import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';
import {images} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {ROUTERS} from '../../../router/routerType';
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
export default function IntroScreen() {
  const {navigate} = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View style={[styles.slide, {backgroundColor: item?.backgroundColor}]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const renderButtonNext = () => {
    return <Text style={styles.text}>NEXT</Text>;
  };
  const renderButtonDone = () => {
    return <Text style={styles.text}>DONE</Text>;
  };
  const renderButtonSkip = () => {
    return <Text style={styles.text}>SKIP</Text>;
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={item => item.title}
        renderItem={renderItem}
        data={dataIntro}
        showSkipButton
        renderSkipButton={renderButtonSkip}
        renderDoneButton={renderButtonDone}
        renderNextButton={renderButtonNext}
        onDone={() => navigate(ROUTERS.HOME)}
        onSkip={() => navigate(ROUTERS.HOME)}
      />
    </View>
  );
}
