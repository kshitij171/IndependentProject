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
      text:'PM Modis speech in Rajya Sabha: Key points'
    },
    {
      text:'Supreme Court sends to Bombay HC CBI plea against nod granted to Nirav Modi'
    },
    {
      text:'What Chinese balloons are telling India about espionageWhat Chinese balloons are telling India about espionagWhat Chinese balloons are telling India about espionagWhat Chinese balloons are telling India about espionagWhat Chinese balloons are telling India about espionag'
    },
    {
        text:'lllllllllllllllllllllllllllllllllllllasdasssssssssssssssssssssslllllllllll'
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
          style= {{color: '#fff',fontSize: '40px',fontWeight: '800',maxWidth:'550px'}}
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
      <div style={{backgroundColor: '#FFFDF0', color: '#000', padding: '20px'}}>
        <h2 style={{textAlign: 'center'}}>Contact Us</h2>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{flex: '1'}}>
         <iframe src="https://goo.gl/maps/Rmjthav9ugLaN2qL8"
              width="100%"
              height="200"
              style={{border:0}}
              allowfullscreen=""
              loading="lazy">
         </iframe>
        </div>
       <div style={{flex: '1', paddingLeft: '30px'}}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
           <i className="fab fa-instagram" style={{fontSize: '24px'}}></i>
          </a>
          <p style={{marginLeft: '10px'}}>Follow us on Instagram</p>
        
        </div>
        <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">  
           <i className="fab fa-linkedin" style={{fontSize: '24px'}}></i>
          </a>
           <p style={{marginLeft: '10px'}}>Connect with us on LinkedIn</p>
        </div>
       <div style={{marginTop: '10px'}}>
        <p style={{marginBottom: '5px'}}>Address:</p>
        <p>Indraprastha Institute of Information Technology Delhi</p>
        <p>Okhla Industrial Estate, Phase III</p>
        <p>New Delhi - 110020, India</p>
        </div>
      </div>
     </div>
    </div>


		</>
	)
}

export default Home;