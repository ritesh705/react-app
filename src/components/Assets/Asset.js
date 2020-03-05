import React, { Component } from 'react';
import './Asset.css';

class Asset extends Component
{
    state = 
    {
        cars:[
            {brand : "Maruti",
            make : "2020",
            license : "1234"},
            {brand : "Tata",
            make : "2020",
            license : "2345"}
        ],
        message : "This is Asset Component"
    }

    render()
    {
        return(
        <div className='Asset'>
            <p>Asset Details</p>
            <p>Cars:</p>
            {this.state.cars.map((c) =>
            {
                return(
                <div>
                    <p>{c.brand} | {c.make} | {c.license}</p>
                </div>);
            })}
        </div>);
    };
}
export default Asset;