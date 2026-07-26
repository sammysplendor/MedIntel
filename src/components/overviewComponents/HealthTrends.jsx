import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import useGlobalHealthTrends from "../../hooks/useGlobalHealthTrends";

const HealthTrends = () => {
  const { data, loading, setSelectedYears } = useGlobalHealthTrends();

  const handleSelect = (event) => {
    setSelectedYears(Number(event.target.value));
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex w-full justify-between">
        <div>
          <h3>Global Health Trends</h3>
          <p>Monitor long-term changes in key global health indicators.</p>
        </div>
        <select
          onChange={handleSelect}
          name="filter"
          className="p-4 rounded-button bg-surface hover:bg-surface-hover duration-300 cursor-pointer focus:outline-none"
        >
          <option value={10}>Last 10 Years</option>
          <option value={15}>Last 15 Years</option>
          <option value={20}>Last 20 Years</option>
          <option value={25}>Last 25 Years</option>
        </select>
      </div>

      {/* ===== RECHARTS MULTI-LINE CHART ===== */}
      <div className="w-full my-6 h-80">
        {loading ? (
          <div>Loading Global Health Trends...</div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#64748b"
                vertical={false}
              />
              <XAxis
                dataKey="year"
                stroke="#64748b"
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                tickLine={false}
              />
              <YAxis
                stroke="#64748b"
                tick={{ fill: "#64748b", fontSize: 12 }}
                tickLine={false}
                domain={["auto", "auto"]}
              />

              <Legend />

              {/* RENDER ALL 3 LINES */}
              <Line
                dataKey="lifeExpectancy"
                stroke="#22c55e"
                name="Life Expectancy"
                connectNulls={true}
              />

              <Line
                dataKey="healthExpenditure"
                stroke="#3b82f6"
                name="Health Expenditure"
                connectNulls={true}
              />

              <Line
                dataKey="infantMortality"
                stroke="#a855f7"
                name="Infant Mortality"
                connectNulls={true}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  borderColor: "#334155",
                  borderRadius: "0.5rem",
                  color: "#fff",
                }}
                formatter={(value, name) => {
                  if (name === "Life Expectancy")
                    return [`${Number(value).toFixed(1)} years`, name];

                  if (name === "Health Expenditure")
                    return [`${Number(value).toFixed(1)}% of GDP`, name];

                  if (name === "Infant Mortality")
                    return [
                      `${Number(value).toFixed(1)} per 1,000 births`,
                      name,
                    ];

                  return [value, name];
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
};

export default HealthTrends;
