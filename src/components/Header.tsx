import React from "react";
import { Container, Grid, styled, useTheme } from "@mui/material";
import Search from "features/search/Search";

const HeaderStyled = styled("header")({
  padding: "15px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const TitleStyled = styled("h3")(({ theme }) => ({
  margin: 0,
  color: theme.palette.common.white,
  fontFamily: theme.typography.h3.fontFamily,
}));

const Header = () => {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Container maxWidth="xl">
        <HeaderStyled>
          <TitleStyled>Country</TitleStyled>
          <Search />
        </HeaderStyled>
      </Container>
    </Grid>
  );
};

export default Header;
