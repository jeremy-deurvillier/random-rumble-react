import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateWinner, capacities, hitBack, hitMonster, nextTurn } from '../reducers/fight';

const ButtonCapacity = ({ player, type }) => {
    const turnList = useSelector(state => state.fight.gameTurn)
    const deadsList = useSelector(state => state.fight.deads)
    const endGame = useSelector(state => state.fight.winner)
    const capacityList = capacities
    const needMana = player.mana < capacityList[type].mana
    const backgroundButton = needMana ? 'btn-primary' : 'btn-success'
    const style = 'btn ' + backgroundButton + ' material-tooltip-main m-1'
    const isDisabled = turnList.includes(player.id) || player.pv <= 0 || deadsList.includes(player.id) || needMana || endGame !== ''
    const dispatch = useDispatch()

    const combat = () => {
        console.log('aie !')

        dispatch(hitMonster({
            id: player.id,
            data: type
        }))

        dispatch(hitBack({
            id: player.id,
            data: type
        }))

        dispatch(nextTurn())

        dispatch(calculateWinner())
    }

    return (
        <button type="button" onClick={() => combat()} className={ style } disabled={ isDisabled }>
            {type}
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
        </button>
    )

}

export default ButtonCapacity;