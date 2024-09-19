import { Component } from 'react'

export default class Home extends Component {

    state = {};

    render() {
        return <>   
        <nav className="navbar navbar-expand-sm padset mb-2 navbar-dark bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand text-start" href="#">
                        </a> <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavbar"> <span className="navbar-toggler-icon"></span> </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav me-4">
                        <li className="nav-item"> <a
                            className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-uppercase"
                            href="#">HOME</a> </li>
                        <li className="nav-item"> <a
                            className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-uppercase"
                            href="#">ABOUT</a>
                        </li>
                        <li className="nav-item"> <a
                            className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-uppercase"
                            href="#">DEPARTMENTS </a>
                        </li>
                        <li className="nav-item"> <a
                            className="nav-link text-dark fw-bold lh-sm fs-xs me-3 text-uppercase"
                            href="#">CONTACT US</a> </li>
                    </ul>
                </div>
            </div>
        </nav> </>;
    };
}