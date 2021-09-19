import React, { useState } from 'react'
import NavBar from './components/NavBar'
import SearchResults from './views/SearchResults'
import Player from './components/Player'

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
            </Route>
            <Route exact path="/search/:searchString">
              <SearchResults/>
            </Route>
            <Route exact path="/watch/:videoId">
              <Player/>
            </Route>
          </Switch>
      </div>
    </Router>
  )
}

export default App