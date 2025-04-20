import "./Questions.css";

export default function Questions({ children }) {
  return (
    <label className="question">
      <em>{children}</em>
    </label>
  );
}
