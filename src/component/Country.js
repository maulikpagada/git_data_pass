import React, { Component } from 'react';
import City from './City';

//inheritance
class Country extends Component {  

    // state: it is an object to store basic information of compoent
    constructor(props) {
        super(props);
        
        this.state = {
            CountryName: 'India'   
        }
    }

    changeCountry = () => {
        this.setState({
            CountryName: 'Us'
        })
    }

    render() {
        return (
           <div>
            <h2>Country:{this.state.CountryName}</h2>

            <City cname={this.state.CountryName} />

            <button onClick={this.changeCountry}>changeCountry</button>

           </div>
        );
    }
}

export default Country;