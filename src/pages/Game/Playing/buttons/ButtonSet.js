import "./buttons.css";
import Btn from "./btn";

export default function ButtonSet({ nextQuestion, answers, checkAnswer }) {
  const newAnswersArray = [].concat(answers);
  newAnswersArray.sort(() => {
    return 0.5 - Math.random();
  });

  const cleanAnswer = (rawAnswer) => {
      return rawAnswer
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&eacute;/g, 'e')
      .replace(/&oacute;/g, "o")
  }

  return (
    <div id={"buttonsContainer"}>
      <Btn
        nextQuestion={nextQuestion}
        answers={answers}
        checkAnswer={checkAnswer}
        color={"ff7675"}
        answer={cleanAnswer(newAnswersArray[0])}
      />
      <Btn
        nextQuestion={nextQuestion}
        answers={answers}
        checkAnswer={checkAnswer}
        color={"fdcb6e"}
        answer={cleanAnswer(newAnswersArray[1])}
      />
      <Btn
        nextQuestion={nextQuestion}
        answers={answers}
        checkAnswer={checkAnswer}
        color={"00b894"}
        answer={cleanAnswer(newAnswersArray[2])}
      />
      <Btn
        nextQuestion={nextQuestion}
        answers={answers}
        checkAnswer={checkAnswer}
        color={"74b9ff"}
        answer={cleanAnswer(newAnswersArray[3])}
      />
    </div>
  );
}
