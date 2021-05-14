export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_RESULT = 'GET_EVENTS_RESULT';
export const GET_EVENTS_ERROR = 'GET_EVENTS_ERROR';

export const GET_EVENT_IDS = 'GET_EVENT_IDS';
export const GET_EVENT_IDS_RESULT = 'GET_EVENT_IDS_RESULT';
export const GET_EVENT_IDS_ERROR = 'GET_EVENT_IDS_ERROR';

export const getEvents = ids => ({
  type: GET_EVENTS,
  ids: ids,
});

export const getEventIds = () => ({
  type: GET_EVENT_IDS,
});
