import React, { useContext } from 'react';
import'./Hotel.css'
import  fakeData2 from '../../fakeData2';
import { UserContext } from '../../App';

const Hotel = (props) => { 
    const {img,headline,feature,description,rating,price} = props.lodge;
    return (
        <div className="hotel">
            <div className="img">
                <img src={img} className="w-50" alt=""/>
            </div>
            <div className="text">
                <h5>{headline}</h5>
                <p>{feature}</p>
                <p>{description}</p>
                <p>{rating}</p>
                <p>{price}</p>
            </div>
           
        </div>
    );
};

export default Hotel;