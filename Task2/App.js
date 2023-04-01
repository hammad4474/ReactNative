import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View , Button, Alert} from 'react-native';

export default function App() {
  const [email, setEmail] = useState(0)
  const [password, setPassword] = useState(1)
  return (
    <View style={styles.container}>
      <Text
      style = {{marginBottom: 20,fontWeight: 'bold',fontSize: 20, color: 'red'}}
      >LogIn</Text>

      <View>
        <TextInput placeholder='Username'
        value = {email}
        onChangeText = {(email) => setEmail(email)} 
          style = {styles.textInput}></TextInput>
        <TextInput placeholder='Password' 
        value={password}
        onChangeText = {(password) => setPassword(password)}
        style = {styles.textInput}></TextInput>
        <Button title = 'Login'
          onPress={() => {
            if(email == 'cspeople' && password == 'computerscience'){
                Alert.alert("Succesfully LogedIn");
            }else{
              Alert.alert("wrong email and password");
            }
          }}
        ></Button>
      </View>
      <StatusBar style="auto" />
    </View>

  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    color : 'grey',
     width : 200,
      borderColor : 'black', 
      borderWidth: 2,
      height: 40, 
      textAlign: 'center',
      marginBottom: 20,
  }

});
