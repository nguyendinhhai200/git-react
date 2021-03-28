import React from 'react';
import { Card , CardImg, CardImgOverlay , CardText , CardBody , CardTitle} from 'reactstrap';

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
            return(
                <div className='container'>
                    <div className="row m-1">
                    <div className="col-md-5 col-xs-12 ">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-md-5 col-xs-12 ">
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments}/>
                    </div>

                 </div>
            </div>
            )
        }
        else{
            return (
                <div></div>
            )
        }
    }
   

export default DishDetail;