import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {diff_hours, getDateTime} from '../../utils/helper.js';

const EventRow = props => {
  const name = props.event.name;
  const start_time = props.event.start_datetime;
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.item}>
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
            <View style={styles.timeContainer}>
              <Image
                style={styles.clock}
                source={require('../../assets/ic_clock.png')}
              />
              <Text numberOfLines={1} style={[styles.timeText]}>
                IN {diff_hours(getDateTime(), start_time)} Hours
              </Text>
            </View>
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
