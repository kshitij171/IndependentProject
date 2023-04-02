import { Card, Image, Text,Paper ,Title} from '@mantine/core';
import React,{useState} from 'react';
import {FaLink} from 'react-icons/fa';

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

const PublicationList = () => {
  // List of publications year-wise
  const publications = [    {      year: '2022',      papers: [        'Paper 1',        'Paper 2',        'Paper 3',      ],
    },
    {
      year: '2021',
      papers: [
        'Paper 4',
        'Paper 5',
        'Paper 6',
      ],
    },
    {
      year: '2020',
      papers: [
        'Paper 7',
        'Paper 8',
        'Paper 9',
      ],
    },
  ];

  return (
    <div>
      {publications.map(({ year, papers }) => (
        <div key={year}>
          <h2 style={{ color: 'black', fontWeight: 'normal' }}>{year}</h2>
          <ul style={{ textAlign: 'left' }}>
            {papers.map((paper) => (
              <li key={paper} style={{ color: 'black', fontWeight: 'normal' }}>{paper}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};




const Publication = () => {
  const [showPublicationList, setShowPublicationList] = useState(false);

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

      <div
        style={{
          marginTop: 50,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => setShowPublicationList(!showPublicationList)}
      >
        <span style={{ marginRight: '8px' }}>
          Explore more other publications here
        </span>
        {showPublicationList ? (
          <span style={{ fontSize: '1.2em' }}>▲</span>
        ) : (
          <span style={{ fontSize: '1.2em' }}>▼</span>
        )}


      </div>

      {showPublicationList && <PublicationList />}

      

     
    </Title>
  );
};

export default Publication;
