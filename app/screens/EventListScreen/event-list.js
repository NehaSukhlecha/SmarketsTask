import React, {PureComponent} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {
  getEvents,
  getEventIds,
  GET_EVENT_IDS_RESULT,
  GET_EVENTS_ERROR,
  GET_EVENTS_RESULT,
  GET_EVENTS_IDS_ERROR,
} from '../../actions/events';
import EventList from '../../components/EventListComponent/event-list';

class EventListScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      event_ids: [],
      events: [],
      action_type: '',
      error: false,
    };
  }

  render() {
    return this.props.events !== undefined &&
      this.props.events.events !== undefined &&
      this.props.events.events.length > 0 ? (
      <SafeAreaView style={styles.container}>
        <EventList data={this.props.events} />
      </SafeAreaView>
    ) : (
      <View style={styles.container}>
        <Text style={styles.text}>Fetching Data!!!!</Text>
      </View>
    );
  }
  componentDidMount() {
    this.getEventIds();
  }

  getEventIds = () => {
    this.setState(
      {
        loading: true,
      },
      function () {
        this.props.dispatch(getEventIds());
      },
    );
  };

  getEvents = event_ids => {
    this.setState(
      {
        loading: true,
      },
      function () {
        this.props.dispatch(getEvents(event_ids));
      },
    );
  };

  componentDidUpdate() {
    switch (this.props.action_type) {
      case GET_EVENT_IDS_RESULT:
        if (this.props.event_ids) {
          const ids = this.props.event_ids.popular_event_ids;
          this.getEvents(ids);
        }
        break;
      case GET_EVENTS_RESULT:
        //console.log(this.props.events.events);
        break;
    }
  }
  static getDerivedStateFromProps(props, state) {
    if (
      props.action_type === GET_EVENTS_IDS_ERROR ||
      props.action_type === GET_EVENTS_ERROR
    ) {
      return {
        loading: false,
        error: true,
      };
    } else {
      return {
        loading: false,
        error: false,
      };
    }
  }
}

const mapStateToProps = state => {
  const action_type = state.events.action_type;
  const event_ids = state.events.event_ids;
  const events = state.events.events;
  const error = state.events.error;
  return {
    action_type,
    event_ids,
    events,
    error,
  };
};

export default connect(mapStateToProps)(EventListScreen);
