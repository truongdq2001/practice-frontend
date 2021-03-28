import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import BoxIcon from '../../../../components/boxIcon';
import CustomInput from '../../../../components/customInput';
import {colors} from '../../../../themes/colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {scale} from '../../../../hooks/scale';
import Spinner from '../../../../lib/SpinLoadingOverlay/LoadingSpinnerOverlay';
import CardCourse from '../components/CardCourse';
import {dataCourse} from '../data';
import {useNavigation} from '@react-navigation/native';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

export default function SearchResult() {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const {goBack} = useNavigation();

  const handleSearchCourse = () => {
    let response = dataCourse.filter(item => item.title === valueSearch);
    setLoading(true);
    wait(2000).then(() => {
      setLoading(false);
      setCourses(response);
    });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.root}>
        <View style={{height: 50}} />
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <View style={styles.formSearch}>
          <View style={{marginRight: scale(8)}}>
            <BoxIcon
              icon={<Icon name="chevron-left" size={25} />}
              size={50}
              border
              action={() => goBack()}
            />
          </View>
          <View style={{flex: 1}}>
            <CustomInput
              placeholder="Search course"
              styleInput={styles.customStyleInput}
              value={valueSearch}
              returnKeyType="search"
              onSubmitEditing={() => handleSearchCourse()}
              onChangeText={e => setValueSearch(e)}
              rightIcon={<Icon name="search" size={25} />}
              onPressRight={() => handleSearchCourse()}
            />
          </View>
        </View>
        <View style={styles.viewTextResult}>
          <Text style={styles.textResult}>{courses.length} Search Result</Text>
        </View>
        {!!courses.length && (
          <FlatList
            data={courses}
            keyExtractor={item => item.idCard + ''}
            renderItem={({item}) => <CardCourse {...item} />}
          />
        )}
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={{color: colors.black}}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
