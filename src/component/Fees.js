import React, { Component } from 'react';

class Fees extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div>
                {
                    this.props.subcor === 'Core Js' ? '10000' :
                        this.props.subcor === 'Core React' ? '20000' :
                            this.props.subcor === 'Advanced Js' ? '15000' :
                                '25000'
                }
            </div>
        );
    }
}

export default Fees;