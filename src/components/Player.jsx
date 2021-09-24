import React, { useState, useRef, useContext } from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router'
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

  console.log(songs);

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
      <button>Previous</button>
      <button>Next</button>
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