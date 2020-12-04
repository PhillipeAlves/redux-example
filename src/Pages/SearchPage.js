import React from 'react';
import { Search, HeaderSearch } from '../Components';
import { Box } from '@chakra-ui/react';

export const SearchPage = () => {
  return (
    <Box
      p={8}
      maxWidth='600px'
      borderWidth={1}
      borderRadius={8}
      boxShadow='lg'
      bg='white'
    >
      <HeaderSearch />
      <Search />
    </Box>
  );
};
