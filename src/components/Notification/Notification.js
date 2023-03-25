import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <ul>
      <li>{message}</li>
    </ul>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
