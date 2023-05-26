import { createStyles, SimpleGrid, Card, Image, Title, Text, Container } from '@mantine/core';
// import Footer from '../Footer';

const TeachingData = [
  {
    imageurl: require('../../assets/course_image.png'),
    name: 'BIO548(HMDS)',
    description: 'Human Microbiome Data Science',
  },
  {
    imageurl: require('../../assets/course_image.png'),
    name: 'BIO549(CoMeG)',
    description: 'Computational Metagenomics',
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

export function Teaching() {
  const { classes } = useStyles();

  const cards = TeachingData.map((article) => (
    <Card key={article.name} p="xl" radius="xl" component="a" className={classes.card}>

      <Image src={article.imageurl} objectFit="cover" />

      <Text className={classes.title} mt={5} fontSize="18px">
        {article.name}
      </Text>
      <Text className={classes.title} mt={5} fontSize="18px">
        {article.description}
      </Text>
    </Card>
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
        Courses
      </Title>
      <Container py="xl">
        <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {cards}
        </SimpleGrid>
      </Container>
    </div>
  );
}
