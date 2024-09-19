import './App.css';
import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
import "bootstrap/dist/css/bootstrap.min.css"
import { Component } from 'react';




export default class App extends Component{

  state = {isManager : false , name : "Admin" , phone : "01645645447" , email : "nny@gm.co"}

  render (){ return<><div className="App">
      <Home/>
    <Contactus name = {this.state.name} phone = {this.state.phone} email = {this.state.email}/>
 
    </div></>}}
