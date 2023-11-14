import React from 'react';
import PlayerCard from './PlayerCard';


const PlayerList = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     players: {
  //       1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
  //       2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
  //       3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
  //       4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
  //     }
  //   }
  // }

  const state = {
    players: {
      1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
      2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
      3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
      4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
    }
  }

  const displayPlayers = () => {
      return Object.keys(state.players).map(key => (
        <PlayerCard key={state.players[key].id} player={state.players[key]} />
      ));
    }

  return(
    <div className = 'row' >
        { displayPlayers() }
    </div >
  );
}

export default PlayerList;