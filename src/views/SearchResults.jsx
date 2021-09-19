import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

function SearchResults() {
  const [songs, setSongs] = useState([])
  const [artists, setArtists] = useState([])
  const { songContent = [] } = songs // songs must be an array in order to use .map
  const { artistContent = [] } = artists
  const { searchString } = useParams()

  useEffect(() => {
    axios
      .get(`https://yt-music-api.herokuapp.com/api/yt/songs/${searchString}`)
      .then(res => {
        console.log(res)
        setSongs(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [searchString])

  useEffect(() => {
    axios
      .get(`https://yt-music-api.herokuapp.com/api/yt/artists/${searchString}`)
      .then(res => {
        console.log(res)
        setArtists(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [searchString])

  return (
    <div>
      {<ul>
        {songContent.map(song => (
          <li key={song.videoId}>
            <Link to={`/watch/${song.videoId}`}>
              {song.name} - {song.artist.name}
            </Link>
          </li>
        ))}
      </ul>}
      { <ul>
        {artistContent.map(artist => (
          <li key={artist.browseId}>
            {artist.name}
          </li>
        ))}
      </ul> }
    </div>
  )
}

export default SearchResults
