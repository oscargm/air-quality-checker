import Axios from 'axios';
import { RemoteStationAPI } from './model/station.entity';

const getStationByIdURL = 'http://0.0.0.0:3000/api/stations';
// const getHistoricURL = '/historic';

const getStationById = (eoiCode: string) =>
    Axios.get<RemoteStationAPI>(getStationByIdURL + '/' + eoiCode).then(({ data }) => data);

export const stationDetailAPI = {
    getStationById
};
