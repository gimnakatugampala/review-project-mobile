import React,{useState} from 'react'
import { StyleSheet, Text, View , TextInput,Button} from 'react-native'

export default function AddTodo({submitHanlder}) {

    const [text, settext] = useState('')

    const changeHandler = (val) =>{
        // console.log(val)

        settext(val)
    }

    return (
        <View>
            
            <TextInput 
            style={styles.input}
            placeholder="new todo.."
            onChangeText={changeHandler}
            />
            <Button onPress={() => submitHanlder(text)} title='add todo' color='coral' />

        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})
