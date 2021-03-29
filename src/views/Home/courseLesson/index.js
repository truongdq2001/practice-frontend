import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import styles from './styles';
import {images} from '../../../assets/images';
export default function CourseLesson({navigation}) {
  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contain}>
          <View style={styles.viewBanner}>
            <Image source={images.course4} />
            <TouchableOpacity
              onPress={() => navigation.navigate('COMMON_RESULT')}
              style={styles.btnPlay}>
              <Image source={images.iconPlay} />
            </TouchableOpacity>
          </View>
          <View style={styles.viewContent}>
            <Text style={styles.title}>Introduction</Text>
            <Text style={styles.subTitle}>
              You can launch a new career in web develop- ment today by learning
              HTML & CSS. You don't need a computer science degree or expensive
              software. All you need is a computer, a bit of time, a lot of
              determination, and a teacher you trust. Once the form data has
              been validated on the client-side, it is okay to submit the form.
              And, since we covered validation in the previous article, we're
              ready to submit! This article looks at what happens when a user
              submits a form — where does the data go, and how do we handle it
              when it gets there? We also look at some of the security concerns.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
