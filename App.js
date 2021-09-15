import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button ,ScrollView} from 'react-native';

export default function App() {

  const [people, setpeople] = useState([
    {name:'John',key:'1'},
    {name:'Jack',key:'2'},
    {name:'Jeff',key:'3'},
    {name:'Shaun',key:'4'},
    {name:'Mark',key:'5'},
    {name:'Bill',key:'6'},
    {name:'Steve',key:'7'},
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map(person => (
          <View key={person.key}>
          <Text style={styles.item}>{person.name}</Text>
          </View>
        )
      )}
      </ScrollView>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24
  }
});
