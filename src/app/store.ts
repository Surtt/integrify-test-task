import axios from "axios";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import * as api from "api-config";
import { countryReducer } from "features/countries/countries-slice";
import { searchReducer } from "features/search/search-slice";
import { detailsReducer } from "features/details/details-slice";

export const store = configureStore({
  reducer: {
    countries: countryReducer,
    search: searchReducer,
    details: detailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
