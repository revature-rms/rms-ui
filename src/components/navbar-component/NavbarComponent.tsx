import React from 'react';
import { Link } from 'react-router-dom';
import { SearchComponent } from '../search-component/SearchComponent';
import { logout } from '../../utils/LogoutFunction';


export default function NavbarComponent() {

    return (
        //boilerplate material ui clipped drawer link: https://material-ui.com/components/drawers/
        <>
            <div className="top-bar"><a href="homepage"><span className="logo"></span></a>
                <h3>Resource Management System</h3>
                <Link onClick = {logout} style = {{float:"right", paddingTop:"40px", paddingRight: "30px"}} to=''>Logout</Link>
                <SearchComponent />
                
            </div>
            <div className="side-nav">
                <Link to="/campuses">
                    <a><div className="navitem">Campuses</div></a>
                </Link>
                <Link to="/buildings">
                    <a><div className="navitem">Buildings</div></a>
                </Link>
                <Link to="/rooms">
                    <a><div className="navitem">Rooms</div></a>
                </Link>
                <Link to="/employees">
                    <a><div className="navitem">Employees</div></a>
                </Link>
            </div>
        </>
    );
}
