import "./Service.css";
import Question from "../Questions/Questions";

export default function Service({
  myReview,
  handleMyReview,
  buddyReview,
  handleBuddyReview,
}) {
  return (
    <>
      <div className="service-box">
        <Question>How did you like the service? </Question>
        <FeedbackRating
          onChange={handleMyReview}
          myReview={myReview}
        ></FeedbackRating>
      </div>
      <div className="service-box">
        <Question>How did your friend like the service? </Question>
        <FeedbackRating onChange={handleBuddyReview}></FeedbackRating>
      </div>
    </>
  );
}

function FeedbackRating({ onChange }) {
  return (
    <select name="" id="" className="rating-dropdown" onChange={onChange}>
      <option value="0">Dissatisfied (0%)</option>
      <option value="5">It was okay (5%)</option>
      <option value="10">It was good (10%)</option>
      <option value="20">Absolutely Amazing (20%)</option>
    </select>
  );
}
