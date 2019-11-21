import React, {Component} from 'react';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {
  state = {
    username: 'antares'
  };

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    const userInputStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Base Syntax Assignment</h1>
        <UserInput
          style={userInputStyle}
          username={this.state.username}
          changed={this.usernameChangeHandler}
        />
        <UserOutput
          username='bellatrix'
        />
        <UserOutput
          username={this.state.username}
        />
        <UserOutput
          username='betelgeuse'
        />
      </div>
    );
  }
}

export default App;
