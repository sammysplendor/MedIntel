import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TrendChart = ({
  records,
  indicatorOptions,
  countryName,
  hasSelection,
}) => {
  const chartData = [...records]
    .filter((record) => record.value !== null)
    .sort((a, b) => Number(a.date) - Number(b.date))
    .map((record) => ({
      year: record.date,
      value: record.value,
    }));

  return (
    <section>
      <div>
        <h2>{indicatorOptions.label} Trend</h2>
        <p>Historical trend for {countryName || "the selected country"}</p>
      </div>

      <div className="p-8">
        {hasSelection ? (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <CartesianGrid />

              <XAxis dataKey="year" />

              <YAxis />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  borderColor: "#334155",
                  borderRadius: "0.5rem",
                  color: "#fff",
                }}
                formatter={(value, name) => {
                  const numericValue = Number(value);

                  if (indicatorOptions.unit === "People") {
                    return [numericValue.toLocaleString(), name];
                  }

                  if (indicatorOptions.unit === "%") {
                    return [`${numericValue.toFixed(1)}%`, name];
                  }

                  return [
                    `${numericValue.toFixed(1)} ${indicatorOptions.unit}`,
                    name,
                  ];
                }}
              />

              <Line type="monotone" dataKey="value" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex flex-col gap-4 justify-center items-center bg-surface rounded-2xl py-8 w-2/4 mx-auto">
            <h2>No data</h2>
            <p>Select an indicator and a country to see the trend</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrendChart;
