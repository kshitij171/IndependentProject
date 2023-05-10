import React from 'react';
import { Title, SimpleGrid, Image, Paper, Stack, Text } from '@mantine/core';

export function Teaching(props) {
  const productData = [
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

  const teamCards = productData.map((item) => (
    <Paper
      radius={20}
      withBorder
      shadow={'xs'}
      p="xs"
      key={item.name}
      style={{ width: '300px', margin: 'auto' }}
    >
      <Image
        src={item.imageurl}
        width="100%"
        height={200}
        objectFit="cover"
        style={{ marginBottom: '1rem' }}
      />
      <Stack spacing={'xs'}>
        <Text align="center" size="xl" weight={500}>
          {item.name}
        </Text>
        <Text align="center" size="xl" weight={500}>
          {item.description}
        </Text>
      </Stack>
    </Paper>
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

      <SimpleGrid cols={2} spacing="xs" style={{ margin: 'auto' }}>
        {teamCards}
      </SimpleGrid>
    </div>
  );
}
