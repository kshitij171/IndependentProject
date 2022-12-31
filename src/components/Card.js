import React from 'react'

export default function Card(props) {
  return (
    <div className="grid-item">
        <div className="card">
          <img className="card-img" src={props.imageurl} alt="Rome" />
          <div className="card-content">
            <h3 className="card-header">{props.name}</h3>
            <p className="card-text">
              {props.text}
            </p>
            <button className="card-btn">Visit <span>&rarr;</span></button>
          </div>
        </div>
    </div>
  )
}
