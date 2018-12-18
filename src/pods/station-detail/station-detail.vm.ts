import { createDefaultPolluters } from "../../model/polluter";
import { LocalPolluter } from '../../model/apiPolluter';

export interface StationDetail {
    id: number;
    eoiCode: string;
    name: string;
    installationDate: string;
    coords: [number,number];
    altitude: number;
    cp: string;
    city: string;
    areaType: string;
    polluters: LocalPolluter[];
}
/*
export const createDefaultStationDetail = (): StationDetail => ({
    id: 1,
    eoiCode: '08019044',
    name: 'Barcelona (Gràcia - Sant Gervasi)',
    installationDate: '01/01/1987',
    coords: [429236, 4583371],
    altitude: 57,
    cp: 'Pl. Gal·la Placídia',
    city: 'Barcelona',
    areaType: 'Urbana, Trànsit',
    polluters: createDefaultPolluters()
})
*/