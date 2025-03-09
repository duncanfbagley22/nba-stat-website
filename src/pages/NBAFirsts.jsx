import React, { useState, useEffect } from "react";
import PlayerCard from "../components/PlayerCard";
import { db } from "../other/firebase/firebase.js";
import { collection, getDocs } from 'firebase/firestore'; // Import the Firebase Firestore instance

const NBAFirsts = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch player data from Firestore when the component mounts
    const fetchPlayerData = async () => {
      const playerCollection = await getDocs(collection(db, 'player_stat_firsts'));
      const playerData = playerCollection.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlayers(playerData);
    };

    fetchPlayerData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="card-container">
      {players.map(player => (
        <PlayerCard
          key={player.id}
          player_id={player.player_id}
          name={player.player_name}
          date={player.date}
          team={player.team_name}
          team_id={player.team_id}
          text={player.text}
          stats={JSON.stringify(player.stats)} // Ensure stats are in string format for JSON.parse
        />
      ))}
    </div>
  );
};

export default NBAFirsts;
