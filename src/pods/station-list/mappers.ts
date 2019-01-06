import { BasicStation } from './station-list.vm';
import { RemoteBasicStationAPI } from '../../api/model/station.entity';
import { stationListAPI } from '../../api/station-list-api';

const mapBasicStationAPIToVM = (data: RemoteBasicStationAPI[]) =>
    data.map(
        (stationDetail): BasicStation => ({
            id: stationDetail.id,
            eoiCode: stationDetail.codiEOI,
            name: stationDetail.nom
        })
    );

export const getStationList = () => stationListAPI.getStationList().then(mapBasicStationAPIToVM);
