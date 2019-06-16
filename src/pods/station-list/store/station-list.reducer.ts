import { actionIds } from '../consts';
import { BaseAction } from 'common/base-action';
import * as StoreModel from './model';

const defaultState = (): StoreModel.Territory => ({
  provinces: [{ id: 1, name: 'dummy' }]
});

export const stationListReducer = (state = defaultState(), action: BaseAction<any>) => {
  switch (action.type) {
    case actionIds.GET_PROVINCES_SUCCESS:
      console.log('REDUCER action', action.payload)
      console.log('REDUCER state', state)
      const newState = { ...state, provinces: action.payload };
      console.log('REDUCER newState', newState);
      return newState
    //return state;
    default:
      return state;
  }
};
