
import React from 'react';
import './Rms.css';
import './App.css';
import  HomeComponent  from './components/home-component/HomeContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  EmployeeDetailsComponent  from './components/employee-details-component/EmployeeDetailsContainer';
import NavbarComponent from './components/navbar-component/NavbarComponent';
import EmployeesComponent  from './components/employees-component/EmployeesContainer';
import RoomDetailsComponent from './components/room-details-component/RoomDetailsContainer';
import RoomListComponent from './components/rooms-list-component/RoomListContainer';
import CampusComponent  from './components/campus-component/CampusContainer';
import BuildingListComponent from './components/building-list-component/BuildingListContainer';
import  LoginComponent  from './components/login-component/LoginContainer';
import {useSelector} from 'react-redux'
import { IState } from './reducers';



const App: React.FC = () => {
  // this check if a user is logged in
  const login = useSelector((state:IState) => state.userState.loggedIn)

  // if loggen, we return most details for the application
  if(login){
    return (
          <Router>
            <NavbarComponent />
            <Switch>
              <Route path = '/login' component={LoginComponent}/>
              <Route path='/buildings' component={BuildingListComponent} />
              <Route path='/employees' component={EmployeesComponent} />
              <Route path='/employee-details' component={EmployeeDetailsComponent} />
              <Route path='/campuses' component = {CampusComponent}/>
              <Route path='/room-details' component={RoomDetailsComponent}/>
              <Route path='/rooms' component={RoomListComponent}/>
              <Route path='/' component={HomeComponent} />
            </Switch>
          </Router>
    );
  } else{
    // we show only the login page if the user is not logged in
    return(
      <Router>
        <Switch>
        <Route path = '/login' component={LoginComponent}/>
        <Route path = '' component={LoginComponent}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
