import { InfoDetails } from "./InfoDetails";
import { useDetails } from "./use-details";

interface CountryDetailsProps {
  name?: string;
}

const CountryDetails = ({ name = "" }: CountryDetailsProps) => {
  const { status, error, currentCountry } = useDetails(name);

  return (
    <>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <InfoDetails {...currentCountry} />}
    </>
  );
};

export { CountryDetails };
