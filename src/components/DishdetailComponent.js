import React from 'react';
import { Card , CardImg, BreadcrumbItem, Breadcrumb , CardImgOverlay , CardText , CardBody , CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
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
   

export default DishDetail;