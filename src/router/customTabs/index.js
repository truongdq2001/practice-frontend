import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from '../../hooks/scale';
export default function CustomTabs({state, descriptors, navigation}) {
  return (
    <View style={styles.rootTab}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.title;
          const iconActive = options.iconActive;
          const iconInActive = options.iconInActive;
          const isFocused = state.index === index;
          const onNavigate = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
              onPress={onNavigate}
              style={styles.viewTab}
              key={index}>
              {isFocused ? iconInActive : iconActive}
              <Text
                style={[
                  styles.textTab,
                  {color: isFocused ? '#E3562A' : '#BEBAB3'},
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootTab: {
    height: scale(100),
    width: '100%',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    overflow: 'hidden',
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(50),
  },
  viewTab: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTab: {
    fontSize: scale(16),
    lineHeight: scale(21),
    fontWeight: '400',
    color: '#BEBAB3',
  },
});
