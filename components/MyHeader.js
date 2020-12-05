import React from 'react';
import  { StyleSheet, Text, View } from 'react-native';
import {Header,Icon,Badge} from 'react-native-elements';
import db from '../config';

export default class MyHeader extends React.Component {  
  constructor (props) {
    super(props);
    this.state = {
      value : ""
    }
  } 
  getNotifications () {
    db.collection("all_notifications").where("notification_status","==","unread")
    .onSnapshot((snapshot)=>{
      var unreadNotifications = snapshot.docs.map((doc)=>{
        doc.data() 
      })
        this.setState({
          value : unreadNotifications.length
        })
    
    })
  } 
  componentDidMount () {
    this.getNotifications()
  }
  bellIconWithBadge  = () => {
      return (
        <View>
          <Icon
          name= "bell" type = "font-awesome" color = "black" size = {30}
              onPress={()=>{this.props.navigation.navigate("Notification")}}
          />
          <Badge
            value = {this.state.value}
            containerStyle = {{
              position : "absolute",
              top : -4,
              right : -4
            }}
          />
        </View>
      )
  } 
  render () {
    return (
        <Header 
          leftComponent = {<Icon name="bars" type="font-awesome" color="blue" 
          onPress={()=>this.props.navigation.toggleDrawer()}
          />
}
          centerComponent = {{text : this.props.title,style:{color:"black",fontSize:30,fontWeight:"bold"}}}
          rightComponent = {<this.bellIconWithBadge 
           {...this.props}
          />}
          backgroundColor = "pink"
        />
    )
}
}
