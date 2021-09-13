import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View  ,TextInput} from 'react-native';

export default function App() {

  const [name, setname] = useState('Gimna katugampala')
  const [age, setage] = useState(20)


  return (
    <View style={styles.container}>
      <Text>Enter Name: </Text>

      <TextInput
      multiline
       style={styles.input}
       placeholder="e.g. John Doe" 
      onChangeText={(val) => setname(val)}
       />

      <Text>Enter Age: </Text>

      <TextInput
      keyboardType="numeric"
       style={styles.input}
       placeholder="e.g. 99" 
      onChangeText={(val) => setage(val)}
       />

      <Text>Name : {name} , Age: {age}</Text>
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
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200
  }
});
