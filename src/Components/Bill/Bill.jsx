import "./Bill.css";
import Question from "../Questions/Questions";
import { useState } from "react";

export default function Bill({ billAmount, onAmountEnter }) {
  return (
    <div className="bill-box">
      <Question>How much was the Bill? </Question>
      <input
        type="text"
        className="bill-amount"
        onChange={onAmountEnter}
        value={billAmount}
        placeholder="0"
      />
    </div>
  );
}
