import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Menu from '../Menu/Menu';

const Home = () => {
  const desc =
    'Prathvi technical is a place where people of different ages gain an education, including preschools, primary-elementary schools, secondary-high schools, and universities';
  return (
    <View>
      <View style={Mystyle.main}>
        <Image
          style={Mystyle.img}
          resizeMode="contain"
          source={require('../../images/education.jpg')}
        />
        <Text style={Mystyle.head}>Welcome to</Text>
        <Text
          style={{fontSize: 30, textTransform: 'capitalize', color: '#000000'}}>
          Prathvi technical
        </Text>
        <Text style={Mystyle.desc}>{desc}</Text>
      </View>
      <View>
        <Menu />
      </View>
    </View>
  );
};
const Mystyle = StyleSheet.create({
  head: {
    fontSize: 20,
    textTransform: 'capitalize',
    marginTop: 20,
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  img: {
    height: undefined,
    width: '100%',
    aspectRatio: 1.5,
    marginTop: 30,
    borderRadius: 10,
  },
  desc: {
    textAlign: 'center',
    color: '#7d7d7d',
    marginTop: 20,
    lineHeight: 20,
  },
});
export default Home;
