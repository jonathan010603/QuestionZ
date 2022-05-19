import actions from "./actions";
import store from "../../store";

const setGameConfig = (newAmount) => {
  store.dispatch(actions.setAmount(newAmount));
};

export default { setGameConfig };
