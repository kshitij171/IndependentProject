import React from 'react'
import { useState } from 'react';
import {Title, SimpleGrid,Box} from '@mantine/core';
import { Stack, Modal,  Badge, Button, useMantineTheme,Avatar, Text,Paper,Group } from '@mantine/core';


const Team = (props) => {
  const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const productData = [
        {
          designation: "PHD",
          imageurl:
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "Colorful sneakers",
          linkedin:'https://www.narendramodi.in/',
          mail:'tarini.ghosh@iiitd.ac.in'
        },
        {
          designation: "M.Tech",
          imageurl:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          name: "Sport sneakers",
          
          linkedin:'https://www.narendramodi.in/',
          mail:'tarini.ghosh@iiitd.ac.in',
        },
        {
          designation: "M.Tech",
          imageurl:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "iWatch",
          linkedin:'https://www.narendramodi.in/',
          mail:'tarini.ghosh@iiitd.ac.in'
        },
        {
          designation: "M.Tech",
          imageurl:
            "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "Water Bottle",
          linkedin:'https://www.narendramodi.in/',
          mail:'tarini.ghosh@iiitd.ac.in'
        },
        {
          designation: "M.Tech",
          imageurl:
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "Vans sneakers",
          linkedin:'https://www.narendramodi.in/',
          mail:'tarini.ghosh@iiitd.ac.in'
        },
        {
          designation: "M.Tech",
          imageurl:
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "Coco Noir",
          linkedin:'https://www.narendramodi.in/',
          mail:'tarini.ghosh@iiitd.ac.in'
          
        }
      ];
      const teamCards =  productData.map((item) => (
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
      <div style={{backgroundColor:'white'}}>
     
      <Title align='center' mb={"xl"} style={{marginTop:'80px',color: 'teal',fontSize: '40px',fontWeight: '800'}}>
        Our Team
      </Title>
      
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >
        {teamCards}
    </SimpleGrid>
    </div>
    )
};
  
export default Team;