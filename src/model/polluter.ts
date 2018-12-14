export interface Polluter {
    id: number;
    abbreviation?: string;
    name: string;
}
export interface ExtendedPolluter extends Polluter {
    analizingType?: string;
}

export const createDefaultPolluters = (): ExtendedPolluter[] => ([
    {id: 1, abbreviation: 'As', name: 'Arsènic', analizingType: 'captador manual'},
    {id: 2, abbreviation: 'B(a)p', name: 'Benzo(a)pirè ', analizingType: 'captador manual'},
    {id: 3, abbreviation: 'CO', name: 'Monòxid de carboni', analizingType: 'analitzador automàtic'},
    {id: 4, abbreviation: 'C6H6', name: 'Benzè', analizingType: 'captador manual'},
    {id: 5, abbreviation: 'Ni', name: 'Níquel', analizingType: 'captador manual'},
    {id: 6, abbreviation: 'NO', name: 'Monòxid de nitrogen', analizingType: 'analitzador automàtic'},
    {id: 7, abbreviation: 'NO2', name: 'Diòxid de nitrogen', analizingType: 'analitzador automàtic'},
    {id: 8, abbreviation: 'O3', name: 'Ozó', analizingType: 'analitzador automàtic'},
    {id: 9, abbreviation: 'Pb', name: 'Plom', analizingType: 'captador manual'},
    {id: 10, abbreviation: 'PM10', name: 'Partícules en suspensió <10µm', analizingType: 'analitzador automàtic'},
    {id: 11, abbreviation: 'PM10', name: 'Partícules en suspensió <10µm', analizingType: 'captador manual'},
    {id: 12, abbreviation: 'PM2.5', name: 'Partícules en suspensió <2.5µm', analizingType: 'captador manual'},
    {id: 13, abbreviation: 'SO2', name: 'Diòxid de sofre', analizingType: 'analitzador automàtic'}
])