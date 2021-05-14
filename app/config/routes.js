import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EventListScreen from '../screens/EventListScreen/event-list';
import EventDetailScreen from '../screens/EventDetailScreen/event-detail';

const Navigator = createStackNavigator(
  {
    Home: {
      screen: EventListScreen,
      navigationOptions: {
        title: 'Football',
        headerStyle: {
          backgroundColor: '#0D0D0D',
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
    Detail: EventDetailScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Navigator);
