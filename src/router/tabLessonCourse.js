import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ROUTERS} from './routerType';
import CourseLesson from '../views/Home/courseLesson';
import CourseTest from '../views/Home/courseLesson/courseTest';
import CourseDiscuss from '../views/Home/courseLesson/courseDiscuss';
const Tab = createMaterialTopTabNavigator();
import CustomTopTab from './customTopTab';
export default function tabLessonCourse() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTopTab {...props} />}
      initialRouteName={ROUTERS.TAB_LESSON_COURSE}>
      <Tab.Screen name={ROUTERS.COURSE_LESSON} component={CourseLesson} />
      <Tab.Screen name={ROUTERS.COURSE_TEST} component={CourseTest} />
      <Tab.Screen name={ROUTERS.COURSE_DISCUSS} component={CourseDiscuss} />
    </Tab.Navigator>
  );
}
