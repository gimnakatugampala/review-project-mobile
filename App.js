import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button ,ScrollView, FlatList ,TouchableOpacity} from 'react-native';

export default function App() {

  const [people, setpeople] = useState([
    {name:'John',id:'1'},
    {name:'Jack',id:'2'},
    {name:'Jeff',id:'3'},
    {name:'Shaun',id:'4'},
    {name:'Mark',id:'5'},
    {name:'Bill',id:'6'},
    {name:'Steve',id:'7'},
  ])

  const pressHandler = (id) => {
    console.log(id)
    setpeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>

      <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity  onPress={() => pressHandler(item.id)}>
            <Text style={styles.item} >{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <ScrollView>
      {people.map(person => (
          <View key={person.key}>
          <Text style={styles.item}>{person.name}</Text>
          </View>
        )
      )}
      </ScrollView> */}
     
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
    fontSize:24,
    marginHorizontal:10,
    marginTop:24
  }
});
