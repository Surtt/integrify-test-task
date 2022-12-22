import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Link } from "@mui/material";
import { CountryDetails } from "../features/details/CountryDetails";

const Details = () => {
  const { name } = useParams();

  const navigate = useNavigate();
  return (
    <div>
      <Button component={Link} variant="contained" onClick={() => navigate(-1)}>
        Back
      </Button>
      <CountryDetails name={name} />
    </div>
  );
};

export default Details;
