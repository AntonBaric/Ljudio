import React, {useState, useRef} from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router'

function Player() {
  const inputRange = useRef(null)
  const { videoId } = useParams('')
  const [playing, setPlaying] = useState(false)
  const [seeking, setSeeking] = useState(false)
  const [volume, SetVolume] = useState(1)
  const [played, setPlayed] = useState(0)

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

  const handleProggress = state => {
    if (!seeking) {
      setPlayed(state.played)
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
        onProgress={handleProggress}
      />
      <button onClick={() => setPlaying(playing => !playing)}> {playing ? 'Pause' : 'Play'} </button>
      <input type="range" min={0} max={1} step="any" value={volume}
      onChange={e => {SetVolume(e.target.value)}}
      />
      <input type='range' min={0} max={1} step='any'
          value={played}
          onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
        />
        <p>
          {played}
        </p>
    </div>
    <iframe width="400" height="300"
      src="https://www.youtube.com/embed/Z8Y1MalRrDc"
      title="YouTube video player"
      frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media;
    gyroscope; picture-in-picture" allowFullScreen></iframe>
  </>
}

export default Player