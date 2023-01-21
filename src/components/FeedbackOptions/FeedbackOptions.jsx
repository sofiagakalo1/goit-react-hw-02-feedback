// import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ onFeedbackBtn }) => {
  return (
    <ul className={css.list}>
      <li>
        <button
          className={`${css.btn} ${css.btn_good}`}
          type="button"
          onClick={() => onFeedbackBtn('good')}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={`${css.btn} ${css.btn_neutural}`}
          type="button"
          onClick={() => onFeedbackBtn('neutral')}
        >
          Neutural
        </button>
      </li>
      <li>
        <button
          className={`${css.btn} ${css.btn_bad}`}
          type="button"
          onClick={() => onFeedbackBtn('bad')}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};
export default FeedbackOptions;
