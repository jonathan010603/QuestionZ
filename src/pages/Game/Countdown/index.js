import "./countdown.css";
import { useEffect, useState } from "react";

export default function Countdown({ nextPage }) {
  const [time, setTime] = useState(3);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      nextPage("Playing");
    }
  });

  return (
    <div id={"countdownContainer"}>
      <span id={"time"}>{time}</span>
    </div>
  );
}
