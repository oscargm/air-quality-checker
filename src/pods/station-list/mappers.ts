import * as APIModel from './api';
import { provinces as provinceNames } from './consts';
import * as StoreModel from './store/model';

export const mapProvincesAPItoStore = (
	apiProvinces: APIModel.Province[]
): StoreModel.Province[] => {
	let provincesReturn: StoreModel.Province[] = [];
	apiProvinces.map((apiProvince: APIModel.Province) => {
		provincesReturn.push({
			id: parseInt(apiProvince.provincia),
			name: provinceNames[apiProvince.provincia]
		});
	});
	return provincesReturn;
};
