import "./config.css";
import { configOperations } from "../../store";

export default function StartBtn({ amount, gameType, nextPage }) {
  return (
    <span
      id={"startBtn"}
      onClick={() => {
        configOperations.setGameConfig(amount, gameType);
        nextPage("StandBy");
      }}
    >
      Start
    </span>
  );
}
