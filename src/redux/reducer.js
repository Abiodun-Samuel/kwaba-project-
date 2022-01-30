import { LOGOUT, LOGIN } from "./action";

const initialState = localStorage.getItem("token");

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
export default reducer;
