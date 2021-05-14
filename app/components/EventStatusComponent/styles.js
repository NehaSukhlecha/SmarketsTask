import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const ITEM_WIDTH = Dimensions.get('window').width - 75;

export default StyleSheet.create({
  timeText: {
    fontSize: 12,
    color: '#A6A6A6',
    fontFamily: 'SourceSansPro-Regular',
  },
  timeContainer: {
    flexDirection: 'row',
    width: ITEM_WIDTH / 2,
    marginRight: 5,
    alignItems: 'center',
  },
  clock: {
    height: 12,
    width: 12,
    margin: 5,
  },
});
