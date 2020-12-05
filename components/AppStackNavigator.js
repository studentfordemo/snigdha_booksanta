import {createStackNavigator} from 'react-navigation-stack';
import BookDonateScreen from "../screens/BookDonateScreen";
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
    BookDonate : {
        screen : BookDonateScreen,
        navigationOptions:{
            headerShown : false
        }
    },
  ReceiverDetails : {
      screen : ReceiverDetailsScreen,
      navigationOptions:{
        headerShown : false
      }
  }
}, 


{

initialRouteName : "BookDonate"

})
