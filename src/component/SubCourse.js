import React, { Component } from 'react';
import Fees from './Fees';

class SubCourse extends Component {

    constructor(props) {
        super(props);


    }

    changecourse = () => {
        this.setState({
            CourseName: 'Flutter'
        })
    }

    render() {
        return (
            <div>
                {
                    this.props.CorName === 'React' ?
                        <>
                            <span>Core Js</span>
                            <Fees subcor={'Core Js'} />
                            <span>Core React</span>
                            <Fees subcor={'Core React'} />
                        </>
                        :
                        <>
                            <span>Advanced Js</span>
                            <Fees subcor={'Advanced Js'} />
                            <span>Core Node</span>
                            <Fees subcor={'Core Node'} />
                        </>
                }
            </div>
        );
    }
}

export default SubCourse;