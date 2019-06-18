import { actionIds } from '../consts';
import { BaseAction } from 'common/base-action';
import * as StoreModel from './model';

const defaultState = (): StoreModel.Territory => ({
  provinces: []
});

export const stationListReducer = (state = defaultState(), action: BaseAction<any>) => {
  switch (action.type) {
    case actionIds.GET_PROVINCES_SUCCESS:
      return { ...state, provinces: action.payload };
    case actionIds.GET_MUNICIPALITIES_SUCCESS:
      console.log('reducer', action.payload)
      let { provinces } = { ...state };
      provinces.map((province: StoreModel.Province) => {
        if (province.id === action.payload.provinceId) {
          province.municipalities = action.payload.municipalities;
        }
      });
      return { ...state, provinces };
    default:
      return state;
  }
};
