import Axios, {AxiosPromise } from 'axios';
import { LocalStation} from './model/station.entity';

const getStationListURL = 'http://localhost:3000/api/stations';

const getStationList = (): AxiosPromise<LocalStation[]> => {
   return Axios.get(getStationListURL)
}

export const stationListAPI = {
    getStationList,
}