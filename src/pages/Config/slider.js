import "./config.css";
import { useState } from "react";

const Arrow = ({ operation, img }) => {
  return (
    <img
      src={img}
      alt=""
      className={"arrows"}
      onClick={() => operation()}
    />
  );
};

export default function IncrementSlider({ name, stateChanger }) {
  const [amount, setAmount] = useState(10);

  const increment = () => {
    amount === 50
      ? (setAmount(1), stateChanger(1))
      : (setAmount(amount + 1), stateChanger(amount + 1));
  };

  const decrement = () => {
    amount === 1
      ? (setAmount(50), stateChanger(50))
      : (setAmount(amount - 1), stateChanger(amount - 1));
  };

  return (
    <div id={"sliderContainer"}>
      <span id={"sliderName"}>{name}</span>
      <div id={"slider"}>
        <Arrow operation={decrement} img={"/arrowLeft.png"} />
        <span id={"value"}>{amount}</span>
        <Arrow operation={increment} img={"/arrowRight.png"} />
      </div>
    </div>
  );
}
