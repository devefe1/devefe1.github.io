import React,{Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    user: []
  };

  async componentDidMount() {
    const response = await fetch('/users');
    const body = await response.json();
    this.setState({ user: body, isLoading: false });
  }

  render() {
    const {user, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className="App-intro">
            <h2>User List</h2>
            {user.map(user =>
              <div key={user.id}>
                {user.userName}
                <br></br>
                {user.email}
                <br></br>
                {user.password}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;