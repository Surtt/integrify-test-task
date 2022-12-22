import { RootState } from "app/store";

export const selectSearch = (state: RootState) => state.search.search;
export const selectControls = (state: RootState) => state.search;
