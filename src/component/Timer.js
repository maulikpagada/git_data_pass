import React, { Component } from 'react';

const heading = {
    fontSize: '50px',
    color:'white',
    backgroundColor: 'cornsilk',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    border:'2px solid burlywood',
    width:'250px',
    height:'auto',
    textAlign:'center',
    borderRadius:'15px',
    margin:'40vh auto 0px auto',
    padding:'10px 0',
    color: 'sandybrown'
}   

class Timer extends Component {
    constructor(props) {                    //  1
        super(props);

        this.state = {
            time: new Date()
        }
    }

    tick = () => {                          //  4
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {             //  3
        this.timeRef = setInterval(this.tick, 1000)
    }

    componentDidUpdate = (prevProps, prevState) => {    //  6
        if (this.prevState !== this.state.time) {
            console.log("componentDidUpdate is called");
        }
    }

    componentWillUnmount = () => {          //  7
        clearInterval(this.timeRef)
        console.log("componentWillUnmount is called");
    }

    render() {      //  2   5
        return (
            <div>
                <h1 style={heading}>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

export default Timer;