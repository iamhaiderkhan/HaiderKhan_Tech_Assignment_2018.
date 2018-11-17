import React, {Component} from 'react';
import {render} from 'react-dom';
import { ListGroup, ListGroupItem,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import {TeamList} from "../../../Lib/Json/team"
import * as _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarRatings from 'react-star-ratings';


class Team extends Component {
  constructor(props){
    super(props)
  }
  getTeamList(){
    return _.map(TeamList, (x,index)=>{
      return (
        <div className="col-md-4 mb-2" key={'task'+index}>
       
         <Card>
        <CardImg top width="100%" src={x.imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle>{x.name}</CardTitle>
          <StarRatings
          rating={x.rating}
          starRatedColor="yellow"
        
          numberOfStars={5}
          name='rating'
        />
        
        </CardBody>
      </Card>

        </div>
      )
    })
  }
  render(){
    return(
     <div className="team-component">
   <h2 className="mt-3">Team</h2>
     <div className="col-md-12 mt-5">
     <div className="row">
     {this.getTeamList()}
     </div>
  
     </div>
     </div>
    )
  }
}



export default Team;