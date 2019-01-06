// TODO: MOVE TYPES AND INTERFACES TO PODS

export type SaturationLevel = 'HEALTHY' | 'WARNING' | 'DANGER' | 'HEAVYDANGER';

// export const polluterSaturationStates: { [x: string]: SaturationLevel } = {
//     HEALTHY: 'HEALTHY',
//     WARNING: 'WARNING',
//     DANGER: 'DANGER',
//     HEAVYDANGER: 'HEAVYDANGER'
// };

interface BasicPolluter {
    id: number;
    abbreviation?: string;
    name: string;
}

export interface Polluter extends BasicPolluter {
    sampleType?: string;
    polluterSaturationState: SaturationLevel;
    lastMeasuredValue: number;
    unit: string;
}
