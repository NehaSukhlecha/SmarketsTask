import React from 'react';
import {FlatList, View} from 'react-native';
import Divider from './divider';
import EventRow from '../EventListRow/event-row';
import styles from './styles';

const EventList = (props, navigation) => {
  const events = props.data.events;
  console.log(navigation);
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={events}
        renderItem={({item, index}) => (
          <EventRow
            index={index}
            event={item}
            onRowClick={() => {
              props.onItemSelected(index);
            }}
          />
        )}
        ItemSeparatorComponent={() => <Divider />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default EventList;
