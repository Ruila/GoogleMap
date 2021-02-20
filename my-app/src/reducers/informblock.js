
const informBolckReducer = (state, action) => {
  switch(action.type){
    case 'SHOW':
      return{
        state: true,
        place_idx: action.place_idx,
        place_id: action.place_id,
      };
    case 'HIDE':
      return{
        state: false,
      };
    default:
      return{
        state: false,
      };
  }
}

export default informBolckReducer