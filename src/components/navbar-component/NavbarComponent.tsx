import React from 'react';
import { Link } from 'react-router-dom';
import { SearchComponent } from '../search-component/SearchComponent';

export default function NavbarComponent() {

    return (
        //boilerplate material ui clipped drawer link: https://material-ui.com/components/drawers/
        <>
            <div className="top-bar"><a href="homepage"><span className="logo"></span></a>
                <h3>Resource Management System</h3>
                <SearchComponent />
            </div>
            <div className="side-nav">
                <Link to="Sample">
                    <a><div className="navitem">Campuses</div></a>
                </Link>
                <Link to="Bldgs?">
                    <a><div className="navitem">Buildings</div></a>
                </Link>
                <Link to="/rooms">
                    <a><div className="navitem">Rooms</div></a>
                </Link>
                <Link to="/employees">
                    <a><div className="navitem">Employees</div></a>
                </Link>
                <Link to="/employee-details">
                    <a><div className="navitem">Employee Deets (temp)</div></a>
                </Link>
                <Link to="Sample">
                    <a><div className="navitem">Profile</div></a>

                </Link>
            </div>
        </>
    );
}
