export const FETCH_DATA = 'FETCH_DATA';
export const RESET_STORE = 'RESET_STORE';

export const fetchData = (data) => {
  return {
    type: FETCH_DATA,
    payload: data,
  };
};

export const resetStore = () => {
  return {
    type: RESET_STORE,
  };
};
