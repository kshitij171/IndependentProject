import { Box,TextInput, Textarea, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from "react";

export function Contact() {
    const form = useForm({
      initialValues: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      validate: {
        name: (value) => value.trim().length < 2,
        email: (value) => !/^\S+@\S+$/.test(value),
        subject: (value) => value.trim().length === 0,
        message: (value) => value.trim().length === 0,
      },
    });
    // this is form spree link will use to connect to a test email
  //"https://formspree.io/f/xlekjdba"
    return (
        <Box mt={'80px'} pt={'sm'} ml={'100px'} mr={'100px'}>
            <form 
                action="https://formspree.io/f/xlekjdba"
                method="POST">
                <Title
                    order={1}
                    size="h1"
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
                    weight={900}
                    align="center"
                >
                Contact us
               </Title>
  
                
               <TextInput
                        label="Name"
                        placeholder="Your name"
                        name="name"
                        variant="filled"
                        withAsterisk
                        {...form.getInputProps('name')}
                />

                <TextInput
                        label="Email"
                        placeholder="Your Email ID"
                        name="name"
                        variant="filled"
                        withAsterisk
                        {...form.getInputProps('email')}
                />
                
  
                <TextInput
                    label="Subject"
                    placeholder="Subject"
                    mt="md"
                    name="subject"
                    variant="filled"
                    withAsterisk
                    {...form.getInputProps('subject')}
                />
                <Textarea
                    mt="md"
                    label="Message"
                    placeholder="Your message"
                    maxRows={20}
                    minRows={5}
                    autosize
                    name="message"
                    variant="filled"
                    withAsterisk
                    {...form.getInputProps('message')}
                    
                />
  
                <Group position="center" mt="xl">
                <Button color="teal" type="submit" radius="md">
                    Submit
                </Button>
                </Group>
            </form>
        </Box>
    );
  }