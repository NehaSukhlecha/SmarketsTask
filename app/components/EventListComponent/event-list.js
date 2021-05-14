import React from 'react';
import {FlatList, View} from 'react-native';
import EventRow from '../EventListRow/event-row';
import styles from './styles';

const EventList = props => {
  const events = props.data.events;
  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={({item, index}) => <EventRow index={index} event={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default EventList;
