
import React from 'react';
import './Rms.css';
import './App.css';
import HomeComponent from './components/Home-component/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeDetailsComponent from './components/employee-details-component/EmployeeDetailsContainer';
import NavbarComponent from './components/navbar-component/NavbarComponent';
import EmployeesComponent from './components/Employees-component/EmployeesContainer';
import RoomDetailsComponent from './components/room-details-component/RoomDetailsContainer';
import RoomListComponent from './components/rooms-list-component/RoomListContainer';
import CampusComponent from './components/campus-component/CampusContainer';
import BuildingListComponent from './components/building-list-component/BuildingListContainer';
import LoginComponent from './components/login-component/LoginContainer';
import { BuildingDetailsComponent } from './components/building-details-component/BuildingDetailsComponent';
import { EmployeeGlobalComponent } from './components/global-search-components/EmployeeGlobalComponent';



class AppComponent extends React.Component<any, any> {
  
  // this check if a user is logged in
  // const login = useSelector((state: IState) => state.userState.loggedIn)
  // if loggen, we return most details for the application
  render(){
  if (this.props.loggedIn) {
    return (
      <div data-test="main-content">
        <Router>
          <NavbarComponent />
          <Switch>
            <Route path='/login' component={LoginComponent} />
            <Route path='/buildings' component={BuildingListComponent} />
            <Route path='/building/:id' component={BuildingDetailsComponent} />
            <Route path='/employees' component={EmployeesComponent} />
            <Route path='/employee-details' component={EmployeeDetailsComponent} />
            <Route path='/employee/:id' component={EmployeeGlobalComponent} />
            <Route path='/campuses' component={CampusComponent} />
            <Route path='/room-details' component={RoomDetailsComponent} />
            <Route path='/rooms' component={RoomListComponent} />
            <Route path='/' component={HomeComponent} />
          </Switch>
        </Router>
      </div>
    );
  } else {
    // we show only the login page if the user is not logged in
    return (
      <div data-test="login-content">
      <Router>
        <Switch>
          <Route path='/login' component={LoginComponent} />
          <Route path='/' component={LoginComponent} />
        </Switch>
      </Router>
      </div>
    )
  }}
}

export default AppComponent;
