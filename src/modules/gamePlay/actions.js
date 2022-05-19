import types from "./types";

const setQuestions = (newQuestions) => ({
  type: types.setQuestion,
  payload: newQuestions
});

export default {
  setQuestions
};
