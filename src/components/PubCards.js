import React from 'react'
import './PubCardsStyle.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PubCards() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const productData = [
    {
      id: 1,
      imageurl:
        "https://www.iiitd.ac.in/sites/default/files/images/logo/logo.jpg",
      name: "Colorful sneakers",
      
      text: " learn how Lorem Ipsum went from..",
    },
    {
      id: 2,
      imageurl:
        "https://www.iiitd.ac.in/sites/default/files/images/logo/logo.jpg",
      name: "Sport sneakers",
      
      text: "enerate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from..",
    },
    {
      id: 3,
      imageurl:
        "https://www.iiitd.ac.in/sites/default/files/images/logo/logo.jpg",
      name: "iWatch",
      
      text: "enerate Lorem Ipsum placeholder text j use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from..",
    },
    {
      id: 4,
      imageurl:
        "https://www.iiitd.ac.in/sites/default/files/images/logo/logo.jpg",
      name: "Water Bottle",
     
      text: "enerate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from..",
    },
    {
      id: 5,
      imageurl:
        "https://www.iiitd.ac.in/sites/default/files/images/logo/logo.jpg",
      name: "Vans sneakers",
      
      text: "enerate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from..",
    },
    {
      id: 6,
      imageurl:
        "https://www.iiitd.ac.in/sites/default/files/images/logo/logo.jpg",
      name: "Coco Noir",
      
      text: "enerate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from..",
    }
  ];
  const product = productData.map((item) => (
    <div className="Jcard">
      <a href="https://www.narendramodi.in/" target="_blank">
          <img className="card-img" src={item.imageurl} alt="Rome" />
      </a>
    </div>
  ));
  return (
    
      <Carousel
      autoPlay={true}
      autoPlaySpeed={3000}
      // showDots={true} 
      responsive={responsive}
      infinite={true}
   
      >

        {product}
      </Carousel>
   
  )
}
