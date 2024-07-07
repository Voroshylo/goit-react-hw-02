import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  const badPercentage = totalFeedback ? (feedback.bad / totalFeedback) * 100 : 0;
  let positiveClass = "";
  if (positivePercentage >= 66) {
    positiveClass = css.pG;
  } else if (positivePercentage >= 35 && positivePercentage <= 65) {
    positiveClass = css.pN;
  } else {
    positiveClass = css.pB;
  }

  return (
    <div className={css.div}>
      <p className={css.pG}>Good: {feedback.good}</p>
      <p className={css.pN}>Neutral: {feedback.neutral}</p>
      <p className={css.pB}>Bad: {feedback.bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p className={css.p + ' ' + positiveClass}>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;