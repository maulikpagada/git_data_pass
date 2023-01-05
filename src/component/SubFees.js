import React, { Component } from 'react';

class SubFees extends Component {

    constructor(props) {
        super(props);
        
        console.log(this.props.subcor);
    }

    render() {
        return (
            <div>
                <h2>
                    Fees: {this.props.fname === 'React' ? 'React: 30000' : "Flutter :50000" }
                </h2>
            </div>
        );
    }
}

export default SubFees;