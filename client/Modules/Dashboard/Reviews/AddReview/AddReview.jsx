import React, { Component } from 'react';
import { render } from 'react-dom';

import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import DropToUpload from 'react-drop-to-upload';
class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: 0,
      imageUrls: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.modal = false
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  toggle() {
    // if(!this.state.modal){
    //   this.state[modal]=false
    // }
    // this.setState({
    //   modal: !this.state.modal
    // });
    this.modal = !this.modal;
    this.forceUpdate()
   
  }


  handleSubmit(event) {
    console.log(this.state)
    this.toggle()
    event.preventDefault();

  }
  handleDrop(files) {
    var data = new FormData();

    files.forEach((file, index) => {
      data.append('file' + index, file);
    });

    fetch('/http://atr.com/image', {
      method: 'POST',
      body: data
    });
  }

  changeRating(newRating, name) {
    this.setState({
      rating: newRating
    }, () => { this.forceUpdate() })
  }


  showReview(){
    return(
      <div>
      
        <Modal isOpen={this.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          { JSON.stringify(this.state, null, 2)}
          </ModalBody>
          <ModalFooter>
           
          </ModalFooter>
        </Modal>
      </div>
    )
  }



  render() {
    return (

      <div className="login-component">
        <div className="ilm-logo-section container p-5 text-right">
          <span className="icon-Logo"></span>
        </div>
        <div className="login-form-section">
          <div className="login-form  col-md-4">
            <div className="login-headings text-center mt-5 mb-5">
              <h3 className="white">Add Review</h3>
            </div>


            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label className="white" for="exampleEmail">Name</Label>
                <Input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="exampleEmail" placeholder="name" required />
              </FormGroup>
              <FormGroup>
                <Label className="white" for="examplePassword">Employee</Label>
                <Input type="select" name="employee" id="exampleSelectMulti" onChange={this.handleChange} required>
                  <option value=" "></option>
                  <option value="Permanent">Permanent</option>
                  <option value="probation">On Probation</option>
                </Input>


              </FormGroup>

              <StarRatings
                rating={this.state.rating}
                starRatedColor="yellow"
                changeRating={this.changeRating.bind(this)}
                numberOfStars={5}
                name='rating'
                starHoverColor="yellow"
              />

              <DropToUpload
                onDrop={this.handleDrop.bind(this)}
              >
                <Button className="mt-3" color="info">  Drop file here to upload</Button>
              </DropToUpload>



              <div className="col-md-12 m-0 p-0 row">
                <div className="col-md-6"> <Button className="mt-5" color="success" type="submit" value="Submit" block>SAVE</Button></div>
                <div className="col-md-6"> <Link to={'/dashboard/reviews'}> <Button className="mt-5" color="danger" block>CANCEL</Button></Link> </div>
              </div>
              {this.state.error ? this.props.error : ''}

            </Form>

          </div>
        </div>
  {this.showReview()}
      </div>

    )
  }
}



export default AddReview;