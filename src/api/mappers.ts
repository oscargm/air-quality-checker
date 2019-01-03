import {
    RemoteStationAPI,
    BasicStationAPI,
    LocalStationAPI,
    RemotePollutersDict
} from './model/station.entity';
import { LocalPolluterAPI } from './model/polluter.entity';

export const mapStationDetailToApiModel = (data: RemoteStationAPI): LocalStationAPI => ({
    id: data.id,
    name: data.nom,
    eoiCode: data.codiEOI,
    city: data.municipi,
    cp: data.direccioPostal,
    installationDate: data.dataInstalacio,
    deprecationDate: data.dataRetirada,
    latitude: data.latitud,
    longitude: data.longitud,
    altitude: data.altitud,
    latitudeGoogle: data.latitudGoogle,
    longitudeGoogle: data.longitudGoogle,
    UTM: data.UTM,
    type: data.tipus,
    areaType1: data.tipusArea1,
    areaType2: data.tipusArea2,
    polluters: mapRemotePollutersToLocal(data.contaminants),
    historics: data.historics
});

const mapRemotePollutersToLocal = (remotePoluters: RemotePollutersDict): LocalPolluterAPI[] =>
    Object.keys(remotePoluters).map<LocalPolluterAPI>(key => ({
        abbreviation: remotePoluters[key].abreviatura,
        icqa: remotePoluters[key].icqa,
        active: remotePoluters[key].actiu,
        lastMeasiringValue: remotePoluters[key].valorUltimaMesura,
        measuringType: remotePoluters[key].tipusMesura,
        poorMargin: remotePoluters[key].margePobra,
        regularMargin: remotePoluters[key].margeRegular,
        quality: remotePoluters[key].qualitat,
        unit: remotePoluters[key].unitat
    }));

export const mapStationListToApiModel = (data: RemoteStationAPI[]): BasicStationAPI[] =>
    data.map<BasicStationAPI>(stationDetail => ({
        id: stationDetail.id,
        eoiCode: stationDetail.codiEOI,
        name: stationDetail.nom
    }));
