import PropTypes from 'prop-types';
import css from './statistics.module.css';
import Notification from 'components/Notification';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  if (total()) {
    return (
      <ul className={css.ul}>
        <li className={css.li}>Good: {good}</li>
        <li className={css.li}>neutral: {neutral}</li>
        <li className={css.li}>Bad: {bad}</li>
        <li className={css.li}>Total: {total()}</li>
        <li className={css.li}>Positive feedback: {positiveFeedback()}%</li>
      </ul>
    );
  } else {
    return <Notification message="There is no feedback" />;
  }
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positiveFeedback: PropTypes.func.isRequired,
};

export default Statistics;
