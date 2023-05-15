import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Footer() {
  return (
    <div style={{ backgroundColor: '#FFFDF0', color: '#000', padding: '13px', width:"100%", position:"static", bottom:"0"}}>
      <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: '1' }}>
          <MapContainer center={[28.54600, 77.27320]} zoom={15} style={{ height: '200px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.54600, 77.27320]} />
          </MapContainer>
        </div>
        <div style={{ flex: '1', paddingLeft: '30px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            
          <a href="https://www.linkedin.com/in/dr-tarini-shankar-ghosh-3b211868" target="_blank">
              <i class="fa-brands fa-linkedin fa-2xl"></i>
           </a>
           <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tarini.ghosh@iiitd.ac.in" target="_blank">
             <i class="fa-solid fa-envelope fa-2xl"></i>
          </a>
            
          </div>
          <div style={{ marginTop: '10px' }}>
            <p style={{ marginBottom: '5px' }}>Address:</p>
            <p>Microbiome Informatics Lab, A-312, R&D Building</p>
            <p>Indraprastha Institute of Information Technology Delhi</p>
            <p>Okhla Industrial Estate, Phase III</p>
            <p>New Delhi - 110020, India</p>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px' }}>CopyRight© MicroBiome Informatics Lab, All rights reserved.</p>
    </div>
  );
}
