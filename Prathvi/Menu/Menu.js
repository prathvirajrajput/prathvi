import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={Mystyle.menucon}>
      <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
        <Image
          style={Mystyle.icon}
          source={require('../../images/course.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Students')}>
        <Image
          style={Mystyle.icon}
          source={require('../../images/student.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Image
          style={Mystyle.icon}
          source={require('../../images/about.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
        <Image
          style={Mystyle.icon}
          source={require('../../images/contact.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
const Mystyle = StyleSheet.create({
  menucon: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 70,
  },
  icon: {
    width: '100%',
    height: 40,
    aspectRatio: 1,
  },
});
export default Menu;
