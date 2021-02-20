import { combineReducers } from 'redux';
import setShopInfoReducer from './shopInfo.js';
import informBolckReducer from './informblock.js';

const reducers = combineReducers({
  shopInfo: setShopInfoReducer,
  informblock: informBolckReducer,
})

export default reducers