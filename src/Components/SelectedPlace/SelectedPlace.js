import React from 'react';
import { Link } from 'react-router-dom';
import'./SelectedPlaces.css'
const SelectedPlace = (props) => {
    const {name, description,img,id} = props.place;
    return (
        <div className={`carousel-item two-part ${id === 1 ? "active" : null }`} >
            <div className="two-part">
                <div className="text text-white">
                    <h2>{name}</h2>p
                    <p>{description}</p>
                    <br/>
                    <br/>
                    <button className="bg-warning"> <Link to={"/place/"+ id}>Booking</Link> </button>
                </div>
                <div className="img ml-5">
                        <img className="d-block w-50"  src={img} alt="First slide"/>
                </div>
            </div>
      </div>
    );
};

export default SelectedPlace;