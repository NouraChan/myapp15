import { Component } from 'react'

export default class SWemployees extends Component {

    state = {};

    render() {

        console.log(this.props);
        
        return <>
            <div className='bg-dark text-white text-center'>
                <h1> SW Employee </h1>
                <h3>Id : {this.props.id}</h3>
                <h3>Name : {this.props.name}</h3>
                <h3>Salary : {this.props.salary >= 20000 ? "High" : "Low"}</h3>
                <h3>Position : {this.props.position}</h3>
                

            </div>
        </>
    };
}
