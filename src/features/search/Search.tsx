import React from "react";
import { InputAdornment, styled, TextField } from "@mui/material";
import { useSearch } from "./use-search";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const style = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
};

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    border: `1px solid ${theme.palette.common.white}`,
  },
  "& .MuiInputBase-input": {
    color: theme.palette.common.white,
    borderRadius: 4,
    fontSize: 16,
    width: "auto",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Search = () => {
  const [search, handleSearch] = useSearch();
  return (
    <StyledTextField
      sx={style}
      value={search}
      onChange={handleSearch}
      variant="outlined"
      size="small"
      placeholder="Search by country name"
      color="error"
      InputProps={{
        startAdornment: (
          <InputAdornment sx={{ backgroundColor: "white" }} position="start">
            <SearchOutlinedIcon sx={{ color: "white" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
