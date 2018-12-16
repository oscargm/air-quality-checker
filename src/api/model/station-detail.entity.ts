import { Polluter } from "./polluter.entity";

export interface StationDetail {
    id: number;
    name: string;
    eoiCode: string;
    city: string;
    cp: string;
    installationDate: string;
    deprecationDate?:string;
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
    polluters: Polluter[];
}
