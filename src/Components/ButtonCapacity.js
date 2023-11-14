import React from 'react';
import { useDispatch } from 'react-redux';
import { hit } from '../reducers/fight';

const ButtonCapacity = () => {
    const dispatch = useDispatch();

    const combat = () => {
        console.log('aie !')
        dispatch(hit(5))
    }

    return (
        <button type="button" onClick={() => combat()} className="btn btn-success material-tooltip-main ">
            hit
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
        </button>
    )

}

export default ButtonCapacity;