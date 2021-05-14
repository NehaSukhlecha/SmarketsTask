import environment from '../config/environment';

const URLs = {
  baseUrl: function () {
    if (environment.selectedEnvironment === environment.STAGING) {
      return 'https://api.smarkets.com/v3/';
    } else {
      return '';
    }
  },
  getEventIds: 'popular/event_ids/sport/football/',
  getEventsUrl: function (ids) {
    const event_ids = ids.join(',');
    const getEventsUrl = 'events/' + event_ids + '/';
    return getEventsUrl;
  },
};

export default URLs;
