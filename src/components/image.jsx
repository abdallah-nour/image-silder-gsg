import React from 'react';
import './image.css';
function Image(props) {
  return (
    <>
      <img id={props.id} className="image" src={props.src} alt=""/>
    </>
  );
}

export default Image;