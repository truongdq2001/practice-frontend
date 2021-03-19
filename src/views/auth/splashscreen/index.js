import React, {useEffect} from 'react';
import {View, Image, StatusBar, Dimensions} from 'react-native';
import {images} from '../../../assets/images';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import {ROUTERS} from '../../../router/routerType';
import {useState} from 'react';
const width = Dimensions.get('window').width;
export default function SplashScreen() {
  const [progress, setProgess] = useState(0);
  const {navigate} = useNavigation();
  useEffect(() => {
    animate();
  }, []);

  useEffect(() => {
    if (progress === 1) {
      navigate(ROUTERS.SIGNIN);
    }
  }, [progress]);
  function animate() {
    let fProgress = 0;
    setProgess(fProgress);
    setTimeout(() => {
      setInterval(() => {
        fProgress += Math.random() / 5;
        if (fProgress > 1) {
          fProgress = 1;
        }
        setProgess(fProgress);
      }, 500);
    }, 100);
  }

  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.viewProgressBar}>
        <Progress.Bar
          progress={progress}
          width={width * 0.8}
          height={10}
          color="#00e673"
        />
      </View>
      <Image source={images.splash} style={styles.imageSplash} />
    </View>
  );
}
