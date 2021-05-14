import {
  GET_EVENTS,
  GET_EVENTS_RESULT,
  GET_EVENTS_ERROR,
  GET_EVENT_IDS,
  GET_EVENT_IDS_RESULT,
  GET_EVENTS_IDS_ERROR,
} from '../actions/events';

const initialState = {
  result: null,
  error: null,
  action_type: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: [],
        error: null,
        action_type: GET_EVENTS,
      };
    case GET_EVENTS_RESULT:
      return {
        ...state,
        events: action.result,
        error: null,
        action_type: GET_EVENTS_RESULT,
      };
    case GET_EVENTS_ERROR:
      return {
        ...state,
        events: action.error,
        error: action.error,
        action_type: GET_EVENTS_ERROR,
      };
    case GET_EVENT_IDS:
      return {
        ...state,
        event_ids: [],
        error: null,
        action_type: GET_EVENT_IDS,
      };
    case GET_EVENT_IDS_RESULT:
      return {
        ...state,
        event_ids: action.result,
        error: null,
        action_type: GET_EVENT_IDS_RESULT,
      };
    case GET_EVENTS_IDS_ERROR:
      return {
        ...state,
        events: action.error,
        event_ids: action.error,
        action_type: GET_EVENTS_IDS_ERROR,
      };
    default:
      return state;
  }
};

export default reducer;
