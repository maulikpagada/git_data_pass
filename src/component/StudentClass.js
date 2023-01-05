import React, { useState } from 'react';

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

function StudentClass(props) {

    const [StudentName, setStudentName] = useState(student);

    return (
        <div>
            <table border={5}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Cources</th>
                </tr>

                {
                    StudentName.map((a, i) => {
                        return (
                            <>
                            <tr>
                                <th>{a.id}</th>
                                <th>{a.name}</th>
                                <th>{a.age}</th>
                                <th>{a.cources.map((a1, i1) => {
                                    return (
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

export default StudentClass;