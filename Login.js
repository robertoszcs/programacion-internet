import React, { useContext, useState } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import UsuarioContext from './UsuarioContext';

const Login = ({navigation}) => {

  const {codigo, nip, setCodigo, setNip} = useContext(UsuarioContext);

  const login = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        if (!xhttp.responseText === '0') {
          console.log("error"); 
        } else {
          navigation.navigate('Horario', { codigo, nip });
        }
      }
    };
    xhttp.open(
      'GET',
      'http://148.202.152.33/cucei/credenciales.php?codigo=' +
        codigo +
        '&nip=' +
        nip,
      true,
    );
    xhttp.send();
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Text> Login </Text>
      <Image
        source={require('./assets/udg.png')}
        style={{ width: 200, height: 300, marginLeft: 100 }}
      />
      <View
        style={{
          borderRadius: 15,
          borderColor: 'red',
          borderWidth: 3,
          width: 200,
          marginTop: 30,
          marginLeft: 100,
        }}>
        <TextInput
          placeholder="Codigo"
          onChangeText={setCodigo}
        />
      </View>
      <View
        style={{
          borderRadius: 15,
          borderColor: 'red',
          borderWidth: 3,
          width: 200,
          marginTop: 30,
          marginLeft: 100,
        }}>
        <TextInput
          placeholder="nip"
          onChangeText={setNip}
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          borderRadius: 15,
          borderColor: 'red',
          borderWidth: 8,
          width: 200,
          marginTop: 30,
          marginLeft: 100,
        }}>
        <Button title="entrar" onPress={login} />
      </View>
    </View>
  );
};

export default Login;