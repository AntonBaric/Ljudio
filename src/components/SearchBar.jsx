import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SearchBar() {
	const [songs, setSongs] = useState([])
    const {content = [] } = songs;
	const [searchString, setSearchString] = useState()
	const [searchStringFromButtonClick, setSearchStringFromButtonClick] = useState()

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
	}, [searchStringFromButtonClick])

	const handleClick = () => {
		setSearchStringFromButtonClick(searchString)
	}

	return (
		<div>
			<input type="text" value={searchString} onChange={e => setSearchString(e.target.value)} />
			<button type="button" onClick={handleClick}>Search</button>
			{ <ul>
				{content.map(song => (
          <li key={song.videoId}>{song.name}</li>
				))}
                </ul> }
		</div>
	)
}

export default SearchBar