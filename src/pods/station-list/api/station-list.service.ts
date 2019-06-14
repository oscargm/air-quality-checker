import Axios from 'axios';
import { Province } from './model';

const getProvinceListURL =
	'https://analisi.transparenciacatalunya.cat/resource/uy6k-2s8r.json?$select=provincia&$group=provincia';

export const getStationList = (): Promise<Province[]> =>
	Axios.get(getProvinceListURL).then((response) => response.data);
