
import React from 'react';
import './Rms.css';
import './App.css';
import { HomeComponent } from './components/Home-component/HomeComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EmployeeDetailsComponent } from './components/EmployeeDetails-component/EmployeeDetailsComponent';
import { EmployeesComponent } from './components/Employees-component/EmployeesComponent';


const App: React.FC = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet" />
      <html>
        <body>
        <div className="top-bar"><a href="homepage"><span className="logo"></span></a><h3>Resource Management System</h3></div>
        <div className="side-nav">
      <a href="Sample"><div className="navitem">Campuses</div></a>
      <a href="/employee-details"><div className="navitem">Employees</div></a>
      <a href="Sample"><div className="navitem">Profile</div></a>
    </div>
          <div>
            <Provider store={store}>

              <Router>
                <Switch>
                  <Route path='/employees' component={EmployeesComponent} />
                  <Route path='/employee-details' component={EmployeeDetailsComponent} />               
                  <Route path='/' component={HomeComponent} />
                </Switch>
              </Router>
            </Provider>
          </div>
        </body>
      </html>
    </>
  );
}

export default App;
