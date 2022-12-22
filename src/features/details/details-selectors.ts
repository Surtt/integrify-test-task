import { RootState } from "app/store";

export const selectCurrentCountry = (state: RootState) =>
  state.details.currentCountry;
export const selectDetails = (state: RootState) => state.details;
