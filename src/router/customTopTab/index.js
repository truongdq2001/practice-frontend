import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import BoxIcon from '../../components/boxIcon';
import CustomHeader from '../../components/CustomHeader';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../themes/colors';
export default function CustomTopTab({state, descriptors, navigation}) {
  const {navigate, goBack} = useNavigation();
  return (
    <View style={styles.root}>
      <View style={{height: 50}} />
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <CustomHeader
        childrenLeft={
          <BoxIcon
            size={40}
            border
            action={() => goBack()}
            icon={<Icon name="chevron-left" size={25} />}
          />
        }
        title="HTML"
      />
      <View style={styles.viewTittle}>
        <Text style={styles.title}>Tag For Headers</Text>
        <Text style={styles.subTitle}>3 of 11 lessons</Text>
      </View>
      <View style={styles.viewTopTab}>
        {state?.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          let customStyle = [styles.btnTopTab];
          if (index === 0) {
            customStyle.push(styles.radiusLeft);
          }
          if (index === state.routes.length - 1) {
            customStyle.push(styles.radiusRight);
          }
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={customStyle}>
              <Text>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
