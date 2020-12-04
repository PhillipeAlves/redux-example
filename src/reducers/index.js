import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import { RESET_STORE } from '../actions';

const appReducer = combineReducers({
  data: dataReducer,
});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
