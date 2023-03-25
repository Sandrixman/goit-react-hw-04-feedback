import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  children,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      {children}
      {total > 0 && (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
