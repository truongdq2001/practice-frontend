import React from 'react';
import {ROUTERS} from './routerType';
import ProfileScreen from '../views/Home/profileScreen';
import SettingScreen from '../views/Home/settingScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CourseScreen from '../views/Home/coursesScreen';
import CustomTabs from './customTabs';
import Icon from 'react-native-vector-icons/Feather';
export default function HomeStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={ROUTERS.PROFILESCREEN}
      tabBar={props => <CustomTabs {...props} />}>
      <Tab.Screen
        name={ROUTERS.COURSESCREEN}
        component={CourseScreen}
        options={({route}) => ({
          iconActive: <Icon name="book" color="silver" size={30} />,
          iconInActive: <Icon name="book" color="#E3562A" size={30} />,
          title: 'Courses',
          tabBarVisible: false,
        })}
      />
      <Tab.Screen
        name={ROUTERS.PROFILESCREEN}
        component={ProfileScreen}
        options={({route}) => ({
          iconActive: <Icon name="user" color="silver" size={30} />,
          iconInActive: <Icon name="user" color="#E3562A" size={30} />,
          title: 'Profile',
          tabBarVisible: false,
        })}
      />
      <Tab.Screen
        name={ROUTERS.SETTINGSCREEN}
        component={SettingScreen}
        options={({route}) => ({
          iconActive: <Icon name="settings" color="silver" size={30} />,
          iconInActive: <Icon name="settings" color="#E3562A" size={30} />,
          title: 'Settings',
          tabBarVisible: false,
        })}
      />
    </Tab.Navigator>
  );
}
