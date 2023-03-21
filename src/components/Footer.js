import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Footer() {
  return (
    <div style={{ backgroundColor: '#FFFDF0', color: '#000', padding: '20px' }}>
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
            
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin" style={{ fontSize: '24px' }}></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter" style={{ fontSize: '24px' }}></i>
              </a>
            
          </div>
          <div style={{ marginTop: '10px' }}>
            <p style={{ marginBottom: '5px' }}>Address:</p>
            <p>MicroBiome Informatics Lab , R&D Building</p>
            <p>Indraprastha Institute of Information Technology Delhi</p>
            <p>Okhla Industrial Estate, Phase III</p>
            <p>New Delhi - 110020, India</p>
          </div>
        </div>
      </div>
    </div>
  )
}
