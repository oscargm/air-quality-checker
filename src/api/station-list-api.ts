import Axios, { AxiosPromise } from 'axios';
import { BasicStation } from '../pods/station-list/station-list.vm';
import { mapStationListToApiModel } from './mappers';
import { BasicStationAPI } from './model/station.entity';
const getStationListURL = 'http://localhost:3000/api/stations';

const getStationList = (): Promise<BasicStationAPI[]> =>
    Axios.get<BasicStation[]>(getStationListURL).then(({ data }) => mapStationListToApiModel(data));

export const stationListAPI = {
    getStationList
};
