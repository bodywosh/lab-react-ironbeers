import React from 'react'

const HomePage = () => {
  return (
    <div>
        <img src="./assets/beers.png" alt=""></img>
        <h1><a href="/beers">All Beers</a></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ex ac augue cursus, in ornare massa tempor. Proin dictum.</p>
        <img src="./assets/random-beer.png" alt=""></img>
        <h1><a href="/random-beer">Random Beer</a></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ex ac augue cursus, in ornare massa tempor. Proin dictum.</p>
        <img src="./assets/new-beer.png" alt=""></img>
        <h1><a href="/new-beer">New Beer</a></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ex ac augue cursus, in ornare massa tempor. Proin dictum.</p>
    </div>
  )
}

export default HomePage
