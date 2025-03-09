import React from "react";
import Tracker from "../components/Tracker";
import trackerOneData from "../other/trackerOneData.json"; // Example JSON file
import overtimeGridData from "../other/overtimeGridData.json"; // Example JSON file
import OvertimeGrid from "../components/OvertimeGrid";

const ThingsToWatch = () => {
  return (
    <div>
      <h1>Things to Watch</h1>
      <p>Information and text.</p>
      <div className="p-6">
      <Tracker data={trackerOneData} />
      </div>
      <OvertimeGrid data={overtimeGridData} />
    </div>
  );
};

export default ThingsToWatch;