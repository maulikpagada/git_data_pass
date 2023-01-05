import React, { Component } from 'react';
import Fees from './Fees';
import SubCourse from './SubCourse';

class Cources extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            CourseName: 'React'
        }
    }

    changecourse = () => {
        this.setState({
            CourseName: 'Node'
        })
    }
    
    render() {
        return (
            <div>
                <h2>Course:{this.state.CourseName}</h2>

                <SubCourse CorName = {this.state.CourseName}/>

                <button onClick={this.changecourse}>changecourse</button>
            </div>
        );
    }
}

export default Cources;