import React, { useState } from 'react';
import fakeData from '../../fakeData';
import SelectedPlace from '../SelectedPlace/SelectedPlace'

const Places = () => {
    const data = (fakeData);
    const [places, setPlaces]=useState(data)
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
                {     
                 places.map(place=> <SelectedPlace key={place.id}place={place}></SelectedPlace> )
                } 

        </div>
      </div>
                                
    );
};

export default Places;