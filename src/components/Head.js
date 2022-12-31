import React from 'react'
import './HeadStyle.css'


export default function Head() {
  return (
    <div className='header'>
    <nav className="navb">
    
        <div className="innerBox">
          <div className='boxItem dropdown'>
            <span className='dropdown-toggle' data-bs-toggle="dropdown">Home</span>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href='#' target="_blank" rel="noopener noreferrer">Action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </div>
          <div className='boxItem dropdown'>
            <span className='dropdown-toggle' data-bs-toggle="dropdown">Home</span>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href='#' target="_blank" rel="noopener noreferrer">Action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </div>
          <div className='boxItem dropdown'>
            <span className='dropdown-toggle' data-bs-toggle="dropdown">Home</span>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href='#' target="_blank" rel="noopener noreferrer">Action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          </div>

        </div>
    </nav>
    </div>
    
  
  )
}
