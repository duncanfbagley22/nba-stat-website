import React, { useState, useEffect } from "react";
import ChartGrid from "../components/ChartGrid";
import "../css/Interesting.css";

const Interesting = () => {
  const [charts, setCharts] = useState([]);
  return (
    <div>
      <h1>Useless... But Interesting</h1>
      <p>Billy Beane said "the numbers tell you everything"... which is true, but in some cases they can tell us things that really don't matter. Below are some interesting NBA charts. They don't provide any important takeaways, but they're kind of interesting</p>
      <ChartGrid />
    </div>
  );
};

export default Interesting;
