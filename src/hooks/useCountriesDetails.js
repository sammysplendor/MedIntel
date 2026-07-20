import { useEffect, useState } from "react";
import { getCountriesForMap } from "../api/worldbankApi";

const useCountriesDetails = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountriesForMap();

      setCountries(countries);
    };

    fetchCountries();
  }, []);

  return { countries };
};

export default useCountriesDetails;
