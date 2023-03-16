import React from 'react'

export default function footer() {
  return (
    <div style={{backgroundColor: '#FFFDF0', color: '#000', padding: '20px'}}>
        <h2 style={{textAlign: 'center'}}>Contact Us</h2>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{flex: '1'}}>
         <iframe src="https://goo.gl/maps/Rmjthav9ugLaN2qL8"
              width="100%"
              height="200"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy">
         </iframe>
        </div>
       <div style={{flex: '1', paddingLeft: '30px'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
           <i className="fab fa-instagram" style={{fontSize: '24px'}}></i>
          </a>
          <p style={{marginLeft: '10px'}}>Follow us on Instagram</p>
        
        </div>
        <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">  
           <i className="fab fa-linkedin" style={{fontSize: '24px'}}></i>
          </a>
           <p style={{marginLeft: '10px'}}>Connect with us on LinkedIn</p>
        </div>
       <div style={{marginTop: '10px'}}>
        <p style={{marginBottom: '5px'}}>Address:</p>
        <p>Indraprastha Institute of Information Technology Delhi</p>
        <p>Okhla Industrial Estate, Phase III</p>
        <p>New Delhi - 110020, India</p>
        </div>
      </div>
     </div>
    </div>

  )
}
