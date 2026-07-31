export const INDICATORS = {
  LIFE_EXPECTANCY: "SP.DYN.LE00.IN",
  INFANT_MORTALITY: "SP.DYN.IMRT.IN",
  HEALTH_EXPENDITURE: "SH.XPD.CHEX.GD.ZS",
  POPULATION: "SP.POP.TOTL",
};

export const indicatorOptions = [
  {
    label: "Life Expectancy",
    value: "lifeExpectancy",
    code: "SP.DYN.LE00.IN",
    unit: "Years",
    description:
      "The average number of years a newborn is expected to live if current mortality patterns remain the same.",
  },
  {
    label: "Health Expenditure",
    value: "healthExpenditure",
    code: "SH.XPD.CHEX.GD.ZS",
    unit: "% of GDP",
    description:
      "Current health expenditure expressed as a percentage of Gross Domestic Product (GDP).",
  },
  {
    label: "Infant Mortality",
    value: "infantMortality",
    code: "SP.DYN.IMRT.IN",
    unit: "Deaths per 1,000 births",
    description:
      "The number of infants dying before reaching one year of age per 1,000 live births.",
  },
  {
    label: "Population",
    value: "population",
    code: "SP.POP.TOTL",
    unit: "People",
    description:
      "The total number of people living in a country based on the latest available census or estimates.",
  },
  {
    label: "Under-5 Mortality",
    value: "u-5Mortality",
    code: "SH.DYN.MORT",
    unit: "Deaths per 1,000 births",
    description:
      "The probability that a child born in a given year will die before reaching age five.",
  },
  {
    label: "Immunization Coverage",
    value: "immunizationCoverage",
    code: "SH.IMM.MEAS",
    unit: "%",
    description:
      "Percentage of children ages 12–23 months who received the first dose of the measles vaccine.",
  },
  {
    label: "Physicians",
    value: "physicians",
    code: "SH.MED.PHYS.ZS",
    unit: "Per 1,000 people",
    description: "Number of medical doctors available for every 1,000 people.",
  },
  {
    label: "Hospital Beds",
    value: "hospitalBeds",
    code: "SH.MED.BEDS.ZS",
    unit: "Per 1,000 people",
    description: "Number of hospital beds available for every 1,000 people.",
  },
  {
    label: "Access to Clean Water",
    value: "cleanWater",
    code: "SH.H2O.BASW.ZS",
    unit: "%",
    description:
      "Percentage of the population using at least basic drinking water services.",
  },
];
