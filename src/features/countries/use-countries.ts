import { useEffect } from "react";

import {
  selectCountriesInfo,
  selectVisibleCountries,
} from "./countries-selectors";
import { RootState } from "app/store";
import { loadCountries } from "./countries-slice";
import { ICountryInfo } from "types";
import { selectControls } from "features/search/search-selectors";
import { useAppDispatch, useAppSelector } from "app/hooks";

export const useCountries = (): [
  ICountryInfo[],
  ReturnType<typeof selectCountriesInfo>
] => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectControls);
  const data = useAppSelector((state: RootState) =>
    selectVisibleCountries(state, search)
  );

  const countries = data.map(
    ({ flags, name, region, population, languages }): ICountryInfo => {
      return {
        flag: flags.svg,
        name: name.common,
        region,
        population,
        languages: Object.values(languages),
      };
    }
  );
  const { status, error, qty } = useAppSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
