import React from 'react';
import {FlatList, View} from 'react-native';
import Divider from './divider';
import EventRow from '../EventListRow/event-row';
import styles from './styles';

const EventList = props => {
  const events = props.data.events;
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={events}
        renderItem={({item, index}) => <EventRow index={index} event={item} />}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default EventList;
