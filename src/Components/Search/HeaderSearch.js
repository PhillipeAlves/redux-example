import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import reduxIcon from '@iconify-icons/logos/redux';

export const HeaderSearch = () => {
  return (
    <Box textAlign='center'>
      <Icon style={{ margin: '0 auto' }} width={50} icon={reduxIcon} />
      <Heading>Redux example</Heading>
    </Box>
  );
};
