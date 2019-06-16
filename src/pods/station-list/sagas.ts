import { put, takeLatest, all, call } from 'redux-saga/effects';
import { actionIds } from './consts';
import { StationListService } from './api';
import { mapProvincesAPItoStore } from './mappers';

function* fetchProvinces() {
  try {
    const unMappedProvinces = yield call(StationListService.getStationList);
    console.log('unMappedProvinces', unMappedProvinces)
    const provinces = mapProvincesAPItoStore(unMappedProvinces);
    console.log('provinces', provinces)
    yield put({ type: actionIds.GET_PROVINCES_SUCCESS, payload: provinces });
  } catch (e) {
    console.debug('error', e);
    yield put({ type: actionIds.GET_PROVINCES_FAIL, e });
  }
}

export function* stationListRootSaga() {
  // yield call(fetchProvinces);
  yield takeLatest(actionIds.GET_PROVINCES, fetchProvinces)
}
