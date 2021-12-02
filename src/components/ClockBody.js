import {useEffect, useMemo, useState} from "react";
import {convertTimeToDegree, generateArray} from "../utils/helpFunctions";
import {nanoid} from "nanoid";
import Marker from "./Marker";
import Arrow from "./Arrow";
import PropTypes from "prop-types";

const ClockBody = (props) => {
  const [hour, minute, second] = convertTimeToDegree();
  const array = useMemo(
  () =>
    generateArray(12).map((item) => (
      <Marker
        key={nanoid()}
        className="hour-marker"
        offset={30 * item}
      />
    )),
      []
  );

  const [time, setTime] = useState({
    hour: hour - props.timeZone * 30,
    minute: minute,
    second: second,
  });

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTime({
        hour: hour - props.timeZone * 30,
        minute: minute,
        second: second,
      });
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  });

  return (
    <div className="clockBody">
      <span className="clock-face">{array}</span>
      <Arrow
        time={time.hour}
        styles={["clock-arrow", "clock-arrow__hour"]}
      />
      <Arrow
        time={time.minute}
        styles={["clock-arrow", "clock-arrow__minute"]}
      />
      <Arrow
        time={time.second}
        styles={["clock-arrow", "clock-arrow__second"]}
      />
    </div>
  );
};

ClockBody.propTypes = {
    timeZone: PropTypes.string.isRequired
};

export default ClockBody;