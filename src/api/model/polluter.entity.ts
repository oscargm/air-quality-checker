export interface RemotePolluterAPI {
    abreviatura: string;
    icqa: boolean;
    tipusMesura: string;
    actiu: boolean;
    margePobra: string;
    margeRegular: string;
    qualitat?: string;
    valorUltimaMesura?: string;
    unitat: string;
}