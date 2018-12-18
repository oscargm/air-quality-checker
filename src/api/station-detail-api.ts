import Axios from 'axios';
import { mapStationDetailToApiModel } from './mappers';
import { LocalStationAPI } from './model/station.entity';

const getStationByIdURL = 'http://localhost:3000/api/stations';
const getHistoricURL = '/historic';

const getStationById = (eoiCode: string): Promise<LocalStationAPI> => {
    return Axios.get(getStationByIdURL + '/' + eoiCode).then((response) => {
        return mapStationDetailToApiModel(response.data)});
}

export const stationDetailAPI = {
    getStationById,
}