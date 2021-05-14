import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EventListScreen from '../screens/EventListScreen/event-list';
import EventDetailScreen from '../screens/EventDetailScreen/event-detail';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: EventListScreen,
      navigationOptions: {
        title: 'POPULAR EVENTS',
        headerStyle: {
          backgroundColor: '#252525',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#FFFFFF',
        },
      },
    },
    Detail: {
      screen: EventDetailScreen,
      navigationOptions: {
        title: 'EVENT DETAIL',
        headerStyle: {
          backgroundColor: '#252525',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#FFFFFF',
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Navigator);
