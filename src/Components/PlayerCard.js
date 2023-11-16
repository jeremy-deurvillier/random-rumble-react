import React from 'react';
import ButtonCapacity from './ButtonCapacity';
import ProgressBar from './ProgressBar';

const PlayerCard = ({ player }) => {
    const status = player.pv > 0 ? 'card-title' : 'card-title text-decoration-line-through'

    return (
        <div key={player.id} className="col-sm-3 card center" id={`joueur${player.id}`}>

            <div className="card-body text-center">
                <h5 className={ status }>{player.name}</h5>
                <ProgressBar pv={player.pv} pvMax={player.pvMax} faType='fa-heart' barName=' : pv ' bgType='bg-danger' />
                <ProgressBar pv={player.mana} pvMax={player.manaMax} faType='fa-fire-alt' barName=' : mana ' />

                <span className="badge badge-danger ml-2 " id="degatSpanJ1"></span>
                <div className="row my-3">
                    <div >
                        <ButtonCapacity player={player} type='ATK' />
                        <ButtonCapacity player={player} type='SATK' />
                        <ButtonCapacity player={player} type='DEF' />
                        <ButtonCapacity player={player} type='CURE' />

                    </div>
                </div >
            </div >

        </div >
    )
}


export default PlayerCard;