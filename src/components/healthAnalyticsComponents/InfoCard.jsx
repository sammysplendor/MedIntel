const InfoCard = ({ indicator, latestRecord, loading, countryName }) => {
  const hasValue =
    latestRecord?.value !== null && latestRecord?.value !== undefined;
  const formattedValue = hasValue
    ? latestRecord?.value?.toLocaleString()
    : "N/A";

  const latestYear = latestRecord?.date || "N/A";

  return (
    <section className="flex flex-col gap-12 bg-surface rounded-card border-border py-8 px-10">
      <div>
        <h2>{indicator.label || "Select an Indicator"}</h2>
        <p>{indicator.description || ""}</p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-6">
          <p>Latest Value:</p>
          <h3>{loading ? "..." : formattedValue}</h3>
        </div>

        <div className="flex flex-col gap-6">
          <p>Latest Year:</p>
          <h3>{loading ? "..." : latestYear}</h3>
        </div>

        <div className="flex flex-col gap-6">
          <p>Country:</p>
          <h3>{countryName || "Select a Country"}</h3>
        </div>
      </div>
    </section>
  );
};

export default InfoCard;
