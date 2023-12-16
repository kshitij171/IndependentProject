import React from 'react'
import { useState } from 'react';
import { Title, SimpleGrid, Box } from '@mantine/core';
import { Stack, Modal, Badge, Button, useMantineTheme, Avatar, Text, Paper, Group } from '@mantine/core';
import Footer from '../Footer';

const Team = (props) => {

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const productData = [
    {
      designation: "Group Leader",
      imageurl: require('../../assets/tarini.png'),
      name: "Dr. Tarini Shankar Ghosh",
      linkedin: 'https://www.linkedin.com/in/dr-tarini-shankar-ghosh-3b211868',
      mail: 'tarini.ghosh@iiitd.ac.in'
    },
    {
      designation: "Ph.D. Student",
      imageurl:
        require('../../assets/sourav.png'),
      name: "Sourav Goswami",

      linkedin: 'https://www.linkedin.com/in/sourav-goswami-840617159/',
      mail: 'souravg@iiitd.ac.in',
    },
    {
      designation: "Ph.D. Student",
      imageurl:
        require('../../assets/shivangi.png'),
      name: "Shivangi Verma",
      linkedin: 'https://www.linkedin.com/in/shivangi-verma-012',
      mail: 'shivangi22206@iiitd.ac.in'
    },

    {
      designation: "Ph.D. Student",
      imageurl:
        require('../../assets/omprakash.png'),
      name: "Omprakash Ramakant Shete",
      linkedin: ' https://www.linkedin.com/in/omprakash-ramakant-shete-b00281187',
      mail: 'shete22205@iiitd.ac.in'

    },

    {
      designation: "M.Tech Student",
      imageurl:
        require('../../assets/abishek.png'),
      name: "Abhishek Goel",
      linkedin: 'https://www.linkedin.com/in/abhishek-goel-6282b0137/',
      mail: 'abhishek22197@iiitd.ac.in'
    },

    {
      designation: "M.Tech Student",
      imageurl:
        require('../../assets/vindhya.png'),
      name: "Vindhya Regonda",
      linkedin: 'https://www.linkedin.com/in/vindhya-regonda-9a3335171?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqkzOBe%2FjR%2FyOlC3ng%2FPdGQ%3D%3D',
      mail: 'vindhya22208@iiitd.ac.in'
    },



    {
      designation: "M.Tech Student",
      imageurl: require('../../assets/lavanya.png'),
      name: "Lavanya CB",
      linkedin: 'https://www.linkedin.com/in/lavanya-balasundram-79968319a',
      mail: 'lavanya22192@iiitd.ac.in'

    },
    {
      designation: "M.Tech Student",
      imageurl: require('../../assets/Sakshi Mahajan.jpeg'),
      name: "Sakshi Mahajan",
      linkedin: 'https://www.linkedin.com/in/sakshi-mahajan-2668521b6/',
      mail: 'sakshi22204@iiitd.ac.in'

    },
    {
      designation: "Research Associate",
      imageurl: require('../../assets/chetan_saraf.jpg'),
      name: "Chetan Saraf",
      linkedin: 'https://www.linkedin.com/in/chetan-sharaf-910574114/',
      mail: 'chetan20109@iiitd.ac.in'

    },
    {
      designation: "Undergrad: IP Student",
      imageurl: require('../../assets/debjit.png'),
      name: "Debjit Pramanik",
      linkedin: 'https://www.linkedin.com/in/debjit-pramanik-88a837171/',
      mail: 'debjit20504@iiitd.ac.in'

    },

  ];





  const AlumniData = [
    {
      designation: "M.Tech Student",
      imageurl:
        require('../../assets/amit.png'),
      name: "Amit Samal",
      linkedin: 'https://www.linkedin.com/in/amit-samal-1387ab182',
      mail: 'amit21224@iiitd.ac.in'

    }
  ]


  const DeveloperData = [
    {
      designation: "B.Tech Student",
      imageurl:
        require('../../assets/Ankit_Chaurasia.jpg'),
      name: "Ankit Chaurasia",
      linkedin: 'https://www.linkedin.com/in/ankit-20027',
      mail: 'ankitc1422@gmail.com'

    },

    {
      designation: "B.Tech Student",
      imageurl:
        require('../../assets/Amit_malik.jpg'),
      name: "Amit Malik",
      linkedin: 'https://www.linkedin.com/in/amit-malik-6a1763203',
      mail: 'amitnarela34@gmail.com'

    },

    {
      designation: "B.Tech Student",
      imageurl:
        require('../../assets/Vasanth.jpg'),
      name: "Lakavath Vasanth Kumar",
      linkedin: 'https://www.linkedin.com/in/lakavath-vasanth-kumar/',
      mail: 'lakavath20386@iiitd.ac.in'

    }
  ]




  const teamCards = productData.map((item) => (
    <Paper
      radius="xl"
      withBorder
      shadow={"sm"}
      p="lg"
    >

      <Avatar src={item.imageurl} size={150} radius={150} mx="auto" />
      <Stack spacing={"md"}>
        <Text align="center" size="xl" weight={500} mt="md">
          {item.name}

        </Text>
        <Badge color='pink' variant="transparent" size='xl' fullWidth>
          {item.designation}
        </Badge>
        <Group position="center" spacing="sm">
          <a href={item.linkedin} target="_blank">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${item.mail}`} target="_blank">
            <i class="fa-solid fa-envelope fa-2xl"></i>
          </a>
        </Group>
      </Stack>
    </Paper>

  ));


  {/*ALUMNI CARD */ }

  const Alumnicards = AlumniData.map((item) => (
    <Paper
      radius="xl"
      withBorder
      shadow={"sm"}
      p="lg"
    >

      <Avatar src={item.imageurl} size={150} radius={150} mx="auto" />
      <Stack spacing={"md"}>
        <Text align="center" size="xl" weight={500} mt="md">
          {item.name}

        </Text>
        <Badge color='pink' variant="transparent" size='xl' fullWidth>
          {item.designation}
        </Badge>
        <Group position="center" spacing="sm">
          <a href={item.linkedin} target="_blank">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${item.mail}`} target="_blank">
            <i class="fa-solid fa-envelope fa-2xl"></i>
          </a>
        </Group>
      </Stack>
    </Paper>

  ));




  {/*Developer CARD */ }


  const Developercards = DeveloperData.map((item) => (
    <Paper
      radius="xl"
      withBorder
      shadow={"sm"}
      p="lg"
    >

      <Avatar src={item.imageurl} size={150} radius={150} mx="auto" />
      <Stack spacing={"md"}>
        <Text align="center" size="xl" weight={500} mt="md">
          {item.name}

        </Text>
        <Badge color='pink' variant="transparent" size='xl' fullWidth>
          {item.designation}
        </Badge>
        <Group position="center" spacing="sm">
          <a href={item.linkedin} target="_blank">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${item.mail}`} target="_blank">
            <i class="fa-solid fa-envelope fa-2xl"></i>
          </a>
        </Group>
      </Stack>
    </Paper>

  ));

  return (
    <div>
      <div style={{ backgroundColor: 'white' }}>

        <Title align='center' mb={"xl"} style={{ marginTop: '80px', color: 'teal', fontSize: '40px', fontWeight: '800' }}>
          Our Team
        </Title>

        <SimpleGrid
          cols={4}
          spacing="lg"
          mb={50}
          breakpoints={[
            { maxWidth: 'md', cols: 3, spacing: 'md' },
            { maxWidth: 'sm', cols: 2, spacing: 'sm' },
            { maxWidth: 'xs', cols: 1, spacing: 'sm' },
          ]}
        >
          {teamCards}
        </SimpleGrid>
      </div>


      <div style={{ backgroundColor: 'white' }}>

        <Title align='center' mb={"xl"} style={{ marginTop: '80px', color: 'teal', fontSize: '40px', fontWeight: '800' }}>
          Alumni
        </Title>

        <SimpleGrid
          cols={4}
          spacing="lg"
          mb={50}
          breakpoints={[
            { maxWidth: 'md', cols: 3, spacing: 'md' },
            { maxWidth: 'sm', cols: 2, spacing: 'sm' },
            { maxWidth: 'xs', cols: 1, spacing: 'sm' },
          ]}
        >
          {Alumnicards}
        </SimpleGrid>
      </div>

      <div style={{ backgroundColor: 'white' }}>

        <Title align='center' mb={"xl"} style={{ marginTop: '80px', color: 'teal', fontSize: '40px', fontWeight: '800' }}>
          Developer Team
        </Title>

        <SimpleGrid
          cols={4}
          spacing="lg"
          mb={50}
          breakpoints={[
            { maxWidth: 'md', cols: 3, spacing: 'md' },
            { maxWidth: 'sm', cols: 2, spacing: 'sm' },
            { maxWidth: 'xs', cols: 1, spacing: 'sm' },
          ]}
        >
          {Developercards}
        </SimpleGrid>
      </div>
    </div>
  )
};

export default Team;
