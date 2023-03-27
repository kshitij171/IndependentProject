import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
// import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import Carousel from 'react-bootstrap/Carousel';
import "react-multi-carousel/lib/styles.css";

import ProfCard from '../ProfCard/ProfCard';
import { Image, Highlight,Paper,AspectRatio,Title,Group } from '@mantine/core';
import PubCards from '../PubCards';
import './newsStyle.css';


const Home = () => {
  
  const news = [
    {
      text:'a'
    },
    {
      text:'b'
    },
    {
      text:' Chinese balloons are telling India about espionagWhat Chinese balloons are telling India about espionagWhat Chinese balloons are telling India about espionagWhat Chinese balloons are telling India about espionag'
    },
    {
        text:'d'
    },
    {
        text:'e'
    },
    {
      text:'f'
  },
  {
    text:'j'
},
{
  text:'k'
},
  ]
  const images = [
    {
      id: 1,
      src: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vd3bj2jPe/videoblocks-female-scientist-with-microscope-in-lab-woman-scientist-doing-microscope-research-microscope-scientist-working-in-lab-lab-scientist-looking-in-microscope-science-laboratory-research_rvlu85o5e_thumbnail-1080_01.png',
      text:'Decoding The Big Stories Of Our Little Bugs',
      highlighted_text:'Big Stories',

      alt: "First Slide"
    },
    {
      id: 2,
      src: 'http://www.goda.chem.s.u-tokyo.ac.jp/assets/img/slides/slide-1.jpg',
      text:'Decoding The Big Stories Of Our Little Bugs',
      highlighted_text:'Big Stories',

      alt: "Third Slide"
    }
  ]


	
	return (
		<>
	<Carousel controls="true" >
      {images.map(imageSlide => (
          <Carousel.Item key={imageSlide.id} style={{marginTop:'80px' ,height:'calc(100vh - 150px)'}}>
            <div style={{backgroundImage:`url(${imageSlide.src})`,backgroundSize:'cover',height:'100%',textAlign:'left',display:'flex',alignItems:'center'}}>
      <Highlight
          align="left"
          
          style= {{color: '#fff',fontSize: '40px',fontWeight: '800',maxWidth:'380px',padding:'30px'}}
          highlight={[`${imageSlide.highlighted_text}`]}
          highlightStyles={(theme) => ({
            backgroundImage: theme.fn.linearGradient(45, theme.colors.cyan[5], theme.colors.indigo[5]),
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
	
	
	
			<div style={{backgroundColor:'#FFFDF0',padding:'30px'}}>
				<div style={{textAlign:'center'}}>
					<h1>ABOUT</h1>
				</div>
				<ProfCard />
			</div>
			<div style={{backgroundColor:'white',padding:'30px',display:'flex' ,justifyContent:'center'}}>
				
				<AspectRatio ratio={1/1} w={'600px'} mt="lg">
					<Image src={'http://www.goda.chem.s.u-tokyo.ac.jp/assets/img/about.jpg'} alt={'lab'} />
				</AspectRatio>
			</div>
			<div style={{backgroundColor:'#FFFDF0',padding:'30px'}}>
				<div style={{textAlign:'center'}}>
					<h1 style={{marginTop:'20px'}}>RESEARCH HIGHLIGHTS</h1>
				</div>
				<PubCards/>
			</div>
      
      <div style={{backgroundColor:'white',padding:'30px',display:'flex',flexDirection:'column'}}>
        <div style={{textAlign:'center'}}>
            <h1 style={{marginTop:'20px'}}>FUNDED BY</h1>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Group position="center" spacing="xl">
          <AspectRatio ratio={1/1} w={'250px'} mt="lg">
            <Image src={'http://www.goda.chem.s.u-tokyo.ac.jp/assets/img/about.jpg'} alt={'lab'} />
          </AspectRatio>
          <AspectRatio ratio={1/1} w={'250px'} mt="lg">
            <Image src={'http://www.goda.chem.s.u-tokyo.ac.jp/assets/img/about.jpg'} alt={'lab'} />
          </AspectRatio>
        </Group>
          
        </div>
			</div>

      <div style={{backgroundColor:'#FFFDF0',padding:'30px'}}>
				<div style={{textAlign:'center'}}>
					<h1>NEWS</h1>
				</div>
				<Paper shadow="xl" radius="lg" p="lg" align="center" width="100vw" mt="50px" >
          <div className="marquee marquee--fit-content marquee--pos-absolute">
            <ul className="marquee__content">
              {
                news.map(news=>(
                  <li>
                    <a href="https://www.narendramodi.in/" target="_blank">
                    
                    <Title underline order={3} weight={500} align="left">
                    <i class="fa-solid fa-newspaper"></i>
                      {news.text}
                    </Title>
                    </a>
                  </li>
                   
                ))
              }
            </ul>
            <ul aria-hidden="true" className="marquee__content">
            {
                news.map(news=>(
                  <li>
                    <a href="https://www.narendramodi.in/" target="_blank">
                    
                    <Title underline order={3} weight={500} align="left">
                      <i class="fa-solid fa-newspaper"></i>
                      {news.text}
                    </Title>
                    </a>
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