import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, Alert, TouchableOpacity} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class BookRequestScreen extends React.Component {
   constructor(){
     super();
     this.state = {
       userId : firebase.auth().currentUser.email,
       bookName : "",
       reasonToRequest : ""
     }
   }
   createUniqueId(){
     return Math.random().toString(36).substring(7);
   }
   addRequest =(bookName,reasonToRequest)=>
   {
     var userId = this.state.userId
     var randomRequestId = this.createUniqueId();
     db.collection("requestedBooks").add({
       "user_id" : userId,
       "book_Name": bookName,
       "reasonToRequest": reasonToRequest,
       "requestId" : randomRequestId
     })
     this.setState ({
       bookName : "",
       reasonToRequest : ""

     })
    return Alert.alert("Book Succesfully Requested")
    }
  render(){
    return (
       
      <View style={{flex:1}}>
      <MyHeader  
        title = "Request Book"
        navigation= {this.props.navigation}
      />
      <KeyboardAvoidingView style={StyleSheet.keyboardStyle}>
       <TextInput 
          style={styles.formTextInput}
          placeholder = {"Enter Book Name"}
          onChangeText={(text)=>{
            this.setState ({
              bookName : text
            })
          }}
          value = {this.state.bookName}
        
       />

<TextInput 
          style={styles.formTextInput}
          multiline
          numberOfLines={8}
          placeholder = {"Why do you want this book?"}
          onChangeText={(text)=>{
            this.setState ({
          reasonToRequest    : text
            })
          }}
          value = {this.state.reasonToRequest}
        
       />

       <TouchableOpacity style={styles.button} onPress={()=>{this.addRequest(this.state.bookName,this.state.reasonToRequest)}}>
       <Text>Request</Text>
       </TouchableOpacity>
      </KeyboardAvoidingView>
     
      </View>
    );
  }
} 
const styles = StyleSheet.create({
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 button:{
   width:"75%",
   height:35,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:5,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   }
  },
  formTextInput : {
    width:"75%",
    height : 35,
    alignSelf : "center",
    borderRadius:10,
    borderWidth:1,
    marginTop : 20,
    padding:10
  }
})