import React, { useState, useEffect } from "react";
import ChartContainer from "./ChartContainer";
import "../css/Charts.css";

const CHART_URLS = [
  "https://raw.githubusercontent.com/duncanfbagley22/nba-stat-website/main/json/chart1.json",
  "https://raw.githubusercontent.com/duncanfbagley22/nba-stat-website/main/json/chart2.json",
  "https://raw.githubusercontent.com/duncanfbagley22/nba-stat-website/main/json/chart3.json",
  "https://raw.githubusercontent.com/duncanfbagley22/nba-stat-website/main/json/chart4.json",
];

const ChartsGrid = () => {
  const [charts, setCharts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharts = async () => {
      try {
        const responses = await Promise.all(CHART_URLS.map(url => fetch(url)));
        const data = await Promise.all(responses.map(res => res.json()));
        setCharts(data.flat()); // Flatten in case JSONs are arrays
      } catch (err) {
        setError("Failed to load charts");
        console.error("Error fetching chart data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharts();
  }, []);

  if (loading) return <p>Loading charts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="charts-grid">
      {charts.map((chart, index) => (
        <ChartContainer 
          key={index} 
          title={chart.title} 
          chartType={chart.chartType} 
          data={chart.data} 
        />
      ))}
    </div>
  );
};

export default ChartsGrid;
