import React, { useState, useRef, useContext } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useHistory, useParams } from 'react-router'
import Duration from './Duration'
import { SongsContext } from './SongsContext'

function Player() {
  const inputRange = useRef(null)
  const { videoId } = useParams('')
  const [playing, setPlaying] = useState(false)
  const [seeking, setSeeking] = useState(false)
  const [duration, setDuration] = useState(0)
  const [volume, SetVolume] = useState(1)
  const [played, setPlayed] = useState(0)
  const {songs} = useContext(SongsContext)
  const { content = [] } = songs
  const history = useHistory()


  const handleSeekMouseDown = e => {
    setSeeking(true)
  }

  const handleSeekChange = e => {
    setPlayed(parseFloat(e.target.value))
  }

  const handleSeekMouseUp = e => {
    setSeeking(false)
    inputRange.current.seekTo(parseFloat(e.target.value))
  }

  const handleProgress = state => {
    if (!seeking) {
      setPlayed(state.played)
    }
  }

  const handleDuration = (duration) => {
    setDuration(duration)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    alert("Link copied to clipboard")
  }


  const previousSong = () => {
    for (let i = 0; i < content.length - 1; i++) {
      if (content[i].videoId == videoId) {
        content[i - 1].videoId === videoId
        history.push(content[i - 1].videoId)
      }
    }
  }

  const nextSong = () => {
    console.log('Next')
    for ( let i = 0; i < content.length - 1; i++) {
      if (content[i].videoId == videoId)  {
        content[i + 1].videoId === videoId
        history.push(content[i + 1].videoId)
        console.log(videoId)
        console.log(content[i + 1].videoId);
      }
    }
  }

  return <>
    <div className="Controls">
      <ReactPlayer url={'https://www.youtube.com/watch?v=' + videoId}
        playing={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        height="0px" width="0px"
        volume={volume}
        ref={inputRange}
        onProgress={handleProgress}
        onDuration={handleDuration}
      />
      <button onClick={() => setPlaying(playing => !playing)}> {playing ? 'Pause' : 'Play'} </button>
      <input type='range' min={0} max={1} step='any'
        value={played}
        onMouseDown={handleSeekMouseDown}
        onChange={handleSeekChange}
        onMouseUp={handleSeekMouseUp}
      />
      <button onClick={previousSong}>Previous</button>
      <button onClick={nextSong}>Next</button>
      <input type="range" min={0} max={1} step="any" value={volume}
        onChange={e => { SetVolume(e.target.value) }}
      />
      <button onClick={copyToClipboard}>Share</button>
      <Duration seconds={duration * played} className="elapsed" />
      <Duration seconds={duration} className="totalDuration" />
    </div>
  </>
}

export default Player