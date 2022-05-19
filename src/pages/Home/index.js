import "./home.css";

import codeIcon from "./codeIcon.png"

export default function Home({ nextPage }) {
  return (
    <div id={"homeContainer"}>
      <a href="https://github.com/jonathan010603/questionz" id={"codeLink"}>
        <img src={codeIcon} id={"codeLinkImage"}/>
      </a>
      <div id={"dialogue"}>
        <span>Welcome to Questionz!</span>
        <span>Are you looking for a challenge?</span>
      </div>
      <span id={"homeButton"} onClick={() => nextPage("Config")}>
        Let's do it!
      </span>
    </div>
  );
}
