import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  ListGroup, ListGroupItem, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { ReviewList } from "../../../Lib/Json/reviews"
import * as _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarRatings from 'react-star-ratings';



class Reviews extends Component {
  constructor(props) {
    super(props)
  }

  getReviewList() {
    return _.map(ReviewList, (x, index) => {
      return (
        <div className="col-md-4 mb-2" key={'task' + index}>

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
  render() {
    return (
      <div className="reviews-component">
        <h2 className="mt-3">Reviews   <Button className="add-review fr" color="success" onClick={()=>{this.props.history.push('./reviews/add-review')}}>Add Review</Button></h2>
        <div className="col-md-12 mt-5">
          <div className="row">
            {this.getReviewList()}
          </div>
        </div>
      </div>
    )
  }
}



export default Reviews;