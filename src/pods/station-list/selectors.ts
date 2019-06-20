import { createSelector } from 'reselect';
import { Territory, Municipality } from './store/model';
import { key } from './consts';
import { Province } from './store';

const territorySelector = (state: Territory) => {
	console.log('provinces selector', state);
	return state[key];
};

export const getProvinces = createSelector(territorySelector, (state: Territory): Province[] => {
	console.log('get provinces', state);
	return state.provinces;
});

export const getMunicipalities = createSelector(
	[ getProvinces ],
	(provinces: Province[], props): Municipality[] => {
		console.log('get municipalities', provinces[props.provinceId]);
		return provinces[props.provinceId].municipalities;
	}
);
