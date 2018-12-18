import { LocalStationAPI } from "../../api/model/station.entity";
import { StationDetail } from './station-detail.vm';
import { LocalPolluterAPI } from '../../api/model/polluter.entity';
import { ExtendedPolluter } from '../../model/polluter';

export const mapStationDetailFromApiToVM = (stationDetail: LocalStationAPI):StationDetail => ({
    id: parseInt(stationDetail.id),
    altitude: parseInt(stationDetail.altitude),
    areaType: stationDetail.areaType1,
    city: stationDetail.city,
    cp: stationDetail.cp,
    coords: [parseFloat(stationDetail.latitude), parseFloat(stationDetail.longitude)],
    eoiCode:stationDetail.eoiCode,
    installationDate: stationDetail.installationDate,
    name: stationDetail.name,
    polluters: stationDetail.polluters
});