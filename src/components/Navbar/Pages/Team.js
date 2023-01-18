import React from 'react'
import {Grid, SimpleGrid,Divider } from '@mantine/core';
import TeamCard from './TeamCard';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';


const Team = () => {
    return (
    <Grid columns={1} justify="center">
        <Grid.Col  align="center">
            
            <Divider my="xs" label="Core Member" labelPosition="center" />
            <div style={{width:'360px'}}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={160}
                alt="Norway"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Name SirName</Text>
                <Badge color="pink" variant="light">
                    M.Tech
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                activities on and around the fjords of Norway
            </Text>

            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Read more
            </Button>
            </Card>
            </div>
        </Grid.Col>
      
        <Grid.Col  align="center">
            <Divider my="xs" label="Other Members" labelPosition="center" />
        </Grid.Col>
      <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 'md', cols: 3, spacing: 'md' },
        { maxWidth: 'sm', cols: 2, spacing: 'sm' },
        { maxWidth: 'xs', cols: 1, spacing: 'sm' },
      ]}
    >
        <TeamCard/> 
        <TeamCard/>    
        <TeamCard/>    
        <TeamCard/>    

    </SimpleGrid>
    </Grid>
    )
};
  
export default Team;