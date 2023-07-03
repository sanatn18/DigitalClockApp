import logo from './logo.svg';
import './App.css';
import Clock from "./Clock"
import Stopwatch from "./Stopwatch"
import AlarmApp from "./Alarm"
import Timer from "./Timer"
import WorldApp from "./WorldTime"


function App() {
  return (
    <center>
    <div className="App">
      <Clock/>
      <Stopwatch/>
      <AlarmApp/>
       <Timer/>
       <WorldApp/>
    </div>
    </center>
  );
}

export default App;
