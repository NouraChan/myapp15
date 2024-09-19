import { Component } from 'react'
import SWemployees from './SWemployees';


export default class Employees extends Component {

    state = { name : "ali" , salary : 3000 , position : "SW Employee"};

    render() {
        return <>
            <div className='bg-primary text-white text-center'>
            <SWemployees name = {this.state.name} salary = {this.state.salary} position = {this.state.position}/>
            </div>
        </>


            ;
    };
}
