import { combineReducers, createStore } from "redux";
import gameConfigReducer, { configOperations } from "./modules/gameConfig";
import questionReducer, { questionOperations } from "./modules/gamePlay";

const rootReducer = combineReducers({ gameConfigReducer, questionReducer });

const store = createStore(rootReducer);

export { configOperations, questionOperations };
export default store;
