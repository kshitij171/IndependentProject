import React from 'react';
// import { useState } from 'react';
import { createStyles, Header, Group, Burger, Image ,Transition,Paper} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { IconChevronDown } from '@tabler/icons';
import { links } from './Constants';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  header: {
    position: 'fixed',
    backgroundColor: 'white'
  },

  inner: {
    height: 75,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.cyan[1],
    },
    
  },
  linkActive:{
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.cyan[1],
    },
    borderBottom: '4px solid blue'
  },
  linkLabel: {
    marginRight: 5,
  },
}));


export function MyNavbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);
  // const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    

    return (
      <NavLink
        key={link.label}
        to={link.link}
        className={({ isActive }) => (isActive ? classes.linkActive : classes.link)}
        onClick={(event) => {
          // event.preventDefault();
          close();
        }}
      >
        {link.label}
      </NavLink>
    );
  });

  return (
    <Header height={80} className={classes.header}>
      
        <div className={classes.inner} style={{display:'flex',justifyContent:'space-between'}}>
          
          <Image width={'125px'} src={logo} p={'xl'}/>
          
          <Group spacing={15} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="lg" />
        </div>
        <Transition transition="pop-top-left" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>

    </Header>
  );
}

export default MyNavbar;