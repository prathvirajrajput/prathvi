import React, {useState, useEffect} from 'react';
import {Text, View, Image, StyleSheet, FlatList} from 'react-native';

function Student() {
  const [loading, setLoading] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    const response = await fetch(
      'https://thapatechnical.github.io/userapi/users.json',
    );
    const realData = await response.json();
    setMyData(realData);
    setLoading(false);
  };
  useEffect(() => {
    getUserData();
  }, []);

  const showUserData = ({item}) => {
    return (
      <View style={mystyle.card}>
        <View style={mystyle.imgcon}>
          <Image style={mystyle.img} source={{uri: item.image}} />
        </View>
        <View>
          <View style={mystyle.biocon}>
            <Text style={mystyle.biodata}> Bio-Data </Text>
            <Text style={mystyle.idnumber}>#{item.id}</Text>
          </View>
          <View style={mystyle.maincon}>
            <Text style={mystyle.myname}> Name:{item.name}</Text>
            <Text style={mystyle.myname}> E-mail:{item.email}</Text>
            <Text style={mystyle.myname}> Number:{item.mobile}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={mystyle.bg}>
      <Text style={mystyle.mainhead}> List Of Student </Text>
      <FlatList
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={myData}
        renderItem={showUserData}
      />
    </View>
  );
}

const mystyle = StyleSheet.create({
  maincon: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#ebedee',
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: 'teal',
    borderRadius: 5,
    margin: 20,
  },
  biocon: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'teal',
    paddingVertical: 10,
  },
  idnumber: {
    fontSize: 25,
    color: 'rgba(255,255,255,0.5)',
    paddingRight: 60,
  },
  biodata: {
    fontSize: 25,
    color: '#fff',
    paddingLeft: 40,
  },
  mainhead: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    paddingTop:30
  },
  imgcon: {
    padding: 10,
  },
  maincon: {
    padding: 10,
    backgroundColor: 'teal',
    borderRadius: 5,
  },
  myname: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },

  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  bg: {
    height: '100%',
    paddingVertical:80
  },
});
export default Student;
