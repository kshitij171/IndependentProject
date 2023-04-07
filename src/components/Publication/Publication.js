import { Card, Image, Text,Button ,Title} from '@mantine/core';
import React,{useState} from 'react';
import {FaLink} from 'react-icons/fa';
import './OtherPublication.js';



const ImageCard = ({ src, alt, reference, title }) => {
  const [hovered, setHovered] = useState(false);


  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative' }}
    >
      <Image src={src} alt={alt} height={200} fit="contain" />
      {hovered && (
        <a
          href={reference}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          <Text
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            size="lg"
            weight={500}
            color="blue"
          >
            <FaLink style={{ marginLeft: 4 }} />
            Link of Paper
          </Text>
        </a>
      )}
      <Text
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '1rem',
        }}
        size="md"
        weight={500}
        color="black"
      >
        {title}
      </Text>
    </Card>
  );
};

const Publication = () => {
 
  
  const images = [
    {
      src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
      alt: 'Placeholder image 1',
      title:'image1',
      reference: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
    },
    {
      src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
      alt: 'Placeholder image 2',
      title:'image2',
      reference: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
    },
    {
      src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
      alt: 'Placeholder image 3',
      title:'image3',
      reference: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
    },
    {
      src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
      alt: 'Placeholder image 4',
      title:'image4',
      reference: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
    },
    {
      src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
      alt: 'Placeholder image 4',
      title:'image5',
      reference: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
    },
    {
      src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
      alt: 'Placeholder image 4',
      title:'image6',
      reference: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
    },
  ];
  
  
  return (
    
    <>
    <Title
      order={1}
      size="h1"
      sx={{
        fontWeight: 800,
        fontSize:'40px',
        textAlign: 'center',
        color: 'teal',
        marginTop: 80,
      }}
      weight={800}
      align="center"
    >
      Major Publications

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          paddingTop: 20,
        }}
      >
        {images.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </div>
    </Title>
    <Button
      style={{
        display: 'block',
        margin: '40px auto 0',
        color: '#ffffff',
        backgroundColor: 'teal',
      }}
      onClick={() => {
        window.open('/publications/OtherPublication', '_blank')
      }}
    >
    Explore More Other publications
    </Button>
  </>

  );
};

export default Publication;
