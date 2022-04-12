import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import Header from '../components/Header'

const BeerDetails = () => {
    const { beerId } = useParams();
    const [beer, setBeer] = useState([]);

    const getBeerDetails = () => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/`+beerId)
        .then((response) => setBeer(response.data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getBeerDetails();
    }, [] );

    return (
        <div>
            <Header/>
            <img className="beer-img" src={beer.image_url} alt=""></img>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Attenuation Level : {beer.attenuation_level}</p>
            <p>First Brewed : {beer.first_brewed}</p>
            <p>{beer.description}</p>
            <p>Created by : {beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetails