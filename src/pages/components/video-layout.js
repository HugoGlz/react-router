import React from 'react';
import './video-layout.css';

function VideoLayout(props) {
  return (
    <section className="VideoLayout">
      {props.children}
    </section>
  )
}

export default VideoLayout
