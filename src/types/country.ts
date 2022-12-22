import { TRegion } from "./regions";

export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  flag: string;
  flags: {
    png: string;
    svg: string;
  };
  region: TRegion;
  subregion: string;
  capital: string;
  population: number;
  latlng: number[];
  languages: string[];
}

export interface ICountryInfo {
  flag: string;
  name: string;
  region: TRegion;
  population: number;
  languages: string[];
}
