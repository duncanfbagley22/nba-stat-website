import React, { useState, useEffect } from "react";
import data from "../other/overtimeGridData.json";
import "../css/OvertimeGrid.css";

const overtimeGrid = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(data.teams);
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
          {teams.map((team, rowIndex) => (
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
                      backgroundColor: value === 9 ? "black" : value === 1 ? "green" : "white",
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

export default overtimeGrid;
