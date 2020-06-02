import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/movieproducts';

function App() {
    const [state, setState] = useState({
      s: "",
      results: [],
      selected: {}
    });

    const apiurl = "http://www.omdbapi.com/?apikey=101f247f";

   
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
   
    const handleInput = (e) => {
       let s = e.target.value;
          
        setState(prevState => {
          return {...prevState, s: s}
        });
    }


  return (
    <div className="App">
       <main>
            <Search handleInput={handleInput} search={search} />
            <Results results={state.results} />
            {/* <Movie /> */}
        </main>

    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
       
    </div>
  );
}

export default App;