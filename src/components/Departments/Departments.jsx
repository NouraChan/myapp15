import { Component } from 'react'
import SW from './SW/SW';
import HR from './HR/HR';
import BUS from './BUS/BUS';



export default class Departments extends Component {

    state = {};

    render() {
        return <div class="">
            <h1 style={{color : "red"}}> Welcome to Departments </h1>
            <h6><ul>
                <li><SW /></li>
                <li><HR /></li>
                <li><BUS /></li>
            </ul></h6>

        </div>;
    };
}