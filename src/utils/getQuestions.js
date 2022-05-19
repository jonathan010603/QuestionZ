import store from "../store";
import { questionOperations } from "../store";

const GetQuestions = async ({ setQuestions }) => {
  let questionsAmount = await store.getState().gameConfigReducer.amountReducer;

  const response = await fetch(
    `https://opentdb.com/api.php?amount=${questionsAmount}&type=multiple`
  );
  const data = await response.json();
  questionOperations.setQuestionsArray(data.results);
  setQuestions(data.results);
};

export default GetQuestions;
