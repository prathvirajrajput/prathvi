import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Myapi from '../api/Myapi';
import Course from './Course';

function CourseDetails({navigation, route}) {
  const id = route.params.CourseId;
  const selectedCourse = Myapi.find(element => {
    return id === element.id;
  });

  return (
    <View style={Mystyle.maincon}>
      <View style={Mystyle.coursecon}>
        <View>
          <Image
            style={Mystyle.img}
            source={selectedCourse.image}
            resizeMode="contain"
          />
        </View>
        <Text style={Mystyle.mainheader}>{selectedCourse.title}</Text>
        <Text style={Mystyle.maindesc}>{selectedCourse.description}</Text>
      </View>
    </View>
  );
}
const Mystyle = StyleSheet.create({
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  maincon: {
    paddingHorizontal: 20,
    paddingVertical:70
  },
  coursecon: {
    marginTop: 10,
    padding: 30,
    backgroundColor: 'rgba(255,255,255,0.90)',
    textAlign: 'center',
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  mainheader: {
    fontSize: 22,
    color: '#344055',
    textTransform: 'uppercase',
    paddingBottom: 15,
    textAlign: 'center',
  },
  maindesc: {
    textAlign: 'left',
    paddingBottom: 15,
    lineHeight: 20,
    color: '#7d7d7d',
  },
});
export default CourseDetails;
