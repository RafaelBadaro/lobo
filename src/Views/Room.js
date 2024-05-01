import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { basic_game_roles } from '../classes/Role';
import { players } from '../engine/Game';
import { Player } from '../classes/Player'

function Room() {
  const location = useLocation()
  const navigate = useNavigate()
  let type = "empty"
  let name = "empty"
  const [roomCode, setRoomCode] = useState("empty");
  const [playerInThisSession, setPlayerInThisSession] = useState(new Player("empty", null, "empty"));
  useEffect(() => {
    if (location.state != null) {
      setRoomCode(location.state.code)
      type = location.state.type
      name = location.state.name.nameFromModal

      setPlayerInThisSession(new Player(name, null, type))

    } else {
      // TODO lancar alguma exception/erro/ voltar pra pagina inicial
      navigate("/")
    }
  }, []);

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
    <>
      <h2>ROOM CODE: {roomCode} </h2>
      <h2>Olá: {playerInThisSession.name}</h2>
      <button onClick={startGame}>Start Game</button>
      <button onClick={restartGame}>Restart Game</button>
      <ul class="list-none">
        {playersArr.map((player, index) => (
          <li key={index}>
            {player.name} - {player.role ? player.role.name : 'Role Not Defined'}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Room;

