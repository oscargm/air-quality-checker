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
		default:
			return state;
	}
};
