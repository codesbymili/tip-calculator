import "./Button.css";

export default function Button({ handleReset }) {
  return (
    <button className="reset-btn" onClick={handleReset}>
      Reset
    </button>
  );
}
