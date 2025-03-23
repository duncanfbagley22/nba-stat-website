import React, { useState } from "react";
import "../css/Tracker.css"; // Import CSS file

const Tracker = ({ data }) => {
  const [hover, setHover] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const maxTripleDoubles = 150; // Max target (adjustable)
  const progress = Math.min((data[0].triple_double_count / maxTripleDoubles) * 100, 100);

  const handleMouseMove = (event) => {
    setTooltipPos({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="tracker-container">
      <h2 className="tracker-title">Triple-Double Tracker ({data[0].season})</h2>

      <div
        className="progress-bar"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Progress Fill */}
        <div className="progress-fill" style={{ width: `${progress}%` }}>
          <span className="progress-text">{data[0].triple_double_count}</span>
        </div>
      </div>

      {/* Target Display */}
      <div className="target-text">Goal: {maxTripleDoubles}</div>

      {/* Tooltip that follows cursor */}
      {hover && (
        <div className="tooltip" style={{ top: tooltipPos.y + 15, left: tooltipPos.x + 15 }}>
          <div>Most Recent: {data[0].max_game_date}</div>
          <div>Player: {data[0].name}</div>
        </div>
      )}
    </div>
  );
};

export default Tracker;
