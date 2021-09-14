import React from 'react'
import ReactPlayer from 'react-player/youtube'

function Player() {

  return <>
  <ReactPlayer url='https://www.youtube.com/watch?v=Z8Y1MalRrDc'
  config={{
    youtube: {
      playerVars: { showinfo: 1 }
    }
  }}
  />
  </>
}

export default Player