import React from 'react';
import "./Card.css";
import { MdDeleteSweep } from 'react-icons/md';

function Card({ id, title, subText, timeC, handleDelete }) {
  return (
    <div className="note">
      <div className="header">
        <h2>{title}</h2>
        <MdDeleteSweep
          onClick={() => handleDelete(id)}
          size='1.5rem'
        />
      </div>

      <p>{subText}</p>
      <span>{timeC}</span>
    
    </div>
  )
}

export default Card
