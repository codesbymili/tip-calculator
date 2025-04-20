import "./Result.css";

export default function Result({
  billAmount,
  totalAmount,
  myReview,
  buddyReview,
}) {
  const totalTip = Number(
    ((Number(myReview) + Number(buddyReview)) / 2 / 100) * Number(billAmount)
  ).toFixed(2);
  return (
    <h3 className="result">
      You pay ${totalAmount} (${billAmount} bill + ${totalTip} tip)
    </h3>
  );
}
