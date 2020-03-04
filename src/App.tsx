
import React from 'react';
import './App.css';
import { HomeComponent } from './components/Home-component/HomeComponent';
import { Provider } from 'react-redux';
import { store } from './Store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EmployeeDetailsComponent } from './components/EmployeeDetails-component/EmployeeDetailsComponent';


const App: React.FC = () => {
  return (

    <div>
      <Provider store={store}>

        <Router>
          <Switch>
            <Route path='/employee-details' component={EmployeeDetailsComponent} />
            <Route path='/' component={HomeComponent} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
