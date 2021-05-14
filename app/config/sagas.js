import {takeEvery, call, put} from 'redux-saga/effects';
import URLs from '../network/URLs';

import {
  GET_EVENTS,
  GET_EVENTS_RESULT,
  GET_EVENTS_ERROR,
  GET_EVENT_IDS,
  GET_EVENT_IDS_RESULT,
  GET_EVENT_IDS_ERROR,
} from '../actions/events';

const getEventIdsRequest = () =>
  fetch(URLs.baseUrl() + URLs.getEventIds, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

function* getEventIds() {
  try {
    const response = yield call(getEventIdsRequest);
    if (response.status === 401) {
      yield put({type: GET_EVENT_IDS_ERROR, error: response.status});
    } else {
      const result = yield response.json();
      if (result.value) {
        yield put({type: GET_EVENT_IDS_ERROR, error: result.value});
      } else {
        //console.log('getEventIds', result);
        yield put({type: GET_EVENT_IDS_RESULT, result});
      }
    }
  } catch (e) {
    yield put({type: GET_EVENT_IDS_ERROR, error: e.message});
  }
}

const getEventsRequest = ids =>
  fetch(URLs.baseUrl() + URLs.getEventsUrl(ids) + '?include_hidden=true', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });

function* getEvents(action) {
  try {
    const response = yield call(getEventsRequest, action.ids);
    if (response.status === 401) {
      yield put({type: GET_EVENTS_ERROR, error: response.status});
    } else {
      const result = yield response.json();
      //console.log('getEvents', result);
      if (result.value) {
        yield put({type: GET_EVENTS_ERROR, error: result.value});
      } else {
        yield put({type: GET_EVENTS_RESULT, result});
      }
    }
  } catch (e) {
    yield put({type: GET_EVENTS_ERROR, error: e.message});
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_EVENT_IDS, getEventIds);
  yield takeEvery(GET_EVENTS, getEvents);
}
