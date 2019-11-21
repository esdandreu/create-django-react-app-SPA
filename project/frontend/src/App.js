import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state =  {
      users: [],
      loaded: false,
      placeholder: "Loading...",
    };
  }

  async componentDidMount() {
    fetch(this.props.endpoint)
        .then(response => {
          if(response.status !== 200) {
            return this.setState({placeholder: "Something went wrong"});
          }
          return response.json();
        })
        .then(data => this.setState({ users: data, loaded: true}));
  }

  render() {
    const {users, loaded, placeholder} = this.state;
    if(loaded) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Hello { users[0].username }, edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    } else {
      return(<p>{placeholder}</p>);
    }

  }
}

export default App;
