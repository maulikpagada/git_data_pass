import React, { Component } from 'react';

const Time = {
    textAlign:'center',
    fontSize: '25px',
}

const Time1 = {
    color: 'black'
}

class CounterClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        if (this.state.count < 5) {
            this.setState({ count: this.state.count + 1 });
        }
    };

    handleDecrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        }
    };

    render() {
        return (
            <div style={Time}>
                <h1 style={Time1}>{this.state.count}</h1>
                <button onClick={this.handleIncrement}> + </button>
                <button onClick={this.handleDecrement}> - </button>
            </div>
        );
    }
}

export default CounterClass;