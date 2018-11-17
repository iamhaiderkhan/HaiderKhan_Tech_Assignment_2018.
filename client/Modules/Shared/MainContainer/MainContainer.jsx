import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route, Redirect, Link,Switch } from 'react-router-dom';
import {isLoggedIn, userLogin} from "../../../Lib/API/auth"
// import {IndexRoute } from 'react-router';

//Modules
import Login from "../../Authentication/Login/Login.jsx";
import Dashboard from "../../Dashboard/Dashboard.jsx";
// import Users from "../../Dashboard/Users/Users.jsx";
// import Interests from "../../Dashboard/Interests/Interests.jsx"
// import StyleGuide from "../StyleGuide/StyleGuide.jsx";

// import { PrivateRoute } from '../../../lib/utils/PrivateRoute.jsx';
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log(isLoggedIn())
  }


  
  render() {
    return (
    
      <div className="container-fluid">
         <Route path="/login" component={Login}/>
         <Route path="/dashboard" component={ Dashboard } />
      </div>
   
    )
  }
}
export default MainContainer;