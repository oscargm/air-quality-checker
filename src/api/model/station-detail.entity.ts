import { LocalPolluterAPI } from "./polluter.entity";

export interface RemoteStationDetail {
    nom: string;
    codiEOI: string;
    municipi: string;
    direccioPostal: string;
    dataInstalacio: string;
    dataRetirada: string;
    latitud: string;
    longitud: string;
    altitud: string;
    latitudGoogle: string;
    longitudGoogle: string;
    UTM: string;
    tipus: string;
    tipusArea1: string;
    tipusArea2: string;
    contaminants: object;
}

export interface LocalStationDetail {
    id: number;
    name: string;
    eoiCode: string;
    city: string;
    cp: string;
    installationDate: string;
    deprecationDate?: string;
    coords: {
        latitude: number;
        longitude: number;
    };
    altitude: number;
    googleCoords: {
        latitude: number;
        longitude: number;
    };
    type: string;
    areaType1: string;
    areaType2: string;
    polluters: LocalPolluterAPI[];
}
