import { combineReducers } from 'redux';
import loadingReducer from './loading.js';
import loginReducer from './login.js';

const reducers = combineReducers({
  load: loadingReducer,
  loginCheck: loginReducer,
})

export default reducers