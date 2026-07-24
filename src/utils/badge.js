export const getNewsBadge = (title = "") => {
  const text = title.toLowerCase();

  const badgeRules = [
    {
      badge: "Outbreak",
      keywords: ["outbreak", "epidemic", "pandemic", "cluster"],
    },
    {
      badge: "Vaccine",
      keywords: ["vaccine", "vaccination", "immunization", "booster"],
    },
    {
      badge: "WHO",
      keywords: ["who", "world health organization"],
    },
    {
      badge: "CDC",
      keywords: ["cdc", "centers for disease control"],
    },
    {
      badge: "Research",
      keywords: [
        "research",
        "study",
        "trial",
        "scientists",
        "discovery",
        "journal",
      ],
    },
    {
      badge: "Laboratory",
      keywords: [
        "laboratory",
        "lab",
        "diagnosis",
        "diagnostic",
        "testing",
        "specimen",
      ],
    },
    {
      badge: "Pathology",
      keywords: [
        "cell",
        "cells",
        "tissue",
        "organ",
        "cancer",
        "tumor",
        "tumour",
        "biopsy",
      ],
    },
    {
      badge: "Heart",
      keywords: [
        "heart",
        "cardiac",
        "cardiovascular",
        "stroke",
        "hypertension",
      ],
    },
    {
      badge: "Infectious Disease",
      keywords: [
        "virus",
        "viral",
        "bacteria",
        "bacterial",
        "fungal",
        "parasite",
        "malaria",
        "cholera",
        "tuberculosis",
        "tb",
        "measles",
        "mpox",
        "ebola",
        "covid",
        "influenza",
        "flu",
        "hiv",
      ],
    },
    {
      badge: "Medicine",
      keywords: ["drug", "medicine", "therapy", "treatment", "antibiotic"],
    },
    {
      badge: "Public Health",
      keywords: [
        "health",
        "care",
        "hospital",
        "community",
        "policy",
        "prevention",
        "screening",
      ],
    },
  ];

  const match = badgeRules.find((rule) =>
    rule.keywords.some((keyword) => text.includes(keyword)),
  );

  return match?.badge ?? "Health";
};
