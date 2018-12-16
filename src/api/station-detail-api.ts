import Axios, { AxiosResponse } from 'axios';
import { Polluter, StationDetail } from "./model";

const getStationDetailURL = 'http://dtes.gencat.cat/icqa/AppJava/getEstacio.do?codiEOI=';

const getStationDetail = (eoiCode: number): Promise<StationDetail[]> => {
    const promise: Promise<StationDetail[]> = new Promise((resolve, reject) => {
        try {
            Axios.get<StationDetail[]>(getStationDetailURL+eoiCode).then(
                response => resolve(mapStationDetailsToApiModel(response)));
        }
        catch (exception) {
            reject(exception);
        }
    });

    return promise;
}

const mapStationDetailsToApiModel = ({ data }: AxiosResponse<StationDetail[]>) =>
    data.map(stationDetail => ({
        
    }));

export const stationDetailAPI = {
    getStationDetail,
}