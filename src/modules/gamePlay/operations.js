import actions from "./actions";
import store from "../../store";

const setQuestionsArray = (newQuestions) => {
  store.dispatch(actions.setQuestions(newQuestions));
};

export default { setQuestionsArray };
