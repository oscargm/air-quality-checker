import Axios from 'axios';
import { RemoteBasicStationAPI } from './model/station.entity';

const getStationListURL = 'http://0.0.0.0:3000/api/stations';

const getStationList = () =>
    Axios.get<RemoteBasicStationAPI[]>(getStationListURL).then(({ data }) => data);

export const stationListAPI = {
    getStationList
};
