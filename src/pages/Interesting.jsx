import React, { useState, useEffect } from "react";
import ChartGrid from "../components/ChartGrid";

const Interesting = () => {
  const [charts, setCharts] = useState([]);
  return (
    <div>
      <h1>Information</h1>
      <p>Information and text.</p>
      <ChartGrid />
    </div>
  );
};

export default Interesting;
