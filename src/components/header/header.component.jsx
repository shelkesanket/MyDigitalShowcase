import React from 'react';
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import profilePic from '../../assets/rushi.jpg';
import flag from '../../assets/flag.png'
import NavItem from '../nav-item/nav-item.component';

const navItems = [
  { page: 'About', routeUrl: '/About' },
  { page: 'Repositories', routeUrl: '/projects' },
  {
    page: 'Resume',
    routeUrl:
      'https://drive.google.com/file/d/1X9jl8TSiJMIUZbeGJdJMbYQqqzqUM4AX/view?usp=sharing',
  },
];

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const avatarBgColor = useColorModeValue('gray.100', 'whiteAlpha');
  return (
    <Flex
      justifyContent={{ base: 'center', md: 'space-between' }}
      flexWrap="wrap"
    >
      <Flex>
        <Button height="52px" marginBottom={{ base: '12px', md: '0' }}>
          <Link to="/">
            <Flex align="center">
              <Avatar
               
               size='sm'
                src={profilePic}
                bg={avatarBgColor}
                name="Rushikesh Pawar"
              />&nbsp;
              <Heading size="md">Rushikesh Pawar</Heading>&nbsp;
              <img src={flag} style={{height:"2re%", width:"2.2rem"}}/>
            </Flex>
          </Link>
        </Button>
      </Flex>
      <Flex align="center">
        {navItems.map((navItem) => (
          <NavItem
            key={navItem.page}
            itemName={navItem.page}
            routeUrl={navItem.routeUrl}
          ></NavItem>
        ))}
        <Button
          onClick={toggleColorMode}
          marginLeft={{ base: '6px', md: '12px' }}
        >
          <Icon as={colorMode === 'light' ? FaMoon : FaSun} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
