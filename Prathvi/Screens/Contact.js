import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Checkbox from 'expo-checkbox';
function Contact({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert('please fill all the fields');
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate('Home');
    }
  };
  return (
    <View style={mystyle.maincon}>
      <Text style={mystyle.mainheader}>Level your knowlwedge</Text>
      <Text style={mystyle.description}>
        You can reach us anytime via prathvitechncal.com
      </Text>

      <View style={mystyle.inputcon}>
        <Text style={mystyle.labels}>Enter your name</Text>
        <TextInput
          style={mystyle.inputstyle}
          placeholder={'prathvi'}
          value={name}
          onChangeText={userdata => setName(userdata)}></TextInput>
      </View>

      <View style={mystyle.inputcon}>
        <Text style={mystyle.labels}>Enter your E-mail</Text>
        <TextInput
          style={mystyle.inputstyle}
          placeholder={'prathviTecnical@gmail.com'}
          value={email}
          onChangeText={email => setEmail(email)}></TextInput>
      </View>

      <View style={mystyle.inputcon}>
        <Text style={mystyle.labels}>Enter your Mobile number</Text>
        <TextInput
          style={mystyle.inputstyle}
          placeholder={'123456789'}
          value={phone}
          onChangeText={phone => setPhone(phone)}></TextInput>
      </View>

      <View style={mystyle.inputcon}>
        <Text style={mystyle.labels}>How can i help you</Text>
        <TextInput
          style={[mystyle.inputstyle, mystyle.multilinestyle]}
          placeholder={'Tell us about yourself'}
          value={message}
          onChangeText={msg => setMessage(msg)}
          numberOfLines={3}
          multiline={true}></TextInput>
      </View>

      <View style={mystyle.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? 'teal' : 'grey'}
        />
        <Text style={mystyle.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      <TouchableOpacity
        style={[
          mystyle.btn,
          {
            backgroundColor: agree ? 'teal' : 'grey',
          },
        ]}
        disabled={!agree}
        onPress={submit}>
        <Text style={mystyle.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const mystyle = StyleSheet.create({
  maincon: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainheader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 5,
    paddingBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#7d7d7d',
    paddingBottom: 5,
    lineHeight: 20,
  },
  inputstyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 10,
  },
  inputcon: {
    marginTop: 5,
  },
  labels: {
    fontWeight: 'bold',
    color: '#7d7d7d',
    lineHeight: 25,
  },
  multiline: {
    paddingVertical: 4,
  },
  btn: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  btnText: {
    color: '#eee',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  wrapperText: {
    marginLeft: 10,
    color: '#7d7d7d',
  },
});
export default Contact;
