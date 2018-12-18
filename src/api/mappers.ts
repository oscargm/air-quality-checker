import { AxiosResponse, AxiosPromise } from "axios";
import { LocalStationDetail, RemoteStationDetail } from "./model";
import { RemoteStation, LocalStation } from "./model/station.entity";
/*
export const mapStationDetailsToApiModel = ( response): Promise<LocalStationDetail> =>
    ({
        id: 1,
        name: response.nom,
        eoiCode: response.codiEOI,
        city: response.municipi,
        cp: response.direccioPostal,
        installationDate: response.dataInstalacio,
        deprecationDate: response.dataRetirada,
        coords: {
            latitude: Number(response.latitud),
            longitude: Number(response.longitud),
        },
        altitude: Number(response.altitud),
        googleCoords: {
            latitude: Number(response.latitudGoogle),
            longitude: Number(response.longitudGoogle),
        },
        type: response.tipus,
        areaType1: response.tipusArea1,
        areaType2: response.tipusArea2,
        polluters: Object.values(response.contaminants)
    });
*/
/*
export function mapStationListToApiModel({ data }: AxiosResponse<RemoteStation[]>) {
    console.log(data);
    return (data.map((stationDetail: RemoteStation): LocalStation => ({
        id: Number(stationDetail.id),
        eoiCode: Number(stationDetail.eoiCode),
        name: stationDetail.name
    })));
}
*/

export function mapStationListToApiModel(data): LocalStation[] {
    console.log(data);
    return (data.map((stationDetail): LocalStation => ({
        id: Number(stationDetail.id),
        eoiCode: Number(stationDetail.eoiCode),
        name: stationDetail.name
    })));
}