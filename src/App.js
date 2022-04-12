import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Beers from './pages/Beers'
import BeerDetails from './pages/BeerDetails'
import RandomBeer from './pages/RandomBeer'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/beers" element={<Beers />} /> 
        <Route path="/beers/:beerId" element={<BeerDetails />} /> 
        <Route path="/random-beer" element={<RandomBeer />} /> 
      </Routes>
    </div>
  );
}

export default App;
