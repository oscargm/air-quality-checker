import Axios, { AxiosResponse } from 'axios';
import { Polluter, LocalStationDetail, RemoteStationDetail } from "./model";
import { LocalStation, RemoteStation } from './model/station.entity';
import { mapStationListToApiModel } from './mappers';

const getStationListURL = 'http://localhost:3000/api/stations';

/*
const getStationList = (): Promise<LocalStation[]> => {
    const promise: Promise<LocalStation[]> = new Promise((resolve, reject) => {
        try {
            Axios.get(getStationListURL).then(
                (response) => {
                    return resolve(mapStationListToApiModel(response));
                });
        }
        catch (exception) {
            reject(exception);
        }
    });
    return promise
}
*/
const getStationList = async (): Promise<LocalStation[]> => {
    return await Axios.get('http://localhost:3000/api/stations').then(
            response => {
                console.log(response);
                return mapStationListToApiModel(response.data);
            }
        );
}

export const stationListAPI = {
    getStationList,
}