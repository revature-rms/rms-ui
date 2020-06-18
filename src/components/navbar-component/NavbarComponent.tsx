import React from 'react';
import { Link } from 'react-router-dom';
import { SearchComponent } from '../search-component/SearchComponent';
import { logout } from '../../utils/LogoutFunction';

import "../../styles/navbar.scss";

export default function NavbarComponent() {
    return (
        //boilerplate material ui clipped drawer link: https://material-ui.com/components/drawers/
        <>
            <div data-test="navbar-top" className="navbar-top">
                <div className="navbar-top-sub">
                    <Link to="/"><div className="logo"></div></Link>
                    <div className="navbar-top-title">Resource Management System</div>
                </div>
                {/* temp remove search functions */}
                <div className="navbar-top-sub">
                    {/* <Link onClick={logout} to=''>Logout</Link> */}
                    {/* <SearchComponent /> */}
                </div>
            </div>
            <div data-test="navbar-side" className="navbar-side">
                {/*link to campus list*/}
                <Link to="/campuses">
                    <a><div className="navbar-side-btn">Campuses</div></a>
                </Link>
                {/*link to building list in a campus*/}
                <Link to="/buildings">
                    <a><div className="navbar-side-btn">Buildings</div></a>
                </Link>
                {/*link to rooms list in a building*/}
                <Link to="/rooms">
                    <a><div className="navbar-side-btn">Rooms</div></a>
                </Link>
                {/*link to employee list*/}
                <Link to="/employees">
                    <a><div className="navbar-side-btn">Employees</div></a>
                </Link>
            </div>
        </>
    );
}
