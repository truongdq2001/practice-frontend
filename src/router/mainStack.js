import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTERS} from './routerType';
import homeStack from './homeStack';
import SearchResult from '../views/Home/coursesScreen/searchResult';
import CourseDetail from '../views/Home/coursesScreen/courseDetail';
import YourCourse from '../views/Home/profileScreen/yourCourse';
import ChooseLessonCourse from '../views/Home/chooseLessonCourse';
import SaveCoursesScreen from '../views/Home/profileScreen/saveCourseScreen';
import CourseLesson from '../views/Home/courseLesson';
import tabLessonCourse from './tabLessonCourse';
import CommonResult from '../views/Home/CommonResult';
import TestQuestion from '../views/Home/TestQuestion';
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
      <Stack.Screen
        name={ROUTERS.CHOOSE_LESSON_COURSES}
        component={ChooseLessonCourse}
      />
      <Stack.Screen
        name={ROUTERS.SAVE_COURSES_SCREEN}
        component={SaveCoursesScreen}
      />
      <Stack.Screen
        name={ROUTERS.TAB_LESSON_COURSE}
        component={tabLessonCourse}
      />
      <Stack.Screen name={ROUTERS.COMMON_RESULT} component={CommonResult} />
      <Stack.Screen name={ROUTERS.TEST_QUESTION} component={TestQuestion} />
    </Stack.Navigator>
  );
}
