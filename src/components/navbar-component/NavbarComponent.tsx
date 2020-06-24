import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../utils/LogoutFunction';
import { AppUser } from '../../dtos/appUser';


export interface INavbarProps {
    currentUser: AppUser | undefined;
    login: (u: string, p: string, action: string) => void // login method that will be passed to login action through container
}
/**
 * The navigation bar that will show up on the left side of every screen. 
 * This might look different depending on what role the logged in user has.
 * Role required: ANY, just will look different for each role.
 * Endpoint: N/A
 */



export default function NavbarComponent(props: INavbarProps) {
    //console.log(props.currentUser.role.includes("Admin", "Training Site Manager", "Building Manager"));

    function isRole(roles: string[]) {
        for (let i = 0; i < roles.length; i++) {
            if (props.currentUser?.role.includes(roles[i])) return true;
        };
        return false;
    }

    function logout() {
        props.login("", "", "logout");
    }

    return (
        //boilerplate material ui clipped drawer link: https://material-ui.com/components/drawers/
        <>
            <div data-test="navbar-top" className="navbar-top">
                <div className="navbar-top-sub">
                    <Link to="/"><div className="logo"></div></Link>
                    <div className="navbar-top-title">Resource Management System</div>
                </div>
                {/* temp remove search functions */}
                <div className="navbar-top-sub-right">
                    {/* <Link onClick={logout} to=''>Logout</Link> */}
                    {/* <SearchComponent /> */}
                </div>
            </div>
            <div data-test="navbar-side" className="navbar-side">
                <Link to="/">
                    <a><div className="navbar-side-btn">Home</div></a>
                </Link>
                {isRole(["Admin", "Training Site Manager"]) ?
                    /*link to campus list*/
                    <Link to="/campuses">
                        <a><div className="navbar-side-btn">Campuses</div></a>
                    </Link>
                    : <></>}
                {isRole(["Admin", "Training Site Manager", "Building Manager"]) ?
                    /*link to building list in a campus*/
                    <Link to="/buildings">
                        <a><div className="navbar-side-btn">Buildings</div></a>
                    </Link>
                    : <></>}
                {isRole(["Admin", "Training Site Manager", "Building Manager", "Trainer"]) ?
                    /*link to room list*/
                    <Link to="/rooms">
                        <a><div className="navbar-side-btn">Rooms</div></a>
                    </Link>
                    : <></>}
                {isRole(["Admin", "Training Site Manager", "Building Manager", "Trainer"]) ?
                    /*link to employee list*/
                    <Link to="/employees">
                        <a><div className="navbar-side-btn">Employees</div></a>
                    </Link>
                    : <></>}
                <Link to="/login" onClick={logout}>
                    <a><div className="navbar-side-btn" >Logout</div></a>
                </Link>
            </div>
        </>
    );
}
