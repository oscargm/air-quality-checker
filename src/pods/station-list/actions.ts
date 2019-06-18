import { BaseAction } from 'common/base-action';
import { actionIds } from './consts';
import * as StoreModel from './store';

export const getProvinces = (): BaseAction<any> => ({
  type: actionIds.GET_PROVINCES
});

export const getMunicipalities = (provinceId: number): BaseAction<number> => ({
  type: actionIds.GET_MUNICIPALITIES,
  payload: provinceId
});
