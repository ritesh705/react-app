import React, { Component } from 'react';
import './App.css';
import About from './components/AboutMe/About';
import Asset from './components/Assets/Asset';
import FormData from './components/Test/Test'
import Parent from './components/Test/Test01';
import TestMe from './components/Test/TestMe';
import HookExample from './components/Test/HookExample';
import Todolistp from './components/Test/Test02';
import UserForm from './components/Test/Test03';
import Users from './components/Test/UserForm';


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
        <FormData/>
        <TestMe/>
        <Parent/>
        <HookExample/>
        <Todolistp/>
        <UserForm/>
        <Users/>
      </div>
    );
  }
}

export default App;