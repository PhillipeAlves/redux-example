import React from 'react';
import Data from '../Components/Data/Data';
import { Button, Box } from '@chakra-ui/react';

export const DataPage = () => {
  return (
    <Box
      p={2}
      m={5}
      borderWidth={1}
      borderRadius={8}
      boxShadow='lg'
      bg='purple.100'
    >
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
      <Data />
    </Box>
  );
};
