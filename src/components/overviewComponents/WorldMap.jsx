import styles from "../../styles/components styles/overview/WorldMap.module.css";
import { geoUrl } from "../../constants/config";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";
import useCountriesDetails from "../../hooks/useCountriesDetails";
import { getCountryHealthData } from "../../api/worldbankApi";

const WorldMap = () => {
  const { countries } = useCountriesDetails();

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = async (geo) => {
    const country = countries.find((c) => c.name === geo.properties.name);

    if (!country) return;

    const countryData = await getCountryHealthData(country.id, country.name);
    console.log(countryData);

    setSelectedCountry(countryData);
  };

  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <ComposableMap
          projectionConfig={{ scale: 150 }}
          width={900}
          height={400}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className={styles.countries}
                  onClick={() => handleCountryClick(geo)}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

      <div className={styles.countryDetail}>
        <p>
          Country:{" "}
          <span>
            {selectedCountry ? selectedCountry?.name : "Select a country"}
          </span>
        </p>
        <p>
          Population:{" "}
          <span>
            {selectedCountry
              ? selectedCountry?.population?.toLocaleString()
              : "--"}
          </span>
        </p>
        <p>
          Life Expectancy:{" "}
          <span>
            {selectedCountry
              ? `${selectedCountry?.lifeExpectancy.toFixed(1)} years`
              : "--"}
          </span>
        </p>
        <p>
          Health Expenditure:{" "}
          <span>
            {selectedCountry ? selectedCountry?.healthExpenditure : "--"}
          </span>
        </p>
      </div>
    </section>
  );
};

export default WorldMap;
