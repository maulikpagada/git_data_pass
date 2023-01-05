import React, { useState } from 'react';

const Employee1 = [
    {
        id:101,
        name:'maulik',
        age:18,
        salary: {
            basicsalary: 10000,
            hrl: 20000,
        }
    },

    {
        id:102,
        name:'zeel',
        age:15,
        salary: {
            basicsalary: 30000,
            hrl: 40000,
        }  
    }
]

function Employee(props) {

    const [EmployeeName , setEmployeeName] = useState(Employee1);

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
                    Employee1.map((a,i) => {
                        return(
                            <>
                                <tr>
                                    <th>{a.id}</th>
                                    <th>{a.name}</th>
                                    <th>{a.age}</th>
                                    <th><span>{a.salary.basicsalary}</span>,<span>{a.salary.hrl}</span></th>
                                </tr>
                            </>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Employee;