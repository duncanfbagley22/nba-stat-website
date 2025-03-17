import React, { useState, useEffect } from "react";
import "../css/OvertimeGrid.css";

const OvertimeGrid = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/duncanfbagley22/nba-stat-website/main/json/grid_one.json")
      .then(response => response.json())
      .then(data => setTeams(data.teams))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const teamIds = teams.map(team => team.team_id);

  return (
    <div className="overtime-grid">
      <div className="overtime-wrapper">
        <h2 className="overtime-title">Double Overtime (or more) Matchups</h2>
        <div className="grid-container">
          {/* Top Header Row */}
          <div className="grid-header">
            <div className="grid-corner"></div> {/* Empty top-left corner */}
            {teamIds.map(team => (
              <div key={team} className="grid-header-cell">{team}</div>
            ))}
          </div>

          {/* Grid Rows */}
          {teams.map((team) => (
            <div key={team.team_id} className="grid-row">
              {/* Left Side Header */}
              <div className="grid-header-cell">{team.team_id}</div>
              {teamIds.map((col) => {
                const value = team[col]; // Get matchup value
                return (
                  <div
                    key={col}
                    className="grid-cell"
                    style={{
                      backgroundColor: value === 9 ? "#000" : value === 1 ? "green" : "#faf6e9", // Updated colors
                    }}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OvertimeGrid;
