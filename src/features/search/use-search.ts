import { ChangeEventHandler } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "app/hooks";
import { selectSearch } from "./search-selectors";
import { setSearch } from "./search-slice";

type onSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, onSearch] => {
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const handleSearch: onSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return [search, handleSearch];
};
