import React from 'react'
import { Text, View,Image,TouchableOpacity, Linking,StyleSheet } from 'react-native'

function About () {
  
    return (
      <View style={mystyle.aboutcon}>
        <Text style={mystyle.mainheader}>Prathviraj singh Rajput</Text>
        <Text style={mystyle.para}>I am a react native devloper </Text>
        <View>
          <Image style={mystyle.img} 
          source={require("../../images/ma1.jpg")}
           />
        </View>
        <View style={mystyle.layout}>
          <Text style={mystyle.subhead}>About me</Text>
          <Text style={mystyle.para2}>lknlw wlfkw lwkfj wiep owihfo owiefowf oif oiwefwjif oifjpw wef g  th h rt eg  t 5y  y t h  bdbdbdfge</Text>
        </View>
        <Text style={mystyle.mainheader}>Follow me on social Network</Text>
        <View style={mystyle.menucon}>
          
          <TouchableOpacity 
          onPress={ ()=>Linking.openURL("https://www.instagram.com/virat.kohli/?hl=en")}>
            <Image style={mystyle.icon} source={require('../../images/insta.png')} />

          </TouchableOpacity>

          <TouchableOpacity 
          onPress={ ()=>Linking.openURL("https://www.youtube.com/c/TheLallantop")}>
            <Image style={mystyle.icon} source={require('../../images/youtube.png')} />

          </TouchableOpacity>

          <TouchableOpacity 
          onPress={ ()=>Linking.openURL("https://twitter.com/narendramodi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor")}>
            <Image style={mystyle.icon} source={require('../../images/twitter.png')} />

          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const mystyle=StyleSheet.create({
    aboutcon:{
      display:"flex",
      alignItems:"center",
      paddingVertical:90
    },
    img:{
      height:150,
      width:150,
      borderRadius:100,
      paddingRight:50
    },
    mainheader:{
      fontSize:20,
      color:"black",
      textTransform:"uppercase",
      marginTop:40,
      marginBottom:5,
    },
    para:{
      fontSize:15,
      paddingBottom:20,
      color:"#7d7d7d",
    },
    menucon:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-evenly",
      paddingVertical:35
    },
  subhead:{
    color:"#f8f8ff",
    textAlign:"center",
    marginVertical:15,
    fontSize:22,
    textTransform:"uppercase",
  },
  para2:{
    color:"#f8f8ff",
    alignSelf:"center",
    lineHeight:20,
    fontSize:15,  
  },
  layout:{
    marginVertical:15,
    paddingVertical:10,
    backgroundColor:"teal",
    height:140
  },
    
  });
  export default About;
