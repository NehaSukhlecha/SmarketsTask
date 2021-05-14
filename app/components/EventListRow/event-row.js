import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const EventRow = props => {
  const name = props.event.name;
  console.log(props.event.name);
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.item]}>
      <Text style={[styles.title]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default EventRow;
