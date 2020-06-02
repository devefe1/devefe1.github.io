import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import './App.css';
import Search from './components/Search';
import axios from 'axios';
import Results from './components/Results';
import Popup from './components/Popup';

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

    const openPopup = id => 
    { axios(apiurl + "&i=" + id ). then (({data}) => {
      let result = data;

            console.log (result);

      setState(prevState => {
        return { ...prevState, selected :result}
      })
    })
  }


    const closePopup = () => {
      setState(prevState => {
        return { ... prevState, selected: {} }
      });
    }


  return (
    <div className="App">
       <main>
            <Search handleInput={handleInput} search={search} />
            <Results results={state.results} openPopup={openPopup} />
            
{/* if equals to undefined it won't show the popup but if it is defined it will show the popup */}
            {(typeof state.selected.Title != "undefined") ? <Popup selected = {state.selected} closePopup={closePopup} /> :false}
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