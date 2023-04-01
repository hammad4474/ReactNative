import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, font, TextInput, Button,clear } from 'react-native';

export default function App() {
  const [text, setText] = useState(0);
  return (
    <View style={styles.container}>
      
      <Text style={{fontSize:20, color: 'teal', fontWeight: 'bold', marginBottom: 20}}>Numbers Game</Text>
      <TextInput
      value ={text}
      onChangeText = {(text) => setText(text)}
      style = {{height : 40, backgroundColor: 'white',fontSize: 20, width: '80%', borderColor: 'black',borderWidth: 2, marginBottom: 20}}
      >
      </TextInput>

      <View style = {styles.buttonContainer}>
      <Button
      title= '0'
      onPress={() => setText(text+'0')}
      />
      <Button
      title= '1'
      onPress={() => setText(text+'1')}
      />
      <Button
      title= '2'
      onPress={() => setText(text+'2')}
     />
      </View>
      <View style = {styles.buttonContainer}>
      <Button
      title= '3'
      onPress={() => setText(text+'3')}
      />
      <Button
      title= '4'
      onPress={() => setText(text+'4')}
      />
      <Button
      title= '5'
      onPress={() => setText(text+'5')}
     />
      </View>
      <View style = {styles.buttonContainer}>
      <Button
      title= '6'
      onPress={() => setText(text+'6')}
      />
      <Button
      title= '7'
      onPress={() => setText(text+'7')}
      />
      <Button
      title= '8'
      onPress={() => setText(text+'8')}
     />
     
      </View>
      <View style = {{marginBottom: 20}}>
      <Button
      title= '9'
      onPress={() => setText(text+'9')}
      style = {{marginBottom: 10}}
     /></View>

      <Button
      title='Reset'
      color={'red'}
      onPress = {() => setText('')
      }
      >
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection : 'row',
    borderColor: 'black',
    justifyContent: 'space-around',
    width : '80%',
    marginBottom: 20,
  }
});
