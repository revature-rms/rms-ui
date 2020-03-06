
import React from 'react';
import './Rms.css';
import './App.css';
import { HomeComponent } from './components/Home-component/HomeComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EmployeeDetailsComponent } from './components/EmployeeDetails-component/EmployeeDetailsComponent';
import NavbarComponent from './components/navbar-component/NavbarComponent';
import EmployeesComponent  from './components/Employees-component/EmployeesContainer';
import RoomDetailsComponent from './components/room-details-component/RoomDetailsContainer';


const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <NavbarComponent />
          <Switch>
            <Route path='/employees' component={EmployeesComponent} />
            <Route path='/employee-details' component={EmployeeDetailsComponent} />
            <Route path='/room-details' component={RoomDetailsComponent}/>
            <Route path='/' component={HomeComponent} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
