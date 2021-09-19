import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Player from './components/Player'
import SearchResults from './views/SearchResults'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <div className="SearchBar">
          <NavBar />
          <Switch>
            <Route exact path="/">
            </Route>
            <Route exact path="/search/:searchString">
              <SearchResults/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App