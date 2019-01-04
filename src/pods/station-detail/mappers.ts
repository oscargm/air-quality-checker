import { RemoteStationAPI, RemotePollutersDictAPI } from '../../api/model/station.entity';
import { StationDetail } from './station-detail.vm';
import { Polluter, SaturationLevel } from '../../model/polluter';
import { stationDetailAPI } from '../../api/station-detail-api';

const mapStationAPIToVM = (stationDetail: RemoteStationAPI): StationDetail => ({
    id: stationDetail.id,
    altitude: parseFloat(stationDetail.altitud),
    areaType: stationDetail.tipusArea1,
    city: stationDetail.municipi,
    cp: stationDetail.direccioPostal,
    coords: [parseFloat(stationDetail.latitud), parseFloat(stationDetail.longitud)],
    eoiCode: stationDetail.codiEOI,
    installationDate: stationDetail.dataInstalacio,
    name: stationDetail.nom,
    polluters: mapPollutersDictAPIToVM(stationDetail.contaminants),
    historics: stationDetail.historics
});

const mapPollutersDictAPIToVM = (dict: RemotePollutersDictAPI) =>
    Object.keys(dict).map((key, i): Polluter => {
        const polluter = dict[key];
        const lastMeasuredValue = parseFloat(polluter.valorUltimaMesura);
        return {
            abbreviation: polluter.abreviatura,
            id: i,
            lastMeasuredValue,
            name: polluter.abreviatura,
            polluterSaturationState: getSaturationState(
                lastMeasuredValue,
                parseFloat(polluter.margeRegular),
                parseFloat(polluter.margePobra)
            ),
            sampleType: polluter.tipusMesura,
            unit: polluter.unitat
        };
    });

const isNumber = (n: number): boolean => typeof n === 'number';

const getSaturationState = (
    currentValue: number,
    regularMargin: number,
    poorMargin: number
): SaturationLevel => {
    if (isNumber(currentValue) && isNumber(regularMargin) && isNumber(poorMargin)) {
        if (currentValue < regularMargin) {
            return 'HEALTHY';
        } else {
            if (currentValue > regularMargin && currentValue < poorMargin) {
                return 'WARNING';
            } else {
                return 'HEAVYDANGER';
            }
        }
        // TODO: WHEN TO // return 'DANGER'; ???
    } else {
        return undefined;
    }
};

export const getStationById = (eoiCode: string) =>
    stationDetailAPI.getStationById(eoiCode).then(mapStationAPIToVM);

// TODO: REMOVE
// export const mapStationDetailToApiModel = (data: RemoteStationAPI): StationDetail => ({
//     id: data.id,
//     name: data.nom,
//     eoiCode: data.codiEOI,
//     city: data.municipi,
//     cp: data.direccioPostal,
//     installationDate: data.dataInstalacio,
//     deprecationDate: data.dataRetirada,
//     latitude: data.latitud,
//     longitude: data.longitud,
//     altitude: data.altitud,
//     latitudeGoogle: data.latitudGoogle,
//     longitudeGoogle: data.longitudGoogle,
//     UTM: data.UTM,
//     type: data.tipus,
//     areaType1: data.tipusArea1,
//     areaType2: data.tipusArea2,
//     polluters: mapRemotePollutersToLocal(data.contaminants),
//     historics: data.historics
// });

// const mapRemotePollutersToLocal = (remotePoluters: RemotePollutersDict): LocalPolluterAPI[] =>
//     Object.keys(remotePoluters).map<LocalPolluterAPI>(key => ({
//         abbreviation: remotePoluters[key].abreviatura,
//         icqa: remotePoluters[key].icqa,
//         active: remotePoluters[key].actiu,
//         lastMeasiringValue: remotePoluters[key].valorUltimaMesura,
//         measuringType: remotePoluters[key].tipusMesura,
//         poorMargin: remotePoluters[key].margePobra,
//         regularMargin: remotePoluters[key].margeRegular,
//         quality: remotePoluters[key].qualitat,
//         unit: remotePoluters[key].unitat
//     }));
