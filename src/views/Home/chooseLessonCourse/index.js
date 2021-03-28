import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {View, Text, Dimensions} from 'react-native';
import BoxIcon from '../../../components/boxIcon';
import CustomHeader from '../../../components/CustomHeader';
import {colors} from '../../../themes/colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {images} from '../../../assets/images';
import ProgressBar from '../../../lib/ProgressBar';
import * as Progress from 'react-native-progress';
import {ScrollView} from 'react-native';
import Video from 'react-native-video';
import {scale} from '../../../hooks/scale';
const width = Dimensions.get('window').width;
export default function ChooseLessonCourse() {
  const {goBack, navigate} = useNavigation();
  const [isRunVideo, setIsRunVideo] = useState(false);
  function CourseTag({image, title, correct, total}) {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.containTag}>
        <View style={styles.viewTagImage}>
          <Image source={images.imageTag1} style={styles.imageTag} />
        </View>
        <View style={styles.viewTagProgress}>
          <Text style={styles.tagLabel}>Main Tags</Text>
          <View style={styles.viewProgress}>
            <ProgressBar
              progress={0.3}
              width={width * 0.6}
              height={10}
              color={colors.border_bg}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.root}>
      <View style={{height: 50}} />
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <CustomHeader
        title="HTML"
        childrenLeft={
          <BoxIcon
            size={40}
            border
            action={() => goBack()}
            icon={<Icon name="chevron-left" size={25} />}
          />
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%'}}>
          <View style={styles.viewBanner}>
            <View style={styles.wrapperBanner}>
              <View style={styles.viewBannerTop}>
                <View style={styles.viewVideo}>
                  <Video
                    style={styles.video}
                    source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
                    paused={isRunVideo}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => setIsRunVideo(!isRunVideo)}
                  style={styles.btnPlay}>
                  <Image source={images.iconPlay} />
                </TouchableOpacity>
              </View>
              <View style={styles.viewBannerBottom}>
                <Text style={styles.labelBanner}>HTML</Text>
                <Text style={styles.subLabelBanner}>
                  Advanced web applications
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.viewBody}>
            <CourseTag />
            <CourseTag />
            <CourseTag />
            <CourseTag />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
