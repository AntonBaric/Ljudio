import React, { useState } from 'react'

import SearchBar from './components/SearchBar'
import YoutubePlayer from './components/YoutubePlayer'

function App() {

  return (
    <div className="App">
    <SearchBar/>
    <YoutubePlayer/>
    </div>
  )
}

export default App
