import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "react-multi-carousel/lib/styles.css";
import videoFile from '../../assets/a.gif';
import Group_photo from '../../assets/group.jpg';
import funded from '../../assets/funded.png';
import ProfCard from '../ProfCard/ProfCard';
import { Image, Highlight, Paper, AspectRatio, Title } from '@mantine/core';
import PubCards from '../PubCards';
import './newsStyle.css';



const Home = () => {

  const news = [

    {
      text: `Tarini Shankar Ghosh gave a talk at the Food for Thought conference organized by Swiss-Re and The British Medical Journals in Zurich on Oct 11th 2023`,
      link: 'https://www.linkedin.com/posts/dr-tarini-shankar-ghosh-3b211868_another-one-of-the-bmj-published-and-swiss-activity-7117579076369846275-LELN?utm_source=share&utm_medium=member_desktop'
    },

    {
      text: `Commentary titled "Translating the microbiome - What's the target?" published in Gastroenterology journal in collaboration with Prof. Paul O'Toole, Prof. Fergus Shanahan and Prof. Nicola Segata. Check it out.`,
      link: 'https://www.sciencedirect.com/science/article/pii/S0016508523006224?via%3Dihub'
    }


  ]
  const images = [
    {
      id: 1,
      src: videoFile,
      text: 'Decoding the big stories of our little bugs',
      highlighted_text: 'Big Stories',

      alt: "First Slide"
    },
    {
      id: 2,
      src: Group_photo,
      text: '',
      highlighted_text: 'Big Stories',

      alt: "Second Slide"
    }
  ]



  return (
    <>
      <Carousel controls="true" >
        {images.map(imageSlide => (
          <Carousel.Item key={imageSlide.id} style={{ marginTop: '80px', height: 'calc(100vh - 150px)' }}>
            <div style={{ backgroundImage: `url(${imageSlide.src})`, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'left', display: 'flex', alignItems: 'center', backgroundRepeat: 'no-repeat' }}>
              <Highlight
                align="left"
                className='highlgt'
                highlight={[`${imageSlide.highlighted_text}`]}
                highlightStyles={(theme) => ({
                  backgroundImage: theme.fn.linearGradient(45, theme.colors.teal[7], theme.colors.teal[8]),
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                })}
              >
                {imageSlide.text}

              </Highlight>
            </div>

          </Carousel.Item>
        ))}
      </Carousel>



      <div style={{ backgroundColor: '#FFFDF0', padding: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>ABOUT</h1>
        </div>
        <ProfCard />
      </div>
      <div style={{ backgroundColor: 'white', padding: '30px', display: 'flex', justifyContent: 'center' }}>

        <AspectRatio ratio={1 / 1} w={'600px'} mt="lg">
          <Image src={require('../../assets/microbiome.png')} alt={'lab'} />
        </AspectRatio>
      </div>
      <div style={{ backgroundColor: '#FFFDF0', padding: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginTop: '20px' }}>RESEARCH HIGHLIGHTS</h1>
        </div>
        <PubCards />
      </div>

      <div style={{ backgroundColor: 'white', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginTop: '20px' }}>FUNDED BY</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AspectRatio ratio={1 / 1} w={'400px'} mt="lg">
            <Image src={funded} alt={'lab'} />
          </AspectRatio>
        </div>
      </div>

      <div style={{ backgroundColor: '#FFFDF0', padding: '30px' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>NEWS</h1>
        </div>
        <Paper shadow="xl" radius="lg" p="lg" align="center" width="100vw" mt="50px" mb={50}>
          <div className="marquee marquee--fit-content marquee--pos-absolute">
            <ul className="marquee__content">
              {
                news.map(news => (
                  <li class="news-item">
                    <a href={news.link} target="_blank" rel="noopener noreferrer">

                      <Title underline order={3} weight={500} align="left">
                        <i class="fa-solid fa-newspaper"></i>
                        {news.text}
                      </Title>

                    </a>
                    <span className="new-tag">New</span>
                  </li>

                ))
              }
            </ul>
            <ul aria-hidden="true" className="marquee__content">
              {
                news.map(news => (
                  <li class="news-item">
                    <a href={news.link} target="_blank" rel="noopener noreferrer">

                      <Title underline order={3} weight={500} align="left">
                        <i class="fa-solid fa-newspaper"></i>
                        {news.text}
                      </Title>

                    </a>
                    <span className="new-tag">New</span>
                  </li>
                ))
              }
            </ul>
          </div>
        </Paper>
      </div>
    </>
  )
}

export default Home;