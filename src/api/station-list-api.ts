import Axios, { AxiosResponse } from 'axios';
import { Polluter, LocalStationDetail, RemoteStationDetail } from "./model";
import { LocalStation, RemoteStation } from './model/station.entity';
import { mapStationListToApiModel } from './mappers';

const getStationListURL = 'http://localhost:3000/api/stations';


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
/*
const getStationList = (): Promise<LocalStation[]> => {
    const promise: Promise<LocalStation[]> = new Promise((resolve, reject) => {
        try {
            return mapStationListToApiModel(Axios.get<RemoteStation[]>(getStationListURL));
        }
        catch (exception) {
            reject(exception);
        }
    });

    return promise;
}
*/
export const stationListAPI = {
    getStationList,
}