import React from "react";
import "./App.css";
import { Box, Container, Grid, useTheme } from "@mui/material";
import Header from "./components/Header";

function App() {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Container maxWidth="xl">
          <Header />
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="xl">
          <Box>Content</Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
