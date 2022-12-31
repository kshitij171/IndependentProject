import React from 'react'
import './BodyStyle.css'
export default function Head() {
  
  return (
    <div className='grid-container'>
        <div className='photo'></div>
        <div className='paragraph'>REN Profile & Facts LØREN (로렌) is ax solo singer, DJ and producer under YG Entertainment‘s sub-label, THEBLACKLABEL. He made his debut on Novemb</div>
    
    <div className='grid'>
        <div className="grid-item">
        <div className="card">
          <img className="card-img" src="https://iiitd.ac.in/sites/all/themes/gavias_educar/images/administration-bg.jpg" alt="Rome" />
          <div className="card-content">
            <h3 className="card-header">Rome</h3>
            <p className="card-text">
              Rome is known for its stunning <strong> architecture</strong>,
              with the Colleseum, Pantheon, and Trevi Fountain as the main
              attractions.
            </p>
            <button className="card-btn">Visit <span>&rarr;</span></button>
          </div>
        </div>
      </div>

      <div className="grid-item">
        <div className="card">
          <img
            className="card-img"
            src="https://iiitd.ac.in/sites/all/themes/gavias_educar/images/administration-bg.jpg"
            alt="Grand Canyon"
          />
          <div className="card-content">
            <h3 className="card-header">Grand Canyon</h3>
            <p className="card-text">
              One of the world's natural wonders, the iconic Grand Canyon draws
              oohs and aahs from visasfasddddddddfdadfasfad asdfdsfadge of its
              <strong>towering cliffs</strong>.
            </p>
            <button className="card-btn">Visit <span>&rarr;</span></button>
          </div>
        </div>
      </div>
      <div className="grid-item">
        <div className="card">
          <img className="card-img" src="https://iiitd.ac.in/sites/all/themes/gavias_educar/images/administration-bg.jpg" alt="Maldives" />
          <div className="card-content">
            <h3 className="card-header">Maldives</h3>
            <p className="card-text">
              The Maldives are known for their
              <strong>natural environment</strong> including the blue ocean,
              white beaches, and clean air, attracting tourists.
            </p>
            <button className="card-btn">Visit <span>&rarr;</span></button>
          </div>
        </div>
      </div>
      </div>
    </div>

      
      
  
  )
}
