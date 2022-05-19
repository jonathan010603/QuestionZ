import styled from "styled-components";
import "./navbar.css"

export default function Navbar() {
  return (
    <nav id={"nav"}>
      <a href=""><img src="/codeIcon.png" id={"codeLink"}/></a>
      <span id={"title"}>
        <a href="/">QuestionZ</a>
      </span>
    </nav>
  );
}
