import React, { Component } from 'react';

const Employee1 = [
    {
        id: 101,
        name: 'maulik',
        age: 18,
        salary: {
            basicsalary: 50000,
            hrl: 60000,
        }
    },

    {
        id: 102,
        name: 'zeel',
        age: 15,
        salary: {
            basicsalary: 70000,
            hrl: 80000,
        }
    }
]

class EmployeeClass extends Component {

    constructor(props) {
        super(props);

        this.state = { employeeData: Employee1 }

    }

    render() {
        return (
            <div>
                <table border={5}>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                    </tr>

                    {
                        Employee1.map((a, i) => {
                            return(
                                <>
                                    <tr>
                                        <th>{a.id}</th>
                                        <th>{a.name}</th>
                                        <th>{a.age}</th>
                                        <th><span>{a.salary.basicsalary}</span>, <span>{a.salary.hrl}</span></th>
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

export default EmployeeClass;