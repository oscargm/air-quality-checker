import { createSelector } from 'reselect';
import { Territory } from './store/model';

const provincesSelector = (state) => state.territory;

export const getProvinces = createSelector(
	provincesSelector,
	(state: Territory) => state.provinces
);
