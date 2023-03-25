import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(el => (
        <Button key={el} onClick={() => onLeaveFeedback(el)}>
          {el}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
