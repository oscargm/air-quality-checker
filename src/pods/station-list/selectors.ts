import { createSelector } from 'reselect';
import { Territory } from './store/model';
import { key } from './consts';

const territorySelector = (state: Territory) => { console.log('provinces selector', state); return state[key] };

export const getProvinces = createSelector(
  territorySelector,
  (state: Territory) => { console.log('get provinces', state); return state.provinces; }
);
