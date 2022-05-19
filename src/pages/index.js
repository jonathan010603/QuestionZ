import { useState } from "react";
import Background from "./background";
import Navbar from "./navbar"
import Home from "./Home";
import Config from "./Config";
import StandBy from "./Game/StandBy";
import Countdown from "./Game/Countdown";
import Playing from "./Game/Playing";
import End from "./Game/End";

export default function Pages() {
  const [page, setPage] = useState("Home");
  const [questions, setQuestions] = useState([]);
  const [hits, setHits] = useState(0);
  return <Background bg={page}>
    <Navbar />
    {page === "Home" ? (
    <Home nextPage={setPage} />
  ) : page === "Config" ? (
    <Config nextPage={setPage} />
  ) : page === "StandBy" ? (
    <StandBy nextPage={setPage} setQuestions={setQuestions} setHits={setHits} />
  ) : page === "Countdown" ? (
    <Countdown nextPage={setPage} />
  ) : page === "Playing" ? (
    <Playing
      nextPage={setPage}
      questions={questions}
      hits={hits}
      setHits={setHits}
      setQuestions={setQuestions}
    />
  ) : page === "End" ? (
    <End nextPage={setPage} hits={hits} questionsAmount={questions.length} />
  ) : (
    ""
  )}
  </Background>
}
