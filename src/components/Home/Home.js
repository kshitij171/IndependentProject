import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
// import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import Carousel from 'react-bootstrap/Carousel';
import "react-multi-carousel/lib/styles.css";
import videoFile from '../../assets/video.gif';
import Group_photo from '../../assets/Group_photo.jpg';
import funded from '../../assets/funded.jpeg';
import ProfCard from '../ProfCard/ProfCard';
import { Image, Highlight,Paper,AspectRatio,Title,Group } from '@mantine/core';
import PubCards from '../PubCards';
import './newsStyle.css';


const Home = () => {
  
  const news = [
    {
      text:`Extremely delighted to share that our latest article entitled "Translating the Microbiome - What's the target?" has been published in Gastroenterology journal.`,
      link: 'https://pubmed.ncbi.nlm.nih.gov/37094661/'
    },
    
    
  ]
  const images = [
    {
      id: 1,
      src: videoFile,
      text:'',
      highlighted_text:'Big Stories',

      alt: "First Slide"
    },
    {
      id: 2,
      src: Group_photo,
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
            <div style={{backgroundImage:`url(${imageSlide.src})`,width:'100%',height:'100%',backgroundSize:'cover',backgroundPosition:'center',textAlign:'left',display:'flex',alignItems:'center'}}>
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
					<Image src={require('../../assets/microbiome.png')} alt={'lab'} />
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
          <AspectRatio ratio={1/1} w={'400px'} mt="lg">
            <Image src={funded} alt={'lab'} />
          </AspectRatio>
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
                  <li class="news-item">
                    <a href={news.link} target="_blank">
                    
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
                news.map(news=>(
                  <li class="news-item">
                    <a href={news.link} target="_blank">
                    
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