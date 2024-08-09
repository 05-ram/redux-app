import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmnt, setIncrementAmnt] = useState(0);
    const addValue = Number(incrementAmnt) || 0;
    const resetAll = () => {
        setIncrementAmnt(0);
        dispatch(reset());
    }
    return (
        <section>
            <p className='txt'>{count}</p>
            <div className='d-flex g-20 jc mt-2'>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <div className="mt-2">
                <input type="text" value={incrementAmnt} onChange={(e) => setIncrementAmnt(e.target.value)} />
            </div>
            <div className="d-flex g-20 jc mt-2">
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}

export default Counter;