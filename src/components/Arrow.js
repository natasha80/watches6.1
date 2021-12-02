import PropTypes from "prop-types";

const Arrow = (props) => {
  return (
    <span
      style={{transform: `rotate(${props.time}deg)`}}
      className={`${props.styles[0]} ${props.styles[1]}`}
    />
  )
};

Arrow.propTypes = {
  time: PropTypes.number.isRequired,
  styles: PropTypes.array.isRequired
}

export default Arrow;