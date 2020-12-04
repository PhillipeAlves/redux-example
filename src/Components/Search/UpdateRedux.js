import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData } from '../../actions';

const UpdateRedux = ({ fetchData, data }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetchData(data);
    setRedirect(!redirect);
  }, [data, redirect, fetchData]);

  return <>{redirect ? <Redirect to={'/data'} /> : ''}</>;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchData }, dispatch);
};

export default connect(null, mapDispatchToProps)(UpdateRedux);
