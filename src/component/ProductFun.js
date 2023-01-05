import React, { Component } from 'react';

const data = [
    {
        id: 101,
        name: 'Mobile',
        price: 50000,
        qty: 50
    },
    {
        id: 102,
        name: 'Laptop',
        price: 70000,
        qty: 12
    },
    {
        id: 103,
        name: 'Pen',
        price: 50,
        qty: 500
    },
    {
        id: 104,
        name: 'Book',
        price: 100,
        qty: 75
    },
    {
        id: 105,
        name: 'Car',
        price: 5000000,
        qty: 20
    },
    {
        id: 106,
        name: 'Bike',
        price: 120000,
        qty: 67
    }
]

class ProductFun extends Component {

    constructor(props) {
        super(props);
        this.state = {productData:data};
    }
    
    render() {
        return (
            <div>
                <table border="10">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    {
                        this.state.productData.map((p,i) => {
                            return(
                                <tr>
                                    <th>{p.id}</th>
                                    <th>{p.name}</th>
                                    <th>{p.price}</th>
                                    <th>{p.qty}</th>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}

export default ProductFun;