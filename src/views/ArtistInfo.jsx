import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function ArtistInfo() {
  const { browseId } = useParams('')
  const [content, setContent] = useState({})

  console.log(browseId);
  console.log(content);

  useEffect(() => {
    axios
      .get(`https://yt-music-api.herokuapp.com/api/yt/artist/${browseId}`)
      .then(res => {
        console.log(res)
        setContent(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [browseId])

  return (
    <div>
      <h1>{content.name}</h1>
      <p>{content.description}</p>
    </div>
  )
}

export default ArtistInfo
