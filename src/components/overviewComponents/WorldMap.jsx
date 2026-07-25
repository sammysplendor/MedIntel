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
import { Tooltip } from "react-tooltip";

const WorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState("");

  // ===== COUNTRY SELECTION ON MAP ===== //
  const { countries } = useCountriesDetails();

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = async (geo) => {
    const country = countries.find((c) =>
      c.name.startsWith(geo.properties.name),
    );

    if (!country) {
      console.log("Country not found");
      return;
    }

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
      <h3>World Health Map</h3>

      <div className={styles.sectionContent}>
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
                      onMouseEnter={() =>
                        setHoveredCountry(
                          geo.properties.name,
                          geo.properties.iso,
                        )
                      }
                      onMouseLeave={() => setHoveredCountry("")}
                      onClick={() => handleCountryClick(geo)}
                      data-tooltip-id="country-tooltip"
                      data-tooltip-content={geo.properties.name}
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
            Health Expenditure (% of GDP):{" "}
            <span>
              {selectedCountry ? selectedCountry?.healthExpenditure : "--"}
            </span>
          </p>
        </div>

        <Tooltip
          id="country-tooltip"
          render={() => (
            <div>
              <strong>{hoveredCountry}</strong>
              <br />
              <small>Click to view health data</small>
            </div>
          )}
          place="top"
          offset={10}
          className={styles.tooltip}
          style={{
            backgroundColor: "#0b0f19",
            fontSize: "1.5rem",
            padding: "1rem",
            borderRadius: "1.2rem",
          }}
        />
      </div>
    </section>
  );
};

export default WorldMap;
