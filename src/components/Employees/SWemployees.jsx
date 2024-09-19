import { Component } from 'react'

export default class SWemployees extends Component {

    state = {};

    render() {

        console.log(this.props);
        
        return <>
            <div className='bg-primary text-white text-center'>
                <h1> Employees </h1>
                <h3>Name : {this.props.name}</h3>
                <h3>Salary : {this.props.salary}</h3>
                <h3>Position : {this.props.position}</h3>
                <h3>IsManager : {this.props.isManager === true ? "Manager" : "Employee"}</h3>

            </div>
        </>
    };
}