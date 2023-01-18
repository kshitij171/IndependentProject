import React from 'react';
import { useState } from 'react';
import { createStyles, Header, Menu, Group, Center, Burger, Container, Image ,Transition,Paper} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import { links } from './Constants';
import Team from './Pages/Team';
import { Outlet, Link } from "react-router-dom";
// fix burger menu
const useStyles = createStyles((theme) => ({
  header: {
    position: 'fixed',
  },

  inner: {
    height: 60,
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
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.cyan[1],
    },
    
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
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} className={classes.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="click" exitTransitionDuration={0}>
          <Menu.Target>
            <Link
              to={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              {/* <Center> */}
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={4} />
              {/* </Center> */}
            </Link>
          </Menu.Target>
          <Menu.Dropdown >{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        to={link.link}
        className={classes.link}
        onClick={(event) => {
          // event.preventDefault();
          close();
        }}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <Header height={60} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <a href='#'>
            <Image width={'25px'} src={"https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"} />
          </a>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
        <Transition transition="pop-top-left" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

export default MyNavbar;