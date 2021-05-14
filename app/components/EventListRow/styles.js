import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const MARGIN = 5;
const ITEM_WIDTH = Dimensions.get('window').width - 75;

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: MARGIN,
    flexDirection: 'column',
  },
  item: {
    flexDirection: 'row',
    margin: 7,
    width: ITEM_WIDTH,
  },
  leftIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'SourceSansPro-Semibold',
  },
  timeText: {
    fontSize: 12,
    color: '#A6A6A6',
    fontFamily: 'SourceSansPro-Regular',
  },
  subRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    width: ITEM_WIDTH / 2,
    marginRight: 5,
    alignItems: 'center',
  },
  tradedContainer: {
    flexDirection: 'row',
    width: ITEM_WIDTH / 2,
    marginRight: 5,
    justifyContent: 'flex-end',
  },
  clock: {
    height: 12,
    width: 12,
    margin: 5,
  },
});
