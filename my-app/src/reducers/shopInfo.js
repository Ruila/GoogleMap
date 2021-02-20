
const setShopInfoReducer = (state, action) => {
  switch(action.type){
    case 'SETSHOPINFO':
      return{
        state: action.state,
      };
    default:
      return{
        state: {},
      };
  }
}

export default setShopInfoReducer