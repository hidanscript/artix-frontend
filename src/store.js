import { createStore, combineReducers } from 'redux';
import { userReducer } from './redux/reducers/user';

const rootReducer = combineReducers({
  userReducer
});

export default createStore(rootReducer);