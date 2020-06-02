import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    
  return (
    <div className="App">
      <Header />

    <Router>
        <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login} />
        <Route path='/movies' component={Movies} />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;