import ChartContainer from "./ChartContainer";
import "../css/Charts.css";
import chartOneData from "../other/chartOneData.json"; // Import the JSON file
import chartTwoData from "../other/chartTwoData.json"; // Import the JSON file
import chartThreeData from "../other/chartThreeData.json"; // Import the JSON file
import chartFourData from "../other/chartFourData.json"; // Import the JSON file

const ChartsGrid = () => {

  const charts = [...chartOneData, ...chartTwoData, ...chartThreeData, ...chartFourData];

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
