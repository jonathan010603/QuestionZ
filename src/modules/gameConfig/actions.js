import types from "./types";

const setAmount = (newAmount) => ({
  type: types.setAmount,
  payload: newAmount
});

export default {
  setAmount
};
