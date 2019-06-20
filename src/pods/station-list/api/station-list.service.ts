import Axios from 'axios';
import { Province, Municipality } from './model';

const getProvinceListURL =
	'https://analisi.transparenciacatalunya.cat/resource/uy6k-2s8r.json?$select=provincia&$group=provincia';

const getMunicipalitiesURL =
	'https://analisi.transparenciacatalunya.cat/resource/uy6k-2s8r.json?$select=municipi&$group=municipi&$order=municipi';

export const getStationList = (): Promise<Province[]> =>
	Axios.get(getProvinceListURL).then((response) => response.data);

export const getMunicipalitiesList = (provinceId: number): Promise<Municipality[]> => {
	console.log(`${getMunicipalitiesURL}&provincia=${provinceId}`);
	return Axios.get(`${getMunicipalitiesURL}&provincia=${provinceId}`).then(
		(response) => response.data
	);
};
