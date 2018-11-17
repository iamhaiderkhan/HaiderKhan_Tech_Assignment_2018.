import React, {Component} from 'react';
import {render} from 'react-dom';
import MainContainer from "./MainContainer/MainContainer.jsx"



class Layout extends Component {
constructor(props){
  super(props)
}
 

  componentDidMount(){
    localStorage.setItem('email', 'haider.khan@bayt.net');
    localStorage.setItem('password', '_bayt.!!');
  }
  render(){
    return(
     <div className="layout">
     <MainContainer/>
     </div>
    )
  }
}



export default Layout;