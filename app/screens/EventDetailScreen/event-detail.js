import React, {PureComponent} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import styles from './styles';
import EventStatus from '../../components/EventStatusComponent/event-status.js';
import {dateFormattor} from '../../utils/helper.js';

var currentEvent = null;

class EventDetailScreen extends PureComponent {
  constructor(props) {
    super(props);
    currentEvent = this.props.navigation.state.params.event;
    console.log(currentEvent);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.datacontainer}>
          <Text style={[styles.title]}>{currentEvent.name}</Text>
          <View style={styles.timecontainer}>
            <Text style={[styles.timeText]}>
              {dateFormattor(currentEvent.start_datetime)}
            </Text>
            <EventStatus start_time={currentEvent.start_datetime} />
          </View>

          <Text style={[styles.text]}>{currentEvent.short_name}</Text>
          <Text style={[styles.text]}>{currentEvent.description}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default EventDetailScreen;
