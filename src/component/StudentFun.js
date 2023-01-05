import React, { Component } from 'react';

const student = [
    {
        id: 101,
        name: "maulik",
        age: 18,
        cources: [
            "C",
            "C++",
            "html"
        ],
    },
    {  
        id: 102,
        name: "zeel",
        age: 15,
        cources: [
            "Css",
            "pyton",
            "react"
        ]
    }
]

class StudentFun extends Component {

    constructor(props) {
        super(props);
        
        this.state = {productData: student}
    }
    
    render() {
        return (
            <div>
                <table border={10}>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>cources</th>
                    </tr>

                    {
                        student.map((a,i) => {
                            return(
                                <>
                                    <tr>
                                        <th>{a.id}</th>
                                        <th>{a.name}</th>
                                        <th>{a.age}</th>
                                        <th>{a.cources.map((a1,i1) => {
                                            return(
                                                <>
                                                    {a1}
                                                </>
                                            )
                                        })}</th>
                                    </tr>
                                </>
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}

export default StudentFun;