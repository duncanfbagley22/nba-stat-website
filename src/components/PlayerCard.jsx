import React, { useState } from "react";
import { RotateCw } from "lucide-react"; // Import a flip icon
import "../css/PlayerCard.css";

const PlayerCard = ({ player_id, name, date, team, team_id, text, stats }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Parse the stats string (assuming it's a valid JSON format)
  const parsedStats = stats ? JSON.parse(stats) : [];

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      {/* Front Side */}
      <div className="card-side front">
        <div className="card-header">
          <img src={`https://www.basketball-reference.com/req/202106291/images/headshots/${player_id}.jpg`} alt="Profile" className="card-picture" />
            <div className="card-info">
                <h3 className="card-name">{name}</h3>
                <p className="card-details">{date}</p>            
                <p className="card-details">{team}</p>
            </div>
        </div>
        <hr></hr>
        <p className="card-text">{text}</p>
        <div className="card-icon">
          <RotateCw size={24} />
        </div>
        <img 
          src={`https://cdn.ssref.net/req/202412261/tlogo/bbr/${team_id}-2025.png`} 
          alt="Team Logo" 
          className="team-logo" 
        />
      </div>

      {/* Back Side */}
      <div className="card-side back">
        <div className="card-header">
          <img src={`https://www.basketball-reference.com/req/202106291/images/headshots/${player_id}.jpg`} alt="Profile" className="card-picture" />
          <div className="card-info">
                <h3 className="card-name">{name}</h3>
                <p className="card-details">{date}</p>            
                <p className="card-details">{team}</p>
            </div>
        </div>
        <table className="card-table">
          <thead>
            <tr>
              <th>Stat Name</th>
              <th>Operator</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {parsedStats.map((stat, index) => (
              <tr key={index}>
                <td>{stat.stat_name}</td>
                <td>{stat.operator}</td>
                <td>{stat.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card-icon">
          <RotateCw size={24} />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
