import React from 'react'
import './TeamStyle.css'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function TeamCard() {
  return (
    <div className="cardT">
      <div style={{textAlign:'center',padding:'20px',fontSize:'12px'}}>
         <h1>Name</h1>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed augue.
         </p>
         <button className="sh_btn">Read more</button>
      </div>
      <div className="cover">
         <div className="coverFront">
            <div>
               <h5>Name</h5>
               <Image
               radius="xl"
               src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
               alt="Random unsplash image"
               />
            </div>
         </div>
      </div>
   </div>
  )
}
