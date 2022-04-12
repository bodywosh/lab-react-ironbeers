import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import Header from '../components/Header'

const RandomBeer = () => {
    const { beerId } = useParams();
    const [randomBeer, setRandomBeer] = useState([]);

    const getBeerDetails = () => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => setRandomBeer(response.data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getBeerDetails();
    }, [] );

    return (
        <div>
            <Header/>
            <img className="beer-img" src={randomBeer.image_url} alt=""></img>
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.tagline}</p>
            <p>Attenuation Level : {randomBeer.attenuation_level}</p>
            <p>First Brewed : {randomBeer.first_brewed}</p>
            <p>{randomBeer.description}</p>
            <p>Created by : {randomBeer.contributed_by}</p>
        </div>
    )
}

export default RandomBeer