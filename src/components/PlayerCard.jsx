import React, { useState } from "react";
import "../css/PlayerCard.css";

const PlayerCard = ({ player_id, name, date, team, team_id, text, stats }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const teamColors = {
    "ATL": ["#E03A3E", "#FDB927", "#F4EBD0"], // Atlanta Hawks (Cream for retro contrast)
    "BOS": ["#007A33", "#BA9653", "#EDE0C8"], // Boston Celtics (Muted gold and warm off-white)
    "BKN": ["#000000", "#FFFFFF", "#F4EBD0"], // Brooklyn Nets (Off-white for vintage style)
    "CHA": ["#1D1160", "#00788C", "#F4EBD0"], // Charlotte Hornets (Cream retro touch)
    "CHI": ["#CE1141", "#000000", "#F2D0A7"], // Chicago Bulls (Muted tan for vintage warmth)
    "CLE": ["#860038", "#FDBB30", "#F4EBD0"], // Cleveland Cavaliers (Off-white for contrast)
    "DAL": ["#00538C", "#B8C2C8", "#F2D0A7"], // Dallas Mavericks (Warm cream for contrast)
    "DEN": ["#0E2240", "#FEC524", "#F4EBD0"], // Denver Nuggets (Muted cream for retro vibes)
    "DET": ["#C8102E", "#1D42BA", "#F2D0A7"], // Detroit Pistons (Tan for vintage warmth)
    "GSW": ["#1D428A", "#FFC72C", "#F4EBD0"], // Golden State Warriors (Muted gold and cream)
    "HOU": ["#CE1141", "#C4CED4", "#F2D0A7"], // Houston Rockets (Muted red and warm cream)
    "IND": ["#002D62", "#FDBB30", "#F4EBD0"], // Indiana Pacers (Gold and cream for vintage effect)
    "LAC": ["#1D42BA", "#C8102E", "#F4EBD0"], // LA Clippers (Retro contrast with cream)
    "LAL": ["#552583", "#FDB927", "#F4EBD0"], // Los Angeles Lakers (Gold & vintage cream)
    "MEM": ["#5D76A9", "#12173F", "#F2D0A7"], // Memphis Grizzlies (Muted blue and warm tan)
    "MIA": ["#98002E", "#F9A01B", "#F4EBD0"], // Miami Heat (Deep red, gold, and warm cream)
    "MIL": ["#00471B", "#EEE1C6", "#E2B887"], // Milwaukee Bucks (Muted forest green and tan)
    "MIN": ["#0C2340", "#78BE20", "#F2D0A7"], // Minnesota Timberwolves (Muted navy and cream)
    "NOP": ["#0C2340", "#C8102E", "#F4EBD0"], // New Orleans Pelicans (Muted red and vintage cream)
    "NYK": ["#006BB6", "#F58426", "#F2D0A7"], // New York Knicks (Retro orange and warm tan)
    "OKC": ["#007AC1", "#EF3340", "#F4EBD0"], // Oklahoma City Thunder (Muted blue and off-white)
    "ORL": ["#0077C0", "#C4CED4", "#F2D0A7"], // Orlando Magic (Muted cyan and cream)
    "PHI": ["#006BB6", "#ED174C", "#F2D0A7"], // Philadelphia 76ers (Retro blue and warm tan)
    "PHX": ["#1D1160", "#E56020", "#F4EBD0"], // Phoenix Suns (Muted orange and cream)
    "POR": ["#E03A3E", "#000000", "#F2D0A7"], // Portland Trail Blazers (Deep red, black, and warm cream)
    "SAC": ["#5A2D82", "#63727A", "#F4EBD0"], // Sacramento Kings (Muted purple and vintage cream)
    "SAS": ["#000000", "#C4CED4", "#F2D0A7"], // San Antonio Spurs (Retro silver and warm tan)
    "TOR": ["#CE1141", "#000000", "#F2D0A7"], // Toronto Raptors (Deep red and warm cream)
    "UTA": ["#002B5C", "#00471B", "#F4EBD0"], // Utah Jazz (Vintage navy and cream)
    "WAS": ["#002B5C", "#E31837", "#F4EBD0"]  // Washington Wizards (Deep red, navy, and cream)
};
  const teamColorsArray = teamColors[team_id] || ["#D1D1D1", "#D1D1D1"]; // Default colors if team_id not found


  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const statNameMapping = {
    "pts": "Points",
    "orb": "Offensive Rebounds",
    "drb": "Defensive Rebounds",
    "trb": "Total Rebounds",
    "ast": "Assists",
    "stl": "Steals",
    "tov": "Turnovers",
    "pf": "Personal Fouls",
    "blk": "Blocks",
    "mp": "Minutes Played",
    "fg": "Field Goals Made",
    "fga": "Field Goals Attempted",
    "fg3a": "3-Point Attempts",
    "fg3": "3-Point Made",
    "ft": "Free Throws Made",
    "fta": "Free Throws Attempted",
    "efg_pct": "Effective Field Goal Percentage",
    "ts_pct": "True Shooting Percentage",
    "fg_pct": "Field Goal Percentage",
    "fg3_pct": "3-Point Percentage",
    "ft_pct": "Free Throw Percentage",
    "venue": "Venue",
    "game_location": "Location",
    "team_id": "Team",
    "first_name": "First Name",
    "last_name": "Last Name",
    "birth_month": "Birth Month",
    "birth_date": "Birth Date",
    "birth_city": "Birth City",
    "birth_state": "Birth State",
    "birth_country": "Birth Country",
    "draft_round": "Draft Round",
    "draft_year": "Draft Year",
    "dominant_hand": "Dominant Hand",
    "game_month": "Game Month",
    "game_date": "Game Date",
    "game_day_of_week": "Game Day of Week",
    "player_home_away": "Home/Away",
    "double_double": "Double-Double",
    "triple_double": "Triple-Double",
    "opp_team_id": "Opponent"
  };

  const formatStatValue = (operator, value, statName) => {
    // Remove single quotes from strings
    if (typeof value === "string") {
      value = value.replace(/'/g, "");
    }
  
    // Convert decimal to percentage for specified stats
    if (percentageStats.includes(statName)) {
      value = `${(value * 100).toFixed(1)}%`; // Convert and keep 1 decimal place
    }
  
    return operator === "=" ? value : `${operator} ${value}`;
  };

  const percentageStats = ["ft_pct", "efg_pct", "fg_pct", "fg3_pct", "ts_pct"];

  // Parse the stats string (assuming it's a valid JSON format)
  const parsedStats = stats ? JSON.parse(stats) : [];
  const formatDate = (dateString) => {
    console.log(dateString);
    const date = new Date(dateString.replace(/-/g, '/')); // Convert MM-DD-YYYY to MM/DD/YYYY
    console.log(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      {/* Front Side */}
      <div className="card-side front" style={{ background: `${teamColorsArray[0]}`, color: teamColorsArray[0] }}>        
        <div className="card-name" style={{color: teamColorsArray[2]}}>{name}</div>
        <div className="card-box" style={{ boxShadow: `5px 3px 0px 0px ${teamColorsArray[1]}` }}>
          <img src={`https://www.basketball-reference.com/req/202106291/images/headshots/${player_id}.jpg`} alt="Profile" className="card-picture" />
          <div className="card-info">
              <p className="card-details">{formatDate(date)}</p>            
              <p className="card-text">{text}</p>
          </div>
        </div>
        <div className="card-team" style={{color: teamColorsArray[2]}}>{team}</div>
        <img 
          src={`https://cdn.ssref.net/req/202412261/tlogo/bbr/${team_id}-2025.png`} 
          alt="Team Logo" 
          className="team-logo" 
          style={{ boxShadow: `5px 5px 0px 0px ${teamColorsArray[1]}` }}
        />
      </div>

      {/* Back Side */}
      <div className="card-side back" style={{ background: `${teamColorsArray[0]}`, color: teamColorsArray[0] }}>
        <div className="card-box back" style={{ boxShadow: `5px 3px 0px 0px ${teamColorsArray[1]}` }}>
          <img src={`https://www.basketball-reference.com/req/202106291/images/headshots/${player_id}.jpg`} alt="Profile" className="card-picture back" />
          <div className="card-info back">
                <h3 className="card-name back">{name}</h3>
                <p className="card-details back">{date}</p>            
                <p className="card-details back">{team}</p>
            </div>
        </div>
        <table className="card-table vintage-boxscore" style={{ boxShadow: `5px 3px 0px 0px ${teamColorsArray[1]}` }}>
  <thead>
    <tr>
      <th>Stat</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    {parsedStats.map((stat, index) => (
      <tr key={index}>
        <td>{statNameMapping[stat.stat_name] || stat.stat_name}</td>
        <td>{formatStatValue(stat.operator, stat.value, stat.stat_name)}</td>
      </tr>
    ))}
  </tbody>
</table>;
      </div>
    </div>
  );
};

export default PlayerCard;
