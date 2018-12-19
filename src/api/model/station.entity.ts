import { RemotePolluterAPI, LocalPolluterAPI } from "./polluter.entity";

export interface BasicStationAPI {
    id: string;
    name: string;
    eoiCode: string;
}
export interface LocalStationAPI {
    id: string;
    name: string;
    eoiCode: string;
    city: string;
    cp: string;
    installationDate: string;
    deprecationDate?: string;
    latitude: string;
    longitude: string;
    altitude: string;
    latitudeGoogle: string;
    longitudeGoogle: string;
    UTM: [string,string];
    type: string;
    areaType1: string;
    areaType2: string;
    polluters: LocalPolluterAPI[];
    historics: Object[];
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
    UTM: [string,string];
    tipus: string;
    tipusArea1: string;
    tipusArea2: string;
    contaminants: {[key: string]: RemotePolluterAPI};
    historics: Object[];
}
