import { combineReducers } from 'redux';

import { userInterfaceReducer } from './userInterface';

const combinedReducers = combineReducers({
  userInterface: userInterfaceReducer
});

export default combinedReducers;
