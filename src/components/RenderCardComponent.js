import React from 'react';
import {Card , CardBody , CardImg , CardTitle } from 'reactstrap';

function RenderCard(props) {
    return (           
            <Card key = {props.id} className="col-md-2 m-1" onClick = {() => props.handleClick(props.id)} >
                <CardTitle></CardTitle>
                <div className="img-container">
                    <CardImg width="100%" alt={props.name} src={props.image}></CardImg>
                </div>
            </Card>
    );
}

export default RenderCard;