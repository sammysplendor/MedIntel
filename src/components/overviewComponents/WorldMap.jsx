import styles from "../../styles/components styles/overview/WorldMap.module.css";
import { geoUrl } from "../../constants/config";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useState } from "react";
import useCountriesDetails from "../../hooks/useCountriesDetails";
import { getCountryHealthData } from "../../api/worldbankApi";

const WorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState("");

  // ===== COUNTRY SELECTION ON MAP ===== //
  const { countries } = useCountriesDetails();

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = async (geo) => {
    const country = countries.find((c) => c.name === geo.properties.name);
    console.log(geo.properties);

    if (!country) return;

    const countryData = await getCountryHealthData(country.id, country.name);
    console.log(countryData);

    setSelectedCountry(countryData);
  };

  // ===== ZOOM BUTTONS FUNCTIONALITY ===== //
  const [position, setPosition] = useState({
    coordinates: [0, 20],
    zoom: 1,
  });

  const handleZoomOut = () => {
    setPosition((prev) => ({
      ...prev,
      zoom: Math.max(prev.zoom - 1, 1),
    }));
  };

  const handleZoomIn = () => {
    setPosition((prev) => ({ ...prev, zoom: position.zoom + 1 }));
  };

  return (
    <section className={styles.mapSection}>
      <div className={styles.mapContainer}>
        <span className={styles.zoomBtns}>
          <button onClick={handleZoomOut} title="Zoom out">
            -
          </button>
          <button onClick={handleZoomIn} title="Zoom in">
            +
          </button>
        </span>

        <ComposableMap
          projectionConfig={{ scale: 150 }}
          width={900}
          height={400}
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={(position) => setPosition(position)}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={styles.countries}
                    onMouseEnter={() => setHoveredCountry(geo.properties.name)}
                    onMouseLeave={() => setHoveredCountry("")}
                    onClick={() => handleCountryClick(geo)}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
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
