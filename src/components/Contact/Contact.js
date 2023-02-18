import { Box,TextInput, Textarea, Group, Title, Button,Alert} from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState } from "react";

import emailjs from 'emailjs-com';

export function Contact() {
  // const theme = useMantineTheme();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject,setSubject] =useState("");


  
  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_vp3s1gk', 'template_4162x84', e.target, 'rWfAwNYPsYMhYqP5V')
      .then((result) => {
          console.log(result.text);
          setName('');
          setEmail('');
          setMessage('');
          setSubject('');
          setAlert({ type: 'success', message: 'Your message has been sent!' });
      }, (error) => {
          console.log(error.text);
          setAlert({ type: 'error', message: 'Oops, something went wrong. Please try again!' });
      });
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <Box mt={'80px'} pt={'sm'} ml={'100px'} mr={'100px'}>
      <Title
                      order={1}
                      size="h1"
                      sx={{
                        fontFamily: 'Greycliff CF, sans-serif',
                        fontWeight: 900,
                        textAlign: 'center',
                        color: 'teal'
                      }}
                      weight={900}
                      align="center"
                  >
                  Contact Us
            </Title>
      <TextInput
        type="text"
        label="Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        
      />
      <TextInput
        
        label="Email"
        name="email"
        type="email"
        value ={email}
        onChange={(e) => setEmail(e.target.value)}
        required

      />
      <TextInput
        
        label="Subject"
        name="subject"
        required
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
       
        mt="md"
      />
        
      <Textarea
       
        label="Message"
        name="message"
        required
        maxRows={20}
        minRows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Group position="center" mt="xl">
          <Button color="teal" type="submit" radius="md">
                    Submit
          </Button>
          {alert && <Alert color={alert.type} onClose={() => setAlert(null)}>{alert.message}</Alert>}
      
      </Group>
      
       
     
      </Box>
    </form>
  );
};

