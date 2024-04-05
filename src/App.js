import React, { useState } from 'react';
import { basic_game_roles } from './classes/Role';
import { players } from './engine/Game';
import Main from './engine/Main'
import { Outlet } from 'react-router-dom'

function App() {
  const [playersArr, setPlayersArr] = useState(players);
  let gameRoles = [...basic_game_roles]; // Create copy

  function startGame() {
    const updatedPlayersArr = playersArr.map(player => {
      const updatedPlayer = { ...player }; // Create a copy of the player object
      if (gameRoles.length > 0) {

        const indexChosen = Math.floor(Math.random() * gameRoles.length);
        const selectedRole = gameRoles[indexChosen];
        updatedPlayer.role = selectedRole;
        // Update gameRoles state by removing the selected role
        gameRoles = gameRoles.filter(role => role !== selectedRole)
      }
      return updatedPlayer;
    });

    setPlayersArr(updatedPlayersArr);
  }

  function restartGame() {
    // Reset playersArr to its initial value
    setPlayersArr(players);
    // Reset gameRoles to contain all the roles again
    gameRoles = [...basic_game_roles];
  }

  return (
    <div className="bg-gradient-to-b from-indigo-800 to-blue-950 min-h-full">
      {/* <button onClick={startGame}>Start Game</button>
      <button onClick={restartGame}>Restart Game</button>
      <ul className="list-none">
        {playersArr.map((player, index) => (
          <li key={index}>
            {player.name} - {player.role ? player.role.name : 'Role Not Defined'}
          </li>
        ))}
      </ul> */}
      <Outlet />
    </div>
  );
}

export default App;
