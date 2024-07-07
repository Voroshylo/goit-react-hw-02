
import css from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {

  return (
    <div className={css.div}>
      <button className={css.btnGood} onClick={() => updateFeedback('good')}>Good</button>
      <button className={css.btnNeutral} onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={css.btnBad} onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button className={css.btnReset} onClick={resetFeedback}>Reset</button>
      )}
    </div>
  );
};

export default Options;