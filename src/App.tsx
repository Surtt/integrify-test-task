import React from "react";
import { Routes, Route } from "react-router-dom";

import { Container, Grid } from "@mui/material";
import Header from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound";
import Details from "./pages/Details";

function App() {
  return (
    <Grid container spacing={2}>
      <Header />
      <Grid item xs={12}>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:name" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
