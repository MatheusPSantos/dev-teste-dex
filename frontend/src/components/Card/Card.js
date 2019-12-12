import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className="card">
            <p className="subtitle">{props.name}</p>
            <img src={props.imageLink} alt={props.name}></img>
        </div>
    );
}