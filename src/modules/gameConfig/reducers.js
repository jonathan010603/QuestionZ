import { combineReducers } from "redux";
import types from "./types";

const amountReducer = (state = 0, action) => {
  switch (action.type) {
    case types.setAmount: {
      return state = action.payload;
    }
    default:
      return state;
  }
};

export default combineReducers({
  amountReducer
});
