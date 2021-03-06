import React,{useState} from 'react';
import { StyleSheet, Text, View ,Button ,ScrollView, FlatList ,TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Sandbox from './components/Sandbox';
import TodoItem from './components/TodoItem'

export default function App() {

  // const [people, setpeople] = useState([
  //   {name:'John',id:'1'},
  //   {name:'Jack',id:'2'},
  //   {name:'Jeff',id:'3'},
  //   {name:'Shaun',id:'4'},
  //   {name:'Mark',id:'5'},
  //   {name:'Bill',id:'6'},
  //   {name:'Steve',id:'7'},
  // ])


  // const pressHandler = (id) => {
  //   console.log(id)
  //   setpeople((prevPeople) => {
  //     return prevPeople.filter(person => person.id != id)
  //   })
  // }

  const [todos, settodos] = useState([
    {text:'buy coffee',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play on the switch',key:'3'}
  ])

  const pressHandler =(key) =>{
    settodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHanlder = (text) =>{

    if(text.length > 3){

      settodos((prevTodos) => {
        return [
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ]
      })
    }else{
      Alert.alert('OOPS!','Todos must be over 3 characters long',[
        {text:'Understood',onPress:() => console.log('alert closed.')}
      ])
    }
    }


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
      console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <AddTodo submitHanlder={submitHanlder} />

      <View style={styles.list}>

        {/* All the tasks */}
        <FlatList
         data={todos}
        renderItem={({item}) => (
          <TodoItem item={item} pressHandler={pressHandler}  />
        )}
        />

      </View>
      </View>
    
     
      {/* <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity  onPress={() => pressHandler(item.id)}>
            <Text style={styles.item} >{item.name}</Text>
          </TouchableOpacity>
        )}
      /> */}

      {/* <ScrollView>
      {people.map(person => (
          <View key={person.key}>
          <Text style={styles.item}>{person.name}</Text>
          </View>
        )
      )}
      </ScrollView> */}
    </View>
    </TouchableWithoutFeedback>
    // <Sandbox />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingTop:40,
    // paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    padding:40,
    backgroundColor:'pink',
    flex:1
  },
  list:{
    marginTop:20,
    backgroundColor:'yellow',
    flex:1
  }
  // item:{
  //   marginTop:24,
  //   padding:30,
  //   backgroundColor:'pink',
  //   fontSize:24,
  //   marginHorizontal:10,
  //   marginTop:24
  // }
});
