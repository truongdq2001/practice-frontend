import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTERS} from './routerType';
import homeStack from './homeStack';
import SearchResult from '../views/Home/coursesScreen/searchResult';
import CourseDetail from '../views/Home/coursesScreen/courseDetail';
import YourCourse from '../views/Home/profileScreen/yourCourse';
export default function MAIN_STACK() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ROUTERS.HOME_STACK}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTERS.HOME_STACK} component={homeStack} />
      <Stack.Screen name={ROUTERS.SEARCH_RESULT} component={SearchResult} />
      <Stack.Screen name={ROUTERS.COURSE_DETAIL} component={CourseDetail} />
      <Stack.Screen name={ROUTERS.YOUR_COURSES} component={YourCourse} />
    </Stack.Navigator>
  );
}
