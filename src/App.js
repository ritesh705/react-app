import React, { Component } from 'react';
import './App.css';
import About from './components/AboutMe/About';
import Asset from './components/Assets/Asset';

class App extends Component
{
  render()
  {
    return(
      <div className="App">
        <h1>React App</h1>
        <span>UI is {5+5} times better when developed in React Framework.</span>
        <About/>
        <Asset/>
      </div>
    );
  }
}

export default App;