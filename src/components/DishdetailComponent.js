import React from 'react';
import { Card , CardImg, BreadcrumbItem, Breadcrumb, Button , CardImgOverlay , CardText ,Row,Label, CardBody, FormGroup, Input, Modal, ModalBody, CardTitle, ModalHeader, Form, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import {Control, LocalForm, Errors  } from 'react-redux-form';
import {Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    function RenderDish({dish}) {
        return(
                <div>
                    <Card>
                    <CardImg top src={ baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                    </Card>
                </div>
            );
    }

    function RenderComments({comments , addComment, dishId} ){
       
        if(comments !=null ){
            return(
                <div className="col-12 col-md-12 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((cmt) =>{
                            return (
                                <li key={cmt.id}> 
                                    <p>{cmt.comment}</p>
                                    <p>-- {cmt.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</p>
                                 </li>
                            );
                        })}
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment}></CommentForm>
                </div>
            )
        }
        else
            return (
                <div></div>
            )
        
    }

    const DishDetail = (props) => {
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(props.errMess){
            <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
            </div>
        }
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
                        <RenderComments comments={props.comments}  addComment={props.addComment} 
                            dishId={props.dish.id}/>
                        <br/>
                        
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModelSubmit(){
        this.setState({
            isModelSubmit : !this.state.isModelSubmit,
        })
    }

    handleSubmit(values){
        this.toggleModelSubmit();
        console.log(values)
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment); 
    }

    render(){
        return (
            <div>
                <Button outline onClick={this.toggleModelSubmit}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isModelSubmit} >
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                          <LocalForm onSubmit={(values) => {this.handleSubmit(values)}}> 
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
                                    <Control.text model=".author" id="author" name="author"
                                    className="form-control"
                                    validators={{
                                        required , minLength : minLength(3), maxLength:maxLength(15)
                                    }}
                                    />
                                    <Errors className="text-danger"
                                     model=".author"
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
                                    <Control.textarea model=".comment" id="comment" name="comment"
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