import React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';

export default class WriteStory extends React.Component {
    render() {
      return (
        <View style={{flex: 1}}>

          <TextInput
          style={styles.formTextInput}
          placeholder ={"Title of your story"}
        /> 

   <TextInput
          style={styles.formTextInput}
          placeholder ={"Author of the story"}
        /> 

<TextInput
          style={styles.writeStory}
          placeholder ={"Write your story"}
        /> 

        <TouchableOpacity>
          <Text> Submit </Text>
        </TouchableOpacity>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    formTextInput : {
      marginTop: 100,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      textAlign: 'center',
      borderWidth: 2,
      outline: 'none',
    } ,
 writeStory : {
        marginTop: 100,
        width: '80%',
        alignSelf: 'center',
        height: 100,
        textAlign: 'center',
        borderWidth: 2,
        outline: 'none',
      } ,
 submitButton:{
      backgroundColor:'#EDC0BF',
      width: 50,
      borderWidth:1.5,
     }
  })
