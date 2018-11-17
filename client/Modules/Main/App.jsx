import React, {Component} from 'react';
import {render} from 'react-dom';
import Layout from "../Shared/Layout.jsx"
import {userLogin, isLoggedIn} from "../../Lib/API/auth"

class App extends Component {
  constructor(props){
    super(props);
  
  }
  componentDidMount(){
    console.log(isLoggedIn())
    if(!(isLoggedIn())){
      this.props.history.push('/login')
    }else{
      if(window.location.pathname === '/login'){
        this.props.history.push('/dashboard')
      }
      this.props.history.push(window.location.pathname)
    }
  }
  render(){
    return(
      <div className="app">
     <Layout/> 
      </div>
    )
  }
}


export default App;
