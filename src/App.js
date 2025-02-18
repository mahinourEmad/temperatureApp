import './App.css';
import React, {useState} from 'react';

function App() {
  const [temperature,setTemperature] = useState(10);
  const[color,setColor] = useState("cold")
  const handlingIncreaseTemp = () => {
     const currentTemp = temperature+1;
    if(currentTemp  > 30)
      return;
    setTemperature(currentTemp);
    if (currentTemp >= 15)
      setColor("hot");
  }

  const handlingDecreaseTemp = () => {
    const currentTemp = temperature-1;
    if(currentTemp < 0)
      return;
    setTemperature(currentTemp)
    if (currentTemp < 15)
      setColor("cold");
  }
  return (
      <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${color}`}>{temperature}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => handlingIncreaseTemp()}>+</button>
        <button onClick={() => handlingDecreaseTemp()}>-</button>
      </div>
    </div>
  );
}

export default App;
