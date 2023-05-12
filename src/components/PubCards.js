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
        require('../assets/NatureReviewsGastro.jfif'),
      link:'https://www.nature.com/articles/s41575-022-00605-x'
    },
    {
      id: 2,
      imageurl:
        require('../assets/NatureAgingCover.png'),
      link:'https://www.nature.com/articles/s43587-022-00306-9'
    },
    {
      id: 3,
      imageurl:
        require('../assets/NatureEcologyCover.png'),
      link:'https://www.nature.com/articles/s41559-020-1236-0'
    },
    {
      id: 4,
      imageurl:
        require('../assets/NatureMedicineCover.png'),
      link:'https://www.nature.com/articles/s41591-020-0963-8'
    },
    {
      id: 5,
      imageurl:
        require('../assets/GastroenterologyCover.jpg'),
      link:'https://www.gastrojournal.org/article/S0016-5085(20)35508-6/fulltext',
    },
    {
      id: 6,
      imageurl:
        require('../assets/GutCover.jfif'),
      link:'https://gut.bmj.com/content/69/7/1218'
    }
  ];
  const product = productData.map((item) => (
    <div className="Jcard">
      <a href={item.link} target="_blank">
          <img className="card-img" src={item.imageurl} style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Rome" />
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
