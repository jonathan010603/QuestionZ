import { combineReducers } from "redux";
import types from "./types";

const questionReducer = (state = [], action) => {
  switch (action.type) {
    case types.setQuestion: {
      return state.concat(action.payload);
    }
    default:
      return state;
  }
};

export default combineReducers({
  questionReducer
});
