import PropTypes from 'prop-types';

export default function StatusError({ message }) {
  return (
    <div role="alert">
      <p>Что-то пошло не так. {message}</p>
    </div>
  );
}

StatusError.propTypes = {
  message: PropTypes.string.isRequired,
};
