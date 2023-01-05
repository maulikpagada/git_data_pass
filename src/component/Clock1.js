import React, { Component, useState } from 'react';
import './Clock1.css';

const Clock1 = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime,setCurrentTime] = useState(time);


    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime,1000);

    return(
        <div className="clock1">
            <h1>{currentTime}</h1>
        </div>
    )
}

export default Clock1;