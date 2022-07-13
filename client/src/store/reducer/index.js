import{ADD_POI, DELETE_POI, GET_POI} from '../actions/actiontype'
const initialState = {
   pois:[]
  };
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POI:
      return {
        ...state,
        pois: action.payload,
      };
      case ADD_POI:
      return {
        ...state,
        pois: action.payload,
      
      }; 
      case DELETE_POI:
      return {
        ...state,
        pois: action.payload,
      
      };
      
      default:
      return state;
    }
}
export default rootReducer;