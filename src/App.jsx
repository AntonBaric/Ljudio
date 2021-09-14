import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import Player from './components/Player'

function App() {
  
  return (
    <div className="App">
      <div>
        <SearchBar/>
      </div>
      <div>
        <Player/>
      </div>
    </div>
  )
}

export default App