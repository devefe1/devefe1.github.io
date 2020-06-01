import logo from './logo.svg';
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
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>User List</h2>
            {user.map(user =>
              <div key={user.id}>
                {user.firstName}
                <br></br>
                {user.lastName}
                <br></br>
                {user.email}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default App;