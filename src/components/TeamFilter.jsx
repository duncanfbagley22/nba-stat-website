import React from 'react';

const TeamFilter = ({ selectedTeam, handleChange }) => {
  const teams = ["ATL", "CHA", "ORL", "WAS", "MIA",
    "BOS", "NYK", "PHI", "TOR", "BKN",
    "CHI", "CLE", "DET", "IND", "MIL",
    "DAL", "SAS", "HOU", "MEM", "NOP", 
    "DEN", "OKC", "MIN", "POR", "UTA", 
    "GSW", "LAC", "LAL", "PHX", "SAC"
  ];

  return (
    <select value={selectedTeam} onChange={handleChange}>
      <option value="">All Teams</option>
      {teams.map((team) => (
        <option key={team} value={team}>
          {team}
        </option>
      ))}
    </select>
  );
};

export default TeamFilter;