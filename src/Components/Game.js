import React from 'react';
import './Game.css';
import Monster from './Monster';
import PlayerList from './PlayerList';
import { useSelector } from 'react-redux';

const App = () => {
  const winner = useSelector(state => state.fight.winner)
  const defineStyle = winner === 'Victoire !' ? 'bg-info bg-gradient' : 'bg-secondary bg-gradient'
  const style = defineStyle + ' text-white fs-2 m-3 p-3'

  return (
    <div className="App">
      <Monster />
      <br></br>
      <section className="container-fluid">
        <PlayerList />
      </section >
      {winner !== '' && <p className={ style }>{ winner }</p>}
    </div>
  )
}

export default App;