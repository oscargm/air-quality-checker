import {
  RemoteStationAPI,
  RemotePollutersDictAPI,
  RemoteStationHistoricAPI
} from '../../api/model/station.entity';
import { StationDetail, StationHistoricLineChart } from './station-detail.vm';
import { Polluter, SaturationLevel } from '../../model/polluter';
import { stationDetailAPI } from '../../api/station-detail-api';

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
      } else if (currentValue > poorMargin) {
        return 'HEAVYDANGER';
      } else {
        return undefined;
      }
    }
    // TODO: WHEN TO // return 'DANGER'; ???
  } else {
    return undefined;
  }
};

const mapHistoricsAPIToLineChartVM = (
  historics: RemoteStationHistoricAPI[]
): StationHistoricLineChart[] => {
  const result: StationHistoricLineChart[] = [];
  if (historics) {
    historics.forEach(historic => {
      Object.keys(historic)
        .filter(k => k !== 'date')
        .forEach(key => {
          const value = parseFloat(historic[key]);
          const dataRecord = { [historic.date]: isNaN(value) ? null : value };
          const found = result.find(r => r.name === key);
          if (!found) {
            result.push({ name: key, data: dataRecord });
          } else {
            found.data = Object.assign(found.data, dataRecord);
          }
        });
    });
  }
  return result;
};

const mapPollutersDictAPIToVM = (dict: RemotePollutersDictAPI) =>
  Object.keys(dict).map(
    (key, i): Polluter => {
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
    }
  );

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
  historics: mapHistoricsAPIToLineChartVM(stationDetail.historics)
});

export const getStationById = (eoiCode: string) =>
  stationDetailAPI.getStationById(eoiCode).then(mapStationAPIToVM);
