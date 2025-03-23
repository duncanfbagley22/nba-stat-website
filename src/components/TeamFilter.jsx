import React from 'react';
import "../css/TeamFilter.css";

const TeamFilter = ({ selectedTeam, handleChange }) => {
  const teams = [
    "ATL", "CHA", "ORL", "WAS", "MIA",
    "BOS", "NYK", "PHI", "TOR", "BKN",
    "CHI", "CLE", "DET", "IND", "MIL",
    "DAL", "SAS", "HOU", "MEM", "NOP", 
    "DEN", "OKC", "MIN", "POR", "UTA", 
    "GSW", "LAC", "LAL", "PHX", "SAC"
  ];

  return (
    <div className="team-filter-container">
      <label className="team-filter-label" htmlFor="team-select">Filter by Team:</label>
      <select 
        id="team-select"
        className="team-filter-dropdown"
        value={selectedTeam} 
        onChange={handleChange}
      >
        <option value="">All Teams</option>
        {teams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TeamFilter;
