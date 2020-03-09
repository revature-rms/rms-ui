
import React from 'react';
import './Rms.css';
import './App.css';
import { HomeComponent } from './components/home-component/HomeComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EmployeeDetailsComponent } from './components/employee-details-component/EmployeeDetailsComponent';
import NavbarComponent from './components/navbar-component/NavbarComponent';
import EmployeesComponent  from './components/employees-component/EmployeesContainer';
import RoomDetailsComponent from './components/room-details-component/RoomDetailsContainer';
import { SearchComponent } from './components/search-component/SearchComponent';


const App: React.FC = () => {
  return (
    <>
      {/* <Provider store={store}>
        <Router>
          <NavbarComponent />
          <Switch>
            <Route path='/employees' component={EmployeesComponent} />
            <Route path='/employee-details' component={EmployeeDetailsComponent} />
            <Route path='/room-details' component={RoomDetailsComponent}/>
            <Route path='/' component={HomeComponent} />
          </Switch>
        </Router>
      </Provider> */}
      <SearchComponent/>
    </>
  );
}

export default App;
