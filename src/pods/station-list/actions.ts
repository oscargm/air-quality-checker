import { BaseAction } from 'common/base-action';
import { actionIds } from './consts';

export const getProvinces = (): BaseAction<any> => ({
  type: actionIds.GET_PROVINCES
});
