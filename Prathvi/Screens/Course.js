import React, { Component } from 'react'
import { FlatList, Text, View,Image,StyleSheet,TouchableOpacity } from 'react-native';
import Myapi from '../api/Myapi';

function Course ({navigation}) {
  const CourseCard =({item})=>{
    return <View style={Mystyle.maincon}>
      <View style={Mystyle.coursecon}>
        <View>
          <Image style={Mystyle.img}
          source={item.image}
          resizeMode="contain" />
        </View>
        <Text style={Mystyle.mainheader}>{item.title}</Text>
        <Text style={Mystyle.maindesc}>{item.description}</Text>
        <View style={Mystyle.btn}>
          <TouchableOpacity style={Mystyle.btnstyle}
          onPress={()=> navigation.navigate("CourseDetails",{CourseId:item.id})}>
            <Text style={Mystyle.btntext}>course Details</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  }
  
    return (
      <FlatList keyExtractor={(item)=> item.id} data={Myapi} renderItem={CourseCard} />
    );
  };
  const Mystyle= StyleSheet.create({ 
    img:{
      width:"100%",
      height:undefined,
      aspectRatio:1,
    },
    maincon:{
      paddingHorizontal:20,
      paddingVertical:1

    },
    coursecon:{
      padding:30,
      backgroundColor:"rgba(255,255,255,0.90)",
      textAlign:"center",
      borderRadius:5,
      shadowColor:"grey",
      shadowOffset:{width: 0, height:0},
      shadowOpacity:0.5,
      shadowRadius:8,
      elevation:8,
      marginVertical:30
    },
    mainheader:{
      fontSize:22,
      color:"#344055",
      textTransform:"uppercase",
      paddingBottom:15,
      textAlign:"center"

    },
  maindesc:{
   textAlign:"left",
   paddingBottom:15,
   lineHeight:20,
   color:"#7d7d7d",
  },
  btn:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    paddingTop:10,
  },
  btnstyle:{
    backgroundColor:"teal",
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:20,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  btntext:{
    fontSize:20,
    color:"#eee",
    textTransform:"capitalize"
  }

  });
  export default Course;
