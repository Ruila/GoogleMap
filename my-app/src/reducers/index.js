import { combineReducers } from 'redux';
import setShopInfoReducer from './shopInfo.js';

const reducers = combineReducers({
  shopInfo: setShopInfoReducer,
})

export default reducers