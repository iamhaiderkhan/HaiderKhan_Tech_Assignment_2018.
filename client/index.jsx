import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import {  Router, Route, Redirect, Link,Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye} from '@fortawesome/free-solid-svg-icons'

library.add(faEdit,faEye)
// import 'jquery';
// import 'bootstrap';
import _Styles from './Styles/_Styles.scss';
import App from './Modules/Main/App.jsx';

class Index extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <BrowserRouter>
      <Route path="/" component={App}/>
      </BrowserRouter>
    )
  }
}

render(<Index />, document.getElementById('app'));