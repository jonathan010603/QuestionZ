import GetQuestions from "../../../utils/getQuestions";
import "./standBy.css";

export default function StandBy({ nextPage, setQuestions, setHits }) {
  return (
    <div id={"standByContainer"}>
      <span id={"ready"}>Ready?</span>
      <span
        onClick={async () => {
          setHits(0);
          nextPage("Countdown");
          GetQuestions({ setQuestions });
        }}
        id={"standByButton"}
      >
        Yes
      </span>
    </div>
  );
}
