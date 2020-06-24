
import React from 'react';
// import './Rms.css';
// import './App.css';
import "./styles/main.scss";
import HomeComponent from './components/home-component/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeDetailsComponent from './components/employee-details-component/EmployeeDetailsContainer';
import NavbarComponent from './components/navbar-component/NavbarContainer';
import EmployeesComponent from './components/employees-list-component/EmployeesContainer';
import RoomDetailsComponent from './components/room-details-component/RoomDetailsContainer';
import RoomListComponent from './components/rooms-list-component/RoomListContainer';
import CampusListComponent from './components/campus-list-component/CampusListContainer';
import CampusDetailsComponent from './components/campus-details-component/CampusDetailsContainer';
import LoginComponent from './components/login-component/LoginContainer';
import BuildingDetailsComponent from './components/building-details-component/BuildingDetailsComponent';
import { EmployeeGlobalComponent } from './components/global-search-components/EmployeeGlobalComponent';
import BuildingListComponent from './components/building-list-component/BuildingListContainer';
import { store } from './Store';
import { Provider } from 'react-redux';



class AppComponent extends React.Component<any, any> {

  // this check if a user is logged in
  // const login = useSelector((state: IState) => state.userState.loggedIn)
  // if loggen, we return most details for the application
  render(){
  if (this.props.currentUser) {
    document.body.style.overflow = "auto";
    return (
      <div data-test="main-content">
        
        <Router>
            <NavbarComponent />
            <Switch>
              {/* <Route path='/login' component={LoginComponent} /> */}
              <Route exact path='/campuses/:id' component={CampusDetailsComponent} />
              <Route path='/employees' component={EmployeesComponent} />
              <Route path='/employees/:id' component={EmployeeDetailsComponent} />
              <Route path='/campuses' component={CampusListComponent} />
              <Route path='/buildings/:id' component={BuildingDetailsComponent} />
              <Route path='/buildings' component={BuildingListComponent} />
              <Route path='/rooms/:id' component={RoomDetailsComponent} />
              <Route exact path='/rooms' component={RoomListComponent} />
              <Route path='/' component={HomeComponent} />
            </Switch>
        </Router>
        
      </div>
    )
  } else {
    document.body.style.overflow = "hidden";
    window.scrollTo(0,0);
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
  }
  }
}

export default AppComponent;
