import css from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div className={css.div}>
      <p className={css.pG}>Good: {feedback.good}</p>
      <p className={css.pN}>Neutral: {feedback.neutral}</p>
      <p className={css.pB}>Bad: {feedback.bad}</p>
      <p className={css.p}>Total Feedback: {totalFeedback}</p>
      <p className={css.p}>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;