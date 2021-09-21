import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router'

function Player() {
  const { videoId } = useParams('')

  return <>
    <ReactPlayer url={'https://www.youtube.com/watch?v=' + videoId}
      config={{
        youtube: {
          playerVars: {
            showinfo: 1,
            controls: 1
          },
        }
      }}
    />
    <iframe width="400" height="300"
    src="https://www.youtube.com/embed/Z8Y1MalRrDc"
    title="YouTube video player"
    frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media;
    gyroscope; picture-in-picture" allowFullScreen></iframe>
  </>
}

export default Player