import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Prathvi/Screens/Home';
import About from './Prathvi/Screens/About';
import Contact from './Prathvi/Screens/Contact';
import Student from './Prathvi/Screens/Student';
import Course from './Prathvi/Screens/Course';
import CourseDetails from './Prathvi/Screens/CourseDetails';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="Courses"
          options={{
            headerTitleStyle: {fontSize: 22},
            headerTitleAlign: 'center',
          }}
          component={Course}
        />
        <Stack.Screen
          name="Students"
          options={{
            headerTitleStyle: {fontSize: 22},
            headerTitleAlign: 'center',
          }}
          component={Student}
        />
        <Stack.Screen
          name="About"
          options={{
            headerTitleStyle: {fontSize: 22},
            headerTitleAlign: 'center',
          }}
          component={About}
        />
        <Stack.Screen
          name="Contact"
          options={{
            headerTitleStyle: {fontSize: 22},
            headerTitleAlign: 'center',
          }}
          component={Contact}
        />
        <Stack.Screen
          name="CourseDetails"
          options={{
            headerTitleStyle: {fontSize: 22},
            headerTitleAlign: 'center',
          }}
          component={CourseDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
