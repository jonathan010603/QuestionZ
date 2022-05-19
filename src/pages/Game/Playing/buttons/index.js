import ButtonSet from "./ButtonSet";

export default function Buttons({ nextQuestion, answers, checkAnswer }) {
  return (
    <ButtonSet
      nextQuestion={nextQuestion}
      answers={answers}
      checkAnswer={checkAnswer}
    />
  );
}
