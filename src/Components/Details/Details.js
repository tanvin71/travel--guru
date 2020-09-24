import React, { useContext, useState } from 'react';
import'./Details.css';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import fakeData from '../../fakeData'
import { UserContext } from '../../App';
const Details = () => {
    const {placeId} = useParams();
    const place = fakeData.find(pl => pl.id == placeId );
    const {selectedPlace,setSelectedPlace} = useContext(UserContext);
    setSelectedPlace(place);
    const history = useHistory();
    const  handleAuth = () =>  {
        history.push("/login")
    }

    const handleBlur = (e) => {
    }
    const  handleSubmit = () => {
           handleAuth();
    }
    return (
        <div className="banner">
            <Header></Header>
            <div className="booking">
                <div className="booking-text text-white">
                    <h1>{place.name}</h1>
                    <p>{place.description}</p>
                </div>
                <div className="booking-form">
                    <form onSubmit={handleSubmit}  action="">
                        <label htmlFor="origin">Origin</label>
                        <br/>
                        <input onBlur ={handleBlur} name="origin" type="text" required/>
                        <br/>
                        <label htmlFor="">Destination</label>
                        <br/>
                        <input value={place.name} onBlur ={handleBlur} name="destination" type="text" required/>
                        <br/>
                        <label htmlFor="">Form</label>
                        <br/>
                        <input onBlur ={handleBlur} name="form-date" type="date" from required/>
                        <br/>
                        <label htmlFor="">To</label>
                        <br/>
                        <input onBlur ={handleBlur} name="to-date" type="date" To  required/>
                        <br/>
                        <br/>
                        <input   type="submit" className="bg-warning"  value="Start Booking"/>
                    </form>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Details;