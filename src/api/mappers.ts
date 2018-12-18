import { RemoteStationAPI, BasicStationAPI, LocalStationAPI } from "./model/station.entity";
import { LocalPolluterAPI, RemotePolluterAPI } from './model/polluter.entity';

export const mapStationDetailToApiModel = (data: RemoteStationAPI): LocalStationAPI =>
    ({
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
        polluters: mapRemotePollutersToLocal(data.contaminants)
    });
const mapRemotePollutersToLocal = (remotePoluters): LocalPolluterAPI[] => {
    return Object.keys(remotePoluters).map((key: string):LocalPolluterAPI => ({
        
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
    };

export function mapStationListToApiModel(data): BasicStationAPI[] {
    console.log(data);
    return (data.map((stationDetail: RemoteStationAPI): BasicStationAPI => ({
        id: stationDetail.id,
        eoiCode: stationDetail.codiEOI,
        name: stationDetail.nom
    })));
}