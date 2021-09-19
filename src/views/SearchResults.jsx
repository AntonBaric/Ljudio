import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function SearchResults() {
	const [songs, setSongs] = useState([])
  const {content = [] } = songs // songs must be an array in order to use .map
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



	return (
		<div>
			{ <ul>
				{content.map(song => (
          <li key={song.videoId}>{song.name} - {song.artist.name}
					</li>
				))}
                </ul> }
		</div>
	)
}

export default SearchResults
