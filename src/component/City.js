import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);

        console.log(this.props.cname);

    }

    render() {
        return (
            <div>
                <h2>
                    City: {this.props.cname === 'India' ? 'Surat' : 'New York'}
                </h2>
            </div>
        );
    }
}

export default City;