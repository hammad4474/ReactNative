import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={{fontSize:20, color: 'teal'}}>My name is Hammad</Text>
      <Text style = {{color: 'teal'}}>SP21-BCS-010</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
