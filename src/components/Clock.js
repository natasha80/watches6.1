import ClockBody from "./ClockBody";
import PropTypes from "prop-types";

const Clock = (props) => {
  const onDelete = (_event) => {
    props.deleteClock(props.id);
  }

  return (
    <div className="clockElement">
      <h3 className="clockTitle">{props.title}</h3>
      <ClockBody timeZone={props.timeZone} />
      <button className="clockButtonDel" id={props.id} onClick={onDelete}>
        x
      </button>
    </div>
  );
};

Clock.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    timeZone: PropTypes.string.isRequired,
    deleteClock: PropTypes.func.isRequired
}

export default Clock;