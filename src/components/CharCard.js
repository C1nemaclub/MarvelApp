import React from 'react';
import '../styles/CharCard/CharCard.css';

export default function CharCard(props) {
  return (
    <div className='card' onClick={props.handleClick}>
      <div className='name'>{props.name}</div>
      <img src={props.image} alt='hero' />
    </div>
  );
}
