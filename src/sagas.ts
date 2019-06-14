import { stationListRootSaga } from './pods/station-list';
import { all } from '@redux-saga/core/effects';

export function* rootSaga() {
	yield all([ stationListRootSaga() ]);
}
