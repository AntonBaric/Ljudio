import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './views/Home'
import About from './views/About'
import SearchResults from './views/SearchResults'
import ArtistSearchResults from './views/ArtistSearchResults'
import Player from './components/Player'
import ArtistInfo from './views/ArtistInfo'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <h1>LJUDIO</h1>
        <div className="NavBar">
          <NavBar />
          </div>
          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/search/songs/:searchString">
              <SearchResults/>
            </Route>
            <Route exact path="/search/artists/:searchString">
              <ArtistSearchResults/>
            </Route>
            <Route exact path="/watch/:videoId">
              <Player/>
            </Route>
            <Route exact path="/artist/:browseId">
              <ArtistInfo/>
            </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App