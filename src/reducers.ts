import { combineReducers } from 'redux';
import { stationListReducer } from './pods/station-list';
import { StationListKey } from 'pods/station-list';

export default combineReducers({
  [StationListKey]: stationListReducer
});
