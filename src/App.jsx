import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import Player from './components/Player'

function App() {
  
  return (
    <div className="App">
      <div className="SearchBar">
        <SearchBar/>
      </div>
      <div className="Player">
        <Player/>
      </div>
    </div>
  )
}

export default App