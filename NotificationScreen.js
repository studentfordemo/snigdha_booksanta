import React from 'react';
import { StyleSheet, Text, View, Image,FlatList,TouchableOpacity,Alert } from 'react-native';
import {ListItem,Icon} from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class NotificationScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allNotifications : [],
      userId : firebase.auth().currentUser.email
    }
    this.requestRef = null

  } 
  getNotifications = () => {
   this.requestRef = db.collection("all_notifications")
   .where("notificationStatus","==","unread")
   .where("targetedUserId","==",this.state.userId )
   .onSnapshot((snapshot)=>{
       var allNotifications=[]
    snapshot.docs.map((doc)=>{
        var donation = doc.data()
        donation["doc_id"]=doc.id
        allNotifications.push(donation)
      })
     
      this.setState({
        allNotifications : allNotifications
      })
    })
  } 
componentDidMount (){
  this.getNotifications()  
}
  componentWillUnmount (){
    this.requestRef()
  }
  keyExtractor = (item,index)=>
    index.toString();
  renderItem = ({item,i}) => {
    return (
    <ListItem
       key={i}
       title = {item.book_Name}
       subtitle = {item.message}
       titleStyle = {{color:"black",fontWeight:"bold"}}
       leftElement = {<Icon
        name = "book" type="font-awesome" color = "yellow"
/>}
         
       bottomDivider 
    />
    )
  }

  render(){
    return (
      <View style={{flex:1}}>
        <MyHeader title="Notifications" 
          navigation= {this.props.navigation}
        />
        <View style={{flex:1}}>
           {
             this.state.allNotifications.length === 0
             ? (
               <View>
                 <Text> You have no notifications </Text>
               </View>
             ) 
             : (
               <FlatList
                  keyExtractor = {this.keyExtractor}
                  data = {this.state.allNotifications}
                  renderItem = {this.renderItem}
               />
             )
           }
        </View>
      </View>
    );
  }
}