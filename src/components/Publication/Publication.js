import { createStyles, SimpleGrid, Button,Card, Image, Title, Text, Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';
import {FaLink} from 'react-icons/fa';
import { NavLink } from "react-router-dom";


const TeachingData = [
  {
    imageurl: require('../../assets/pub_1.png'),
    reference: 'https://gut.bmj.com/content/69/7/1218',
  },
  {
    imageurl: require('../../assets/pub_2.png'),
    reference: 'https://www.nature.com/articles/s41591-020-0963-8',
  },
  {
    imageurl: require('../../assets/pub_3.png'),
    reference: 'https://www.nature.com/articles/s41559-020-1236-0',
  },
  {
    imageurl: require('../../assets/pub_4.png'),
    reference: 'https://www.nature.com/articles/s41575-022-00605-x',
  },
  {
    imageurl: require('../../assets/pub_5.png'),
    reference: 'https://www.nature.com/articles/s43587-022-00306-9',
  },
  {
    imageurl: require('../../assets/pub_6.png'),
    reference: 'https://elifesciences.org/articles/50240',
  },
  {
    imageurl: require('../../assets/pub_7.png'),
    reference: 'https://www.sciencedirect.com/science/article/abs/pii/S0016508520355086?via%3Dihub',
  },
  {
    imageurl: require('../../assets/pub_8.png'),
    reference: 'https://www.tandfonline.com/doi/full/10.1080/19490976.2020.1822729',
  },
  {
    imageurl: require('../../assets/pub_9.png'),
    reference: 'https://www.gastrojournal.org/article/S0016-5085(23)00622-4/fulltext?referrer=https%3A%2F%2Fpubmed.ncbi.nlm.nih.gov%2F',
  },
  
  
];

const useStyles = createStyles((theme) => ({
  card: {
    boxShadow: theme.shadows.md,
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    margin: theme.spacing.xl,

    '&:hover': {
      transform: 'scale(1.01)'
    },
   
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));


const Publication = () => {
  const { classes } = useStyles();
  const matches = useMediaQuery('(max-width: 767px)');
  const cols = matches ? 1 : 3;
  
  const CardWithOverlay = ({ article }) => {
    const [hovered, setHovered] = useState(false);

    return (
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        key={article.name}
        p="xl"
        radius="xl"
        component="a"
        href="#"
        className={classes.card}
      >
        <Image src={article.imageurl} height={200} objectFit="contain" />
        {hovered && (
          <a
            href={article.reference}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: 'rgba(180, 180, 180, 0.7)',
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
    );
  };

  const cards = TeachingData.map((article) => (
    <CardWithOverlay article={article} key={article.name} />
  ));

  return (
    <div style={{ backgroundColor: 'white', textAlign: 'center' }}>
      <Title
        align="center"
        mb={'xs'}
        style={{
          marginTop: '80px',
          color: 'teal',
          fontSize: '40px',
          fontWeight: '800',
        }}
      >
        Major Publications
      </Title>
      <Container py="xl" style={{ maxWidth: '100vw' }}>
        <SimpleGrid cols={cols}>{cards}</SimpleGrid>
      </Container>
      <NavLink
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: 'teal',
          color: 'white',
          bordeRadius: '5px',
          textDecoration: 'none',
          marginBottom:'50px'
        }}
        to="/OtherPublication/#"
        
      >
        Full List Of Publications
      </NavLink>
      {/* <Button
        
        onClick={() => {
          window.open('/OtherPublication', '_blank',"noopener noreferrer")
        }}
      >
      Full List Of Publications
      </Button> */}
    </div>
  );
};


export default Publication;