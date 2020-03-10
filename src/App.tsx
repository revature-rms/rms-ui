
import React from 'react';
import './Rms.css';
import './App.css';
import { HomeComponent } from './components/home-component/HomeComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  EmployeeDetailsComponent  from './components/employee-details-component/EmployeeDetailsContainer';
import NavbarComponent from './components/navbar-component/NavbarComponent';
import EmployeesComponent  from './components/employees-component/EmployeesContainer';
import RoomDetailsComponent from './components/room-details-component/RoomDetailsContainer';
import RoomListComponent from './components/rooms-list-component/RoomListContainer';
import CampusComponent  from './components/campus-component/CampusContainer';


const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavbarComponent />
          <Switch>
            <Route path='/employees' component={EmployeesComponent} />
            <Route path='/employee-details' component={EmployeeDetailsComponent} />
            <Route path='/campuses' component = {CampusComponent}/>
            <Route path='/room-details' component={RoomDetailsComponent}/>
            <Route path='/rooms' component={RoomListComponent}/>
            <Route path='/' component={HomeComponent} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
