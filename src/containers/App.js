import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import classes from './App.css';
import Home from '../components/Home/Home';

class App extends Component {
  render() {
    return (
        <div className={classes.App}>
           <NavBar />
             <Home className={classes.App}title="This is props being passed along biatch!"/>
           <Footer />
        </div>
    );
  }
}

export default App;