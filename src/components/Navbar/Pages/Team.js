import React from 'react'
import { useState } from 'react';
import {Title, SimpleGrid,Box} from '@mantine/core';
import { Stack, Modal,  Badge, Button, Group,Avatar, Text,  Paper } from '@mantine/core';


const Team = (props) => {
    const [opened, setOpened] = useState(false);
    const productData = [
        {
          designation: "PHD",
          imageurl:
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "Colorful sneakers",
          
          moreInfo: " learn how Lorem Ipsum went from..",
        },
        {
          designation: "M.Tech",
          imageurl:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          name: "Sport sneakers",
          
          moreInfo: "enerate Lorem Ipsum placeholder moreInfo for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from..",
        },
        {
          designation: "M.Tech",
          imageurl:
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "iWatch",
          
          moreInfo: "enerate Lorem Ipsum placeholder moreInfo j use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from..",
        },
        {
          designation: "M.Tech",
          imageurl:
            "https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "Water Bottle",
         
          moreInfo: "enerate Lorem Ipsum placeholder moreInfo for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from..",
        },
        {
          designation: "M.Tech",
          imageurl:
            "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "Vans sneakers",
          
          moreInfo: "enerate Lorem Ipsum placeholder moreInfo for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from..",
        },
        {
          designation: "M.Tech",
          imageurl:
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          name: "Coco Noir",
          
          moreInfo: "enerate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and discover plugins for your favorite writing, design and blogging tools. Explore the origins, history and meaning of the famous passage, and learn how Lorem Ipsum went from..",
        }
      ];
      const teamCards =  productData.map((item) => (
        <Paper
        radius="xl"
        withBorder
        shadow={"md"}
        p="lg"
        >

        <Avatar src={item.imageurl} size={150} radius={150} mx="auto" />
        <Stack spacing={"md"}>
            <Text align="center" size="xl" weight={500} mt="md">
              {item.name}
            </Text>
            
            <Badge color="pink" variant="light" fullWidth>
                {item.designation}
            </Badge>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title={item.name}
                
            >
                {item.moreInfo}
             </Modal>
            <Button variant="light" color="blue" fullWidth  radius="xl" onClick={() => setOpened(true)}>
                View More
            </Button>
         </Stack>
        </Paper>
        
      ));
      
    return (
      <>
     
      <Title order={1} underline color="black.5" align='center' mb={"xl"}>
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
    </>
    )
};
  
export default Team;