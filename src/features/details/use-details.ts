import { useEffect } from "react";

import { clearDetails, loadCountryByName } from "./details-slice";
import { selectDetails } from "./details-selectors";
import { useAppDispatch, useAppSelector } from "app/hooks";

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
  const details = useAppSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    };
  }, [name, dispatch]);

  return details;
};
