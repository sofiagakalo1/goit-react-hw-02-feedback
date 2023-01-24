import PropTypes from 'prop-types';
import css from './statistics.module.css';
import Notification from 'components/Notification';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countFeedbackPercentage,
}) => {
  // if countTotalFeedback is not 0 in result
  if (countTotalFeedback()) {
    return (
      <ul className={css.ul}>
        <li className={css.li}>Neutral: {neutral}</li>
        <li className={css.li}>Bad: {bad}</li>
        <li className={css.li}>Good: {good}</li>
        <li className={css.li}>Total: {countTotalFeedback()}</li>
        <li className={css.li}>
          Positive feedback: {countFeedbackPercentage('good')}%
        </li>
      </ul>
    );
  } else {
    return <Notification message={'There is no feedback'} />;
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
