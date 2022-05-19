import { useState } from "react";
import Slider from "./slider";
import StartBtn from "./startBtn";
import "./config.css";

export default function Config({ nextPage }) {
  const [questionsAmount, setAmount] = useState(10);

  return (
    <div id={"configContainer"}>
      <Slider name={"Questions"} stateChanger={setAmount} />
      <StartBtn amount={questionsAmount} nextPage={nextPage} />
    </div>
  );
}
