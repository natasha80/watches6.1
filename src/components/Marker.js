import PropTypes from "prop-types";

const Marker = (props) => {
  return (
    <span
      className={props.className}
      style={{transform: `rotate(${props.offset}deg)`}}
    />
  );
};

Marker.propTypes = {
  className: PropTypes.string.isRequired,
  offset: PropTypes.number.isRequired
};

export default Marker;