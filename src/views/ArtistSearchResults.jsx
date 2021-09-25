import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

function ArtistSearchResults() {
  const [artists, setArtists] = useState([])
  const { content = [] } = artists
  const { searchString } = useParams()


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
      { <ul>
        {content.map(artist => (
          <li key={artist.browseId}>
            <Link to={`/artist/${artist.browseId}`}>
            <img src={artist.thumbnails[1].url} />
            {artist.name}
            </Link>
          </li>
        ))}
      </ul> }
    </div>
  )
}

export default ArtistSearchResults
