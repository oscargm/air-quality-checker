import Axios, {AxiosPromise } from 'axios';
import { BasicStation } from '../pods/station-list/station-list.vm';
import { mapStationListToApiModel } from './mappers';

const getStationListURL = 'http://localhost:3000/api/stations';

const getStationList = (): Promise<BasicStation[]> => {
   return Axios.get(getStationListURL).then((response) => mapStationListToApiModel(response.data));
}

export const stationListAPI = {
    getStationList,
}