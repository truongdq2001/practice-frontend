import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import {images} from '../../../../assets/images';
import CustomButton from '../../../../components/customButton';
import {colors} from '../../../../themes/colors';
export default function CardQuiz({
  image,
  quizName,
  labelQuiz,
  labelSubQuiz,
  route,
}) {
  return (
    <View style={styles.viewCardQuiz}>
      <Image source={images.course2} />
      <View style={styles.viewQuizContain}>
        <Text style={styles.textQuiz}>Quiz 1</Text>
        <Text style={styles.labelQuiz}>Tags For Headers</Text>
        <Text style={styles.labelSubQuiz}>
          Let’s put your memory on this topic test. Solve tasks and check your
          knowledge.
        </Text>
        <View style={styles.viewBtnGoQuiz}>
          <CustomButton
            styleText={{color: colors.black}}
            styleButton={styles.customBtn}
            text="Begin"
          />
        </View>
      </View>
    </View>
  );
}
