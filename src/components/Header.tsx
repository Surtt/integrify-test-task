import React from "react";
import { styled, useTheme } from "@mui/material";

const HeaderStyled = styled("header")({
  padding: "15px 0",
});

const TitleStyled = styled("h3")(({ theme }) => ({
  margin: 0,
  color: theme.palette.common.white,
  fontFamily: theme.typography.h3.fontFamily,
}));

const Header = () => {
  return (
    <HeaderStyled>
      <TitleStyled>Country</TitleStyled>
    </HeaderStyled>
  );
};

export default Header;
