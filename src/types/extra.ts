import { Axios } from "axios";
import * as API from "api-config";

export interface IExtra {
  client: Axios;
  api: typeof API;
}
