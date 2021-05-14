import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import EventStatus from '../EventStatusComponent/event-status';

const EventRow = props => {
  const name = props.event.name;
  const start_time = props.event.start_datetime;
  return (
    <TouchableOpacity onPress={props.onRowClick} style={styles.item}>
      <View style={styles.item}>
        <View style={styles.leftIcon}>
          <Image
            style={styles.image}
            source={require('../../assets/ic_ball.png')}
          />
        </View>
        <View>
          <Text numberOfLines={1} style={[styles.title]}>
            {name}
          </Text>
          <View style={styles.subRowContainer}>
            <EventStatus start_time={start_time} />
            <View style={styles.tradedContainer}>
              <Text numberOfLines={1} style={[styles.timeText]}>
                TRADED: £778,596
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventRow;
