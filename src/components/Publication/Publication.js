import { pubdata } from "./Pub_data";
import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import { useHover } from "@mantine/hooks";



const useStyles = createStyles((theme) => ({
    card: {
      transition: 'transform 150ms ease, box-shadow 150ms ease',
  
      '&:hover': {
        transform: 'scale(1.01)',
        boxShadow: theme.shadows.md,
      },
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 600,
    },
  }));
  
const Publication=() => {
    const { classes } = useStyles();

    const {hovered, ref} = useHover();

  
    const cards = pubdata.map((article) => (
      <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image} />
          < Text ref={ref}>
            {hovered ? 'https://www.nature.com/articles/d41586-023-00258-z': 'link'}
          </Text>
        </AspectRatio>
        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
      </Card>
    ));
  
    return (
      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
    );
  }

  export default Publication;
