import React, { useEffect, useState } from 'react';

function ClockFun(props) {

    const [time , setTime] = useState(new Date());      //1 Constructor

    const tick = () => {
        setTime(new Date())
    }

    useEffect (() => {
        //3 ComponentDidMount        // ComponentDidUpdate
        setInterval(tick, 1000);

        return () => {
            //5 ComponentWillUnmount
            console.log("ComponentWillUnmount");
        }
    } ,[])

    //2 Render  //4
    return (
        <div>
          {time.toLocaleTimeString()}  
        </div>
    );
}

export default ClockFun;