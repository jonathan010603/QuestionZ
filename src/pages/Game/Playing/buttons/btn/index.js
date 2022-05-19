import "./btn.css";

export default function Btn({ nextQuestion, answer, checkAnswer, color }) {
  return (
    <div id={"btnContainer"}>
      <div
        className={"btn"}
        style={{ border: `solid #${color} 2px`, background: `#${color}` }}
        onClick={() => {
          nextQuestion();
          checkAnswer(answer);
        }}
      >
        {answer}
      </div>
    </div>
  );
}
