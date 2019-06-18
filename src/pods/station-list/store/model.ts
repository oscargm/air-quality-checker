export interface Territory {
  provinces: Province[];
}

export interface Province {
  id: number;
  name: string;
  municipalities?: Municipality[];
}

export interface Municipality {
  id: number;
  name: string;
}