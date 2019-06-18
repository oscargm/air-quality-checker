import { put, takeLatest, all, call } from 'redux-saga/effects';
import { actionIds } from './consts';
import { StationListService, Province, Municipality } from './api';
import { mapProvincesAPItoStore, mapMunicipalitiesAPItoStore } from './mappers';
import { BaseAction } from 'common/base-action';

function* fetchProvinces() {
  try {
    const unMappedProvinces: Province[] = yield call(StationListService.getStationList);
    const provinces = mapProvincesAPItoStore(unMappedProvinces);
    yield put({ type: actionIds.GET_PROVINCES_SUCCESS, payload: provinces });
  } catch (e) {
    console.debug('error', e);
    yield put({ type: actionIds.GET_PROVINCES_FAIL, e });
  }
}

function* fetchMunicipalities(action: BaseAction<number>) {
  try {
    console.log('proince saga', action.payload)
    const provinceId = action.payload;
    const unMappedMunicipalities: Municipality[] = yield call(StationListService.getMunicipalitiesList, provinceId);
    const municipalities = mapMunicipalitiesAPItoStore(unMappedMunicipalities);
    yield put({ type: actionIds.GET_MUNICIPALITIES_SUCCESS, payload: { provinceId, municipalities } });
  } catch (e) {
    console.debug('error', e);
    yield put({ type: actionIds.GET_MUNICIPALITIES_FAIL, e });
  }
}

export function* stationListRootSaga() {
  yield takeLatest(actionIds.GET_PROVINCES, fetchProvinces);
  yield takeLatest(actionIds.GET_MUNICIPALITIES, fetchMunicipalities);
}
