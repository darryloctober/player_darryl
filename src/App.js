import React from 'react';
import Player from './components/player';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Audio Player Component</h1>
        </header>
        <div className="App-content">
          <Player size="medium" />
        </div>
      </div>
    );
  }
}

export default App;
