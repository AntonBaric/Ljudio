import React, {useState, useEffect} from 'react'
import axios from 'axios'

function SearchBar() {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        axios.get('https://yt-music-api.herokuapp.com/api/yt/songs/luvdeluxe')
        .then(res => {
            console.log(res);
            setSongs(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return <>
    <input type="text" />
    <div>
        <ul>
            {songs.map(song => (
                <li key={song.videoId}>{song.content}</li> )
                )}
        </ul>
    </div>
    </>
}

export default SearchBar