import React, {Component} from 'react';
import {render} from 'react-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {TasksList} from "../../../Lib/Json/tasks"
import * as _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Tasks extends Component {
  constructor(props){
    super(props)
  }

  getTasksList(){
    return _.map(TasksList, (x,index)=>{
      return (
        <div className="mb-2" key={'task'+index}>
           <ListGroup>
        <ListGroupItem>
          <div className="row">
            <div className="col-md-11">
            <h5>Title: {x.title}</h5>
          <h6>Description: {x.description}</h6></div>
            <div className="col-md-1">
            <FontAwesomeIcon className="mr-2" icon="edit" />
            <FontAwesomeIcon icon="eye" />
            </div>
          </div>
        
         
        </ListGroupItem>
        
      </ListGroup>
        </div>
      )
    })
  }
  render(){
    return(
     <div className="tasks-component">
     <h2 className="mt-3">Tasks</h2>
     <div className="col-md-12 mt-5">
    {this.getTasksList()}
     </div>
  
     </div>
    )
  }
}



export default Tasks;