import logo from './logo.svg';
import './App.css';
import CalculateReward from './CalculateReward';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Rewards App</h2>
      </header>
      <CalculateReward/>
    </div>
  );
}

export default App;
