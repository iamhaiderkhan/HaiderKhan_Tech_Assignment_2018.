import React, {Component} from 'react';
import {render} from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Reviews from "./Reviews/Reviews.jsx";
import AddReview from "./Reviews/AddReview/AddReview.jsx";
import Tasks from "./Tasks/Tasks.jsx";
import Team from "./Team/Team.jsx";
import SideBar from './SideBar/SideBar.jsx';



class Dashboard extends Component {
  constructor(props){
    super(props)
   
  }
  render(){
    return(
      <div className="dashboard-container">
      <div className="row">
        <SideBar />
        <div className="col-md-10 dashboard-layout" >
          <Switch>
            <Route exact path="/dashboard" component={Tasks}></Route>
            <Route exact path="/dashboard/reviews" component={Reviews}></Route>
            <Route exact path="/dashboard/reviews/add-review" component={AddReview}></Route>
            <Route exact path="/dashboard/team" component={Team}></Route>
          </Switch>
         
        </div>
      </div>
    </div>
    )
  }
}



export default Dashboard;