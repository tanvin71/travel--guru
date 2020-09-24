import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import  fakeData2 from '../../fakeData2';
import Header from '../Header/Header';
import Hotel from '../Hotel/Hotel';
import'./Destination.css';

const Destination = () => {
    
    const {selectedPlace,setSelectedPlace} =useContext(UserContext)
    console.log(selectedPlace.name)
    const lodges = fakeData2.filter(lodge => lodge.Place == selectedPlace.name)
    console.log(lodges)
    
    return (
        <div>
        <Header></Header>
        <hr/>
        <div className="destination">
            <div className="hotel-side">
                {
                 lodges.map(lodge =><Hotel key={lodge.id} lodge={lodge}></Hotel>)
                }
            </div>
            <div className="map-side">
                <iframe title="  "  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCwgsYPZIsSf12Ga0SBnCqcnA0pdnCJ9m0&q=${selectedPlace.name}`} frameborder="0"></iframe>
            
            </div>
        </div>
    </div>
    );
};

export default Destination;