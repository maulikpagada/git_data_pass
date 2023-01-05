import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {    //1
        super(props);
        
        this.state = {
            time: new Date()
        }
    }

    tick = () => {                  // 4
        this.setState({
            time: new Date()
        })
    }
    
    componentDidMount = () => {         // 3
        this.timeRef = setInterval(this.tick,1000);
    }

    componentDidUpdate = (prevProps, prevState) => {    // 6
        if (prevState.time !== this.state.time) {   
            console.log("componentDidUpdate is called");
        }
    } 

    componentWillUnmount = () => {      // 7
        clearInterval(this.timeRef);
        console.log("componentWillUnmount is called");
    }

    render() {  // 2  5
        return (
            <div>
                {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default Clock;