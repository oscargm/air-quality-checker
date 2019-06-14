import { put, takeLatest, all, call } from 'redux-saga/effects';
import { actionIds } from './consts';
import { StationListService } from './api';
import { mapProvincesAPItoStore } from './mappers';

function* fetchProvinces() {
	try {
		const unMappedProvinces = yield call(StationListService.getStationList);
		const provinces = mapProvincesAPItoStore(unMappedProvinces);
		yield put({ type: actionIds.GET_PROVINCES_SUCCESS, provinces });
	} catch (e) {
		console.debug('error', e);
		yield put({ type: actionIds.GET_PROVINCES_FAIL, e });
	}
}

export function* stationListRootSaga() {
	yield takeLatest(actionIds.GET_PROVINCES, fetchProvinces);
}
