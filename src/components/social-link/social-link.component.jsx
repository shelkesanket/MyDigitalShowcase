import React from 'react';
import { Icon } from '@chakra-ui/react';

const SociaLink = ({ color, socialUrl, svgIcon }) => {
  return (
    <a href={socialUrl} target="_blank" rel="noreferrer">
      <Icon
        as={svgIcon}
        w="40px"
        h="40px"
        _hover={{
          transform: 'translateY(-2px)',
          transition: 'all .2s',
        }}
        borderRadius="14px"
        color={`${color}.500`}
      />
    </a>
  );
};

export default SociaLink;
