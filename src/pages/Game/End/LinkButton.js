import "./end.css";

export default function LinkButton({ text, nextPage, toPage }) {
  return (
    <span
      id={"links"}
      onClick={() => {
        nextPage(toPage);
      }}
    >
      {text}
    </span>
  );
}
