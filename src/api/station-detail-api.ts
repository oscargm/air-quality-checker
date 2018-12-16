/*import Axios, { AxiosResponse } from 'axios';
import { Polluter, LocalStationDetail, RemoteStationDetail } from "./model";
import { mapStationDetailsToApiModel } from './mappers';

const getStationDetailURL = 'http://dtes.gencat.cat/icqa/AppJava/getEstacio.do?codiEOI=';

const getStationDetail = (eoiCode: number): Promise<LocalStationDetail[]> => {
    const promise: Promise<RemoteStationDetail[]> = new Promise((resolve, reject) => {
        try {
                Axios.get<RemoteStationDetail>(getStationDetailURL)
                    .then(response => resolve(mapStationDetailsToApiModel(response)))
                    .catch(error => reject(error))
        }
        catch (exception) {
            reject(exception);
        }
    });

    return promise;
}

export const stationDetailAPI = {
    getStationDetail,
}*/