import { ICountry } from "types";
import { styled } from "@mui/material";

interface InfoProps extends ICountry {}

const Wrapper = styled("div")({
  margin: "50px 0",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  columnGap: 50,
});

const InfoTitle = styled("h1")({
  margin: 0,
});

const ListGroup = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

const List = styled("ul")({
  listStyle: "none",
  margin: 0,
  padding: 0,
});
const ListItem = styled("li")({
  lineHeight: 1.8,

  "& > b": {
    fontWeight: 600,
  },
});
export const InfoDetails = (props: InfoProps) => {
  const { name, flags, capital, population, region, subregion, latlng } = props;

  return (
    <>
      <Wrapper>
        <img src={flags.png} alt={name.common} />

        <div>
          <InfoTitle>{name.common}</InfoTitle>
          <ListGroup>
            <List>
              <ListItem>
                <b>Official Name:</b> {name.official}
              </ListItem>
              <ListItem>
                <b>Population:</b> {population}
              </ListItem>
              <ListItem>
                <b>Region:</b> {region}
              </ListItem>
              <ListItem>
                <b>Sub Region:</b> {subregion}
              </ListItem>
              <ListItem>
                <b>Capital:</b> {capital}
              </ListItem>
            </List>
          </ListGroup>
        </div>
      </Wrapper>
      <div>
        The country belongs to <b>{region}</b> region and <b>{subregion}</b>{" "}
        sub-region. Located at the <b>{latlng[0]}&deg;</b> N and{" "}
        <b>{latlng[1]}&deg;</b> W, this country has population of{" "}
        <b>{population}</b>.
      </div>
    </>
  );
};
