import React, { useState } from 'react';

const data = [
    {
        id: 101,
        name: 'mobile',
        price: 10000,
        qty: 25
    },
    {
        id: 102,
        name: 'laptop',
        price: 50000,
        qty: 12
    },
    {
        id: 103,
        name: 'pen',
        price: 100,
        qty: 250
    },
    {
        id: 104,
        name: 'book',
        price: 50,
        qty: 300
    }
]

function Products(props) {
    const [productData, setProductData] = useState(data);

    return (
        <div>
            <table border="1">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                {
                    productData.map((p, i) => {
                        return (
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                                <td>{p.qty}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Products;