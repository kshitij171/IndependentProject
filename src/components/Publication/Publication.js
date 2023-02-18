import { Card, Image, Text,Paper ,Title} from '@mantine/core';
import React,{useState} from 'react';
import {FaLink} from 'react-icons/fa';

const ImageCard = ({ src, alt, reference }) => {
  const [hovered, setHovered] = useState(false);

  return (
    
    
     
  
      <Paper
        radius="xl"
        withBorder
        shadow={"md"}
        p="lg"
       >
       
         <Card
           onMouseEnter={() => setHovered(true)}
           onMouseLeave={() => setHovered(false)}
           style={{ position: 'relative' }}
         >
         <Image src={src} alt={alt} height={200} fit="cover" />
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
         
          </Card>
        
       </Paper>
      
  );
};

const Publication = () => {
  const images = [
    {
      src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
      alt: 'Placeholder image 1',
      reference: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
    },
    {
      src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
      alt: 'Placeholder image 2',
     
      reference: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
    },
    {
      src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
      alt: 'Placeholder image 3',
      
      reference: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
    },
    {
      src: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
      alt: 'Placeholder image 4',
      
      reference: 'https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202101/MIT-Microbiome-01-PRESS_0.jpg?itok=oUTZQgFG',
    },
  ];

  return (
    <Title
        order={1}
        size="h1"
        sx={{
           fontFamily: 'Greycliff CF, sans-serif',
           fontWeight: 900,
           textAlign: 'center',
           color: 'teal',
           marginTop: 80

           
            }}
        weight={900}
        align="center"
        >
         Major Publications
          
     
      <div
       style={{
       display: 'grid',
       gridTemplateColumns: 'repeat(3, 1fr)',
       gap: 16,
       paddingTop: 20 // add padding to the top
      }}
      >

      {images.map((image, index) => (
        <ImageCard key={index} {...image} />
      ))}
     </div>
    </Title>
  );
};


export default Publication;
