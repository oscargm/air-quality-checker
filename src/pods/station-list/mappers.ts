import { BasicStation } from "./station-list.vm";
import { BasicStationAPI } from '../../api/model/station.entity';

export function mapStationListToApiModel(data: BasicStationAPI[]): BasicStation[] {
    return (data.map((stationDetail: BasicStationAPI): BasicStation => ({ ...stationDetail })));
}