import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <ul className={css.list}>
      <li>
        {' '}
        <button
          className={`${css.btn} ${css.btn_good}`}
          type="button"
          onClick={() => onLeaveFeedback('good')}
        >
          Good
        </button>
      </li>
      <li>
        {' '}
        <button
          className={`${css.btn} ${css.btn_neutral}`}
          type="button"
          onClick={() => onLeaveFeedback('neutral')}
        >
          Neutral
        </button>
      </li>
      <li>
        {' '}
        <button
          className={`${css.btn} ${css.btn_bad}`}
          type="button"
          onClick={() => onLeaveFeedback('bad')}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
