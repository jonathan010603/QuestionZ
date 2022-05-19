import { useState } from "react";
import Buttons from "./buttons";
import GetQuestions from "../../../utils/getQuestions";
import "./playing.css";

export default function Playing({
  questions,
  nextPage,
  setHits,
  hits,
  setQuestions
}) {
  const [currentIndex, setIndex] = useState(0);
  const questionsAmount = questions.length;
  const nextQuestion = () => {
    currentIndex + 1 === questionsAmount
      ? nextPage("End")
      : setIndex(currentIndex + 1);
  };

  const checkAnswer = (answer) => {
    answer === questions[currentIndex].correct_answer && setHits(hits + 1);
  };

  let question = "";

  const cleanWords = (someText) => {
    try {
      return someText
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&eacute;/g, 'e')
      .replace(/&oacute;/g, "o")
    } catch (error) {
      console.log(error)
      GetQuestions({ setQuestions });
      nextPage("Playing");
    }
  };

  return (
    <div id={"playingContainer"}>
      <div id={"box"}>
        <div id={"content"}>
          <span>{cleanWords(questions[currentIndex].question)}</span>
        </div>
      </div>
      <div id={"playingContent"}>
        <Buttons
          nextQuestion={nextQuestion}
          answers={
            questions
              ? [questions[currentIndex].correct_answer].concat(
                  questions[currentIndex].incorrect_answers
                )
              : GetQuestions({ setQuestions })
          }
          checkAnswer={checkAnswer}
        />
      </div>
    </div>
  );
}
