import './App.css';
import AddClockForm from "./components/AddClockForm";
import Clock from "./components/Clock";
import {useState} from "react";


const initialState = [
  {id: 'c1', name: 'Москва', timeZone: '-3'},
  {id: 'c2', name: 'Стерлитамак', timeZone: '-5'},
];


function App() {
  const [clocks, setClocks] = useState(initialState);
  const addClock = (data) => {
    setClocks(prevState => [...prevState, data]);
  }

  const deleteClock = (id) => {
    setClocks(clocks.filter((o) => o.id !== id));
  }

  return (
    <div className="App">
      <AddClockForm onSubmit={addClock}/>
      <div className="clocksContainer">
        {clocks.map((clock) => (
          <Clock key={clock.id}
             id={clock.id}
             title={clock.name}
             timeZone={clock.timeZone}
             deleteClock={deleteClock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;