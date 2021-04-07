import React from 'react';
import { Card , CardImg, BreadcrumbItem, Breadcrumb, Button , CardImgOverlay , CardText ,Row,Label, CardBody, FormGroup, Input, Modal, ModalBody, CardTitle, ModalHeader, Form, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import {Control, LocalForm, Errors  } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    function RenderDish({dish}) {
        return(
                <div>
                    <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
                </div>
            );
    }
    function RenderComments({comments} ){
        let listComments =  [];
            for(let i = 0 ; i < comments.length; i++){
                let temp = "--" + comments[i].author.concat(", ").concat(comments[i].date.substring(0,11));
                listComments.push([comments[i].comment,temp]);
            }
            console.log(listComments);
            const results = listComments.map((element) => {
                return(
                    <div>
                        <h5>{element[0]}</h5>
                        <h5>{element[1]}</h5>
                    </div>
                )
             });
             return results;
    }

    const DishDetail = (props) => {
        if(props.dish != null){
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                        <br/>
                        <CommentForm/>
                    </div>
                    
                </div>
                </div>
            );
        }
        else{
            return (
                <div></div>
            )
        }
    }
class CommentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isModelSubmit : false,
        }
        this.toggleModelSubmit = this.toggleModelSubmit.bind(this);
        this.RenderComments = this.RenderComments.bind(this);
    }
    toggleModelSubmit(){
        this.setState({
            isModelSubmit : !this.state.isModelSubmit,
        })
    }

    RenderComments(values){
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render(){
        return (
            <div>
                <Button outline onClick={this.toggleModelSubmit}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModelSubmit} toggle={this.toggleModelSubmit}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                          <LocalForm onSubmit={(values) => {this.RenderComments(values)}}> 
                            <Row>
                                <Label md={{offset:1}}>Rating</Label>
                            </Row>
                            <Row>
                                <Col md={10}>
                                    <Control.select model=".rating" name="rating"
                                    className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row>
                                <Label md={{offset:1}}>Your Name</Label>
                            </Row>
                            <Row>
                                <Col md={10}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                    className="form-control"
                                    validators={{
                                        required , minLength : minLength(3), maxLength:maxLength(15)
                                    }}
                                    />
                                    <Errors className="text-danger"
                                     model=".yourname"
                                    show="touched"
                                    messages={{
                                        required : "Required",
                                        minLength : "Must be greater 2 characters",
                                        maxLength : "Must be 15 characters or less"
                                    }}>
                                    </Errors>
                                </Col>
                            </Row>
                            <Row>
                                <Label md={{offset:1}}>Comment</Label>
                            </Row>
                            <Row>
                                <Col md={10}>
                                    <Control.textarea model=".Comment" id="comment" name="comment"
                                    className="form-control"
                                    rows="6"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{size: 10 , offset:1}}>
                                    <Button type="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}



export default DishDetail;