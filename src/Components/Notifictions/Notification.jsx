import PropTypes from 'prop-types';

const Notifications = ({ message }) => {
    return <p>{message}</p>;
}


Notifications.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    message: PropTypes.string.isRequired
    }),
  ),
};

export default Notifications;