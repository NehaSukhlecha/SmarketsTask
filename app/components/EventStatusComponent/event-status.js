import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {diff_hours, getDateTime} from '../../utils/helper.js';

const EventStatus = props => {
  const start_time = props.start_time;
  return (
    <View style={styles.timeContainer}>
      <Image
        style={styles.clock}
        source={require('../../assets/ic_clock.png')}
      />
      <Text numberOfLines={1} style={[styles.timeText]}>
        IN {diff_hours(getDateTime(), start_time)} Hours
      </Text>
    </View>
  );
};

export default EventStatus;
