import {useState} from "react";
import {nanoid} from "nanoid";
import PropTypes from "prop-types";


const initialState = {
  name: '',
  timeZone: ''
}


const AddClockForm = (props) => {
  const [clock, setClock] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    const newClock = {
      ...clock,
      id: nanoid()
    }
    props.onSubmit(newClock);
  }

  const onInputChange = (e) => {
    const {name, value} = e.target;
    setClock(prevState => ({...prevState, [name]: value}));
  }

  return (
    <form className="formClock" onSubmit={onSubmit}>
      <label>Населенный пункт
        <input
          type="text"
          className="inputClock"
          name="name"
          onChange={onInputChange}
          value={props.name}
        />
      </label>
      <label>Временная зона
        <input
          type="text"
          className="inputClock"
          name="timeZone"
          onChange={onInputChange}
          value={props.timeZone}
        />
      </label>
      <button className="buttonClock">Добавить</button>
    </form>
  );
};

AddClockForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AddClockForm;