import React, { useState } from 'react';

function CounterFun() {
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 5) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    return (
        <>
            <button  type="button" onClick={decNum}>-</button>
            {num}
            <button  type="button" onClick={incNum}>+</button>
        </>
    );
}

export default CounterFun;