import './App.css';
import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
import { Component } from 'react';




export default class App extends Component{

  state = {isManager : false}

  render (){ return<><div className="App">
      <Home/>
    <Employees isManager = {this.state.isManager}/>
 
    </div></>}}
