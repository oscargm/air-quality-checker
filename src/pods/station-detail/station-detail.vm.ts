import { Polluter } from "model/polluter";

export interface StationDetail {
    id: string;
    eoiCode: string;
    name: string;
    installationDate: string;
    coords: [number,number];
    altitude: number;
    cp: string;
    city: string;
    areaType: string;
    polluters: Polluter[];
    historics: any[];
}

export const getEmptyStationDetail = (): StationDetail => ({
    id: "",
    eoiCode: "",
    name: "",
    installationDate: "",
    coords: [0, 0],
    altitude: 0,
    cp: "",
    city: "",
    areaType: "",
    polluters: [],
    historics: [],

})

// export const createDefaultStationDetail = (): StationDetail => ({
//     id: "none",
//     eoiCode: '08019044',
//     name: 'Barcelona (Gràcia - Sant Gervasi)',
//     installationDate: '01/01/1987',
//     coords: [429236, 4583371],
//     altitude: 57,
//     cp: 'Pl. Gal·la Placídia',
//     city: 'Barcelona',
//     areaType: 'Urbana, Trànsit',
//     polluters: createDefaultPolluters(),
//     historics: [],
// })

// export const createDefaultPolluters = (): ExtendedPolluter[] => [
//     {
//         id: 1,
//         abbreviation: 'As',
//         name: 'Arsènic',
//         analizingType: 'captador manual',
//         polluterSaturationState: polluterSaturationStates.HEALTHY
//     },
//     {
//         id: 2,
//         abbreviation: 'B(a)p',
//         name: 'Benzo(a)pirè ',
//         analizingType: 'captador manual',
//         polluterSaturationState: polluterSaturationStates.WARNING
//     },
//     {
//         id: 3,
//         abbreviation: 'CO',
//         name: 'Monòxid de carboni',
//         analizingType: 'analitzador automàtic',
//         polluterSaturationState: polluterSaturationStates.DANGER
//     },
//     {
//         id: 4,
//         abbreviation: 'C6H6',
//         name: 'Benzè',
//         analizingType: 'captador manual',
//         polluterSaturationState: polluterSaturationStates.HEALTHY
//     },
//     {
//         id: 5,
//         abbreviation: 'Ni',
//         name: 'Níquel',
//         analizingType: 'captador manual',
//         polluterSaturationState: polluterSaturationStates.HEALTHY
//     },
//     {
//         id: 6,
//         abbreviation: 'NO',
//         name: 'Monòxid de nitrogen',
//         analizingType: 'analitzador automàtic',
//         polluterSaturationState: polluterSaturationStates.DANGER
//     },
//     {
//         id: 7,
//         abbreviation: 'NO2',
//         name: 'Diòxid de nitrogen',
//         analizingType: 'analitzador automàtic',
//         polluterSaturationState: polluterSaturationStates.HEAVYDANGER
//     },
//     {
//         id: 8,
//         abbreviation: 'O3',
//         name: 'Ozó',
//         analizingType: 'analitzador automàtic',
//         polluterSaturationState: polluterSaturationStates.HEAVYDANGER
//     },
//     {
//         id: 9,
//         abbreviation: 'Pb',
//         name: 'Plom',
//         analizingType: 'captador manual',
//         polluterSaturationState: polluterSaturationStates.HEALTHY
//     },
//     {
//         id: 10,
//         abbreviation: 'PM10',
//         name: 'Partícules en suspensió <10µm',
//         analizingType: 'analitzador automàtic',
//         polluterSaturationState: polluterSaturationStates.HEAVYDANGER
//     },
//     {
//         id: 11,
//         abbreviation: 'PM10',
//         name: 'Partícules en suspensió <10µm',
//         analizingType: 'captador manual',
//         polluterSaturationState: polluterSaturationStates.HEAVYDANGER
//     },
//     {
//         id: 12,
//         abbreviation: 'PM2.5',
//         name: 'Partícules en suspensió <2.5µm',
//         analizingType: 'captador manual',
//         polluterSaturationState: polluterSaturationStates.DANGER
//     },
//     {
//         id: 13,
//         abbreviation: 'SO2',
//         name: 'Diòxid de sofre',
//         analizingType: 'analitzador automàtic',
//         polluterSaturationState: polluterSaturationStates.HEALTHY
//     }
// ];
