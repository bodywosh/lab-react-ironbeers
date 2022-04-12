import React from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const Beers = () => {
    const [beers, setBeers] = useState([]);

    const getAllBeers = () => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then((response) => setBeers(response.data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllBeers();
    }, [] );

    return (
    <div>
        <Header/>
        {console.log(beers)}
        {beers.map((beer) => {
          return (
            <div>
              <Link to={`/beers/${beer._id}`}>
                <img className="beer-img" src={beer.image_url} alt=""></img>
                <h3>{beer.name}</h3>
                <p>{beer.tagline}</p>
                <p>Created by : {beer.contributed_by}</p>
              </Link>
            </div>
          );
        })}  
    </div>
  )
}

export default Beers