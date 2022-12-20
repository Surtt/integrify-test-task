import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/";

export const ALL_COUNTRIES =
  BASE_URL + "all?fields=flags,name,region,population,languages";

export const searchByCountry = (name: string) => BASE_URL + "name/" + name;

export const api = () => axios.create({ baseURL: BASE_URL });
