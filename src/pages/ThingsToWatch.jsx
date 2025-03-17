import React, { useState, useEffect } from "react";
import Tracker from "../components/Tracker";
import OvertimeGrid from "../components/OvertimeGrid";

const ThingsToWatch = () => {
  const [trackerOneData, setTrackerOneData] = useState(null);
  const [overtimeGridData, setOvertimeGridData] = useState(null);

  useEffect(() => {
    // Fetch trackerOneData.json
    fetch("https://raw.githubusercontent.com/duncanfbagley22/nba-stat-website/main/json/tracker_one.json")
      .then((response) => response.json())
      .then((data) => setTrackerOneData(data))
      .catch((error) => console.error("Error fetching trackerOneData:", error));

    // Fetch overtimeGridData.json
    fetch("https://raw.githubusercontent.com/duncanfbagley22/nba-stat-website/main/json/grid_one.json")
      .then((response) => response.json())
      .then((data) => setOvertimeGridData(data))
      .catch((error) => console.error("Error fetching overtimeGridData:", error));
  }, []);
  
  return (
    <div>
      <h1>Things to Watch</h1>
      <p>"What gets measured gets managed." — a well-known business phrase by Peter Drucker. While this wisdom is often applied to key metrics, the data below measures a few things that are probably not the primary focus of any team or player...</p>
      <div className="p-6">
        {trackerOneData ? <Tracker data={trackerOneData} /> : <p>Loading Tracker...</p>}
      </div>
      {overtimeGridData ? <OvertimeGrid data={overtimeGridData} /> : <p>Loading Overtime Grid...</p>}
    </div>
  );
};

export default ThingsToWatch;