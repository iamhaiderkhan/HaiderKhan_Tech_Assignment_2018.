import React, {Component} from 'react';
import {render} from 'react-dom';
import _SideBar from "./_SideBar.scss";
import {Link}from "react-router-dom";
import {ListGroupItem}from "reactstrap";

class SideBar extends Component {
  render(){
    return(
   
   <div className="col-md-2 p-0 sidebar">
        <div className="col-md-12 sidebar-logo-section test-center"> <Link to={`/dashboard`}><span className="icon-logo"></span></Link></div>
        <div className="sidebar-list">
   
        <Link to={`/dashboard`}> <ListGroupItem > Tasks  </ListGroupItem> </Link>
        <Link to={`/dashboard/reviews`} >  <ListGroupItem >  Reviews</ListGroupItem></Link>
        <Link to={`/dashboard/team`} > <ListGroupItem >  Team</ListGroupItem></Link>
        <Link to={`/login`} onClick={()=>{
           localStorage.setItem('authentication', '');
        }} >  <ListGroupItem >  Logout</ListGroupItem></Link>
        </div>
      </div>
    
    )
  }
}



export default SideBar;