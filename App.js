import logo from './logo.svg';
import './App.css';
import TKYClock from './components/TKYClock';
import AEDTClock from './components/AEDTClock';
import BRTClock from './components/BRTClocl';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      delay: 1000
    }
    this.resetAllIntervals = this.resetAllIntervals.bind(this);
  }

  resetAllIntervals(){
    this.setState({
      delay: 1000
    })
  }

  render() {
    return (
      <div className="App">
        <h1>All Clocks</h1>
        <button onClick={this.resetAllIntervals}>Reset All Intervals</button>
        <button>Double All Intervals</button>
        <button>Randomize All Intervals</button>
        <hr />
        <TKYClock />
        <AEDTClock />
        <BRTClock />
      </div>
    );
  }
}

export default App;
