import "./end.css";
import LinkButton from "./LinkButton";

export default function End({ nextPage, hits, questionsAmount }) {
  return (
    <div id={"endContainer"}>
      <div id={"hitsAndMisses"}>
        <span id={"score"}>
          Score: {hits}/{questionsAmount}
        </span>
      </div>
      <div id={"endContent"}>
        <LinkButton
          text={"Play again"}
          toPage={"Config"}
          nextPage={nextPage}
        />
        <LinkButton text={"Menu"} toPage={"Home"} nextPage={nextPage} />
      </div>
    </div>
  );
}
