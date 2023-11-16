import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import { useSelector } from 'react-redux';

const App = () => {
  const winner = useSelector(state => state.fight.winner)

  return (
    <div className="App">
      <Monster />
      <br></br>
      <section className="container-fluid">
        <PlayerList />
      </section >
      {winner !== '' && <p className='text-primary m-3'>{ winner }</p>}
    </div>
  )
}

export default App;