import { useNavigate } from "react-router-dom";

import { useCountries } from "./use-countries";
import React, { ChangeEvent, ReactNode, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { TColumns } from "types";

interface Column {
  id: TColumns;
  label: string;
  minWidth?: number;
  align?: "right";
  languages?: (value: string[]) => ReactNode;
  img?: (value: string) => JSX.Element;
}

const columns: readonly Column[] = [
  {
    id: "flag",
    label: "Flag",
    minWidth: 170,
    img: (value) => <img src={value} alt={value} width={100} />,
  },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "region",
    label: "Region",
    minWidth: 170,
    align: "right",
  },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
  },
  {
    id: "languages",
    label: "Languages",
    minWidth: 170,
    align: "right",
    languages: (value) => value.map((v) => <li key={v}>{v}</li>),
  },
];

const CountryList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getValues = (column: Column, value: string | number | string[]) => {
    if (column.languages && typeof value === "object") {
      return column.languages(value);
    } else if (column.img && typeof value === "string") {
      return column.img(value);
    } else {
      return value;
    }
  };

  const [countries, { error, status }] = useCountries();

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === "loading" && <h2>Loading...</h2>}
      {status === "received" && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "auto" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {countries
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((country) => {
                    return (
                      <TableRow
                        sx={{ cursor: "pointer" }}
                        onClick={() =>
                          navigate(`/country/${country.name.toLowerCase()}`)
                        }
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={country.name}
                      >
                        {columns.map((column) => {
                          const value = country[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {getValues(column, value)}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 25, 100]}
            component="div"
            count={countries.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
};

export { CountryList };
