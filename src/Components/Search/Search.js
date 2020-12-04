import React, { useState } from 'react';
import UpdateRedux from './UpdateRedux';
import axios from 'axios';
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';

export const Search = () => {
  const [input, setInput] = useState('');
  const [data, setdata] = useState('');
  const [error, setError] = useState(false);
  const resources =
    'posts / comments / albums / photos / todos / users https://jsonplaceholder.typicode.com';

  const onSubmit = (e) => {
    e.preventDefault();
    if (input) {
      axios
        .get(`https://jsonplaceholder.typicode.com/${input}`)
        .then((res) => setdata(res))
        .catch(() => setError(true));
    }
  };

  const onChange = (e) => {
    setError(false);
    setInput(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl isInvalid={error} mt={6}>
        <FormLabel textAlign='center'>Search by resource</FormLabel>
        <Input
          placeholder='Search...'
          autoComplete='off'
          textAlign='center'
          size='md'
          value={input}
          onChange={onChange}
        />
        <FormHelperText>{resources}</FormHelperText>
        <FormErrorMessage>* {resources}</FormErrorMessage>
      </FormControl>
      {data ? <UpdateRedux data={data} title={input} /> : ''}
    </form>
  );
};
