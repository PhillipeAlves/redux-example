import React from 'react';
import { Button, Box, Heading, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import reduxIcon from '@iconify-icons/logos/redux';

export const NotFound = () => {
  return (
    <Box p={8} borderWidth={1} borderRadius={8} boxShadow='lg' bg='white'>
      <Icon style={{ margin: '0 auto' }} width={50} icon={reduxIcon} />
      <Heading m={2}>Sorry, not found!</Heading>
      <Text>Please, return to the main page.</Text>
      <Button
        onClick={() => (document.location.href = '/')}
        mt={6}
        colorScheme='purple'
        boxShadow='lg'
        _hover={{
          background: 'gray.100',
          color: 'purple.500',
        }}
      >
        return
      </Button>
    </Box>
  );
};
