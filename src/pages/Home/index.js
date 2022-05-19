import "./home.css";

export default function Home({ nextPage }) {
  return (
    <div id={"homeContainer"}>
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
