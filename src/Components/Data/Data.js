import React from 'react';
import { flattenObject } from '../../Helpers/functions';
import { connect } from 'react-redux';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { Redirect } from 'react-router';

const Data = ({ data }) => {
  const getData = (data) => {
    const flatData = flattenObject(data[0]);
    const mappedData = flatData.map((elem, i) => {
      // ===( SHOW ONLY 10 RESULTS )===
      if (i >= 10) {
        return '';
      }
      return (
        <Box
          p={6}
          key={i}
          borderWidth={1}
          borderRadius={8}
          boxShadow='lg'
          bg='white'
        >
          <Text>{elem}</Text>
        </Box>
      );
    });
    return (
      <SimpleGrid
        spacing={6}
        p={10}
        minChildWidth='400px'
        bg='gray.90'
        rounded='lg'
      >
        {mappedData}
      </SimpleGrid>
    );
  };

  return (
    <React.Fragment>
      {data.length > 0 ? getData(data) : <Redirect to={'/'} />}
    </React.Fragment>
  );
};

const mapStateToProps = ({ data }) => ({ data });

export default connect(mapStateToProps)(Data);
