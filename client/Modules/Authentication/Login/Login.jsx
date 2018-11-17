import React, {Component} from 'react';
import {render} from 'react-dom';
import _Login from './_Login.scss'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link} from "react-router-dom";
import {userLogin} from "../../../Lib/API/auth"
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
      error:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log(props, "Login")
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    if(userLogin(this.state)){
      this.props.history.push('/dashboard')
    }else{
      this.setState({error:'Invalid Credentails'},()=>{
        this.forceUpdate()
      })
    }
    event.preventDefault();
  
  }
  render(){
    return(
  
    <div className="login-component">
        <div className="ilm-logo-section container p-5 text-right">
        <span className="icon-Logo"></span>
        </div>
          <div className="login-form-section">
            <div className="login-form  col-md-4">
              <div className="login-headings text-center mt-5 mb-5">
                <h3 className="white">LOGIN</h3>
              </div>


              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label className="white" for="exampleEmail">EMAIL</Label>
                  <Input type="email" value={this.state.email} onChange={this.handleChange} name="email" id="exampleEmail" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <Label className="white" for="examplePassword">PASSWORD</Label>
                  <Input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="examplePassword" placeholder="Password " />
                  <Link to="/forget-password"><Label className="white forgot-password fr" for="forgotpassword">Forgot Password?</Label></Link>
                </FormGroup>

                <Button className="mt-5" color="primary" type="submit" value="Submit" block>LOGIN</Button>
                  {this.state.error ? this.props.error :''}

              </Form>
             
            </div>
          </div>

        </div>
    
    )
  }
}



export default Login;