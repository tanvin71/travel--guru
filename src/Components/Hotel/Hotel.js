import React, { useContext } from 'react';
import'./Hotel.css'
import  fakeData2 from '../../fakeData2';
import { UserContext } from '../../App';

const Hotel = (props) => { 
    const {img,headline,feature,description,rating,price} = props.lodge;
    // const {selectedPlace,setSelectedPlace} =useContext(UserContext)
    // console.log(selectedPlace.name)
    // const hotel = fakeData2.filter(hl => hl.Place == selectedPlace.name)
    // console.log(hotel)
    // // const{img, headline}   =  hotel
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