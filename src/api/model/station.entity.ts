import { RemotePolluterAPI } from './polluter.entity';

export interface RemoteBasicStationAPI {
    id: string;
    codiEOI: string;
    nom: string;
}

export interface RemoteStationAPI {
    id: string;
    nom: string;
    codiEOI: string;
    municipi: string;
    direccioPostal: string;
    dataInstalacio: string;
    dataRetirada?: string;
    latitud: string;
    longitud: string;
    altitud: string;
    latitudGoogle: string;
    longitudGoogle: string;
    UTM: [string, string];
    tipus: string;
    tipusArea1: string;
    tipusArea2: string;
    contaminants: RemotePollutersDictAPI;
    primeraData: string;
    historics?: RemoteStationHistoricAPI[];
}

export type RemotePollutersDictAPI = { [key: string]: RemotePolluterAPI };

export interface RemoteStationHistoricAPI {
    date: string;
    [key: string]: string;
}
