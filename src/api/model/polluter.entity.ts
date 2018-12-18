export interface LocalPolluterAPI {
    abbreviation: string;
    icqa: string;
    measuringType: string;
    active: string;
    poorMargin: string;
    regularMargin: string;
    quality?: string;
    lastMeasiringValue?: string;
    unit: string;
}

export interface RemotePolluterAPI {
    abreviatura: string;
    icqa: string;
    tipusMesura: string;
    actiu: string;
    margePobra: string;
    margeRegular: string;
    qualitat?: string;
    valorUltimaMesura?: string;
    unitat: string;
}