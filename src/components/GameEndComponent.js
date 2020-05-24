import React , {Component} from 'react';
import {Button,Jumbotron} from 'reactstrap';

function GameEnd(props) {
    if(props.final_score === 15) {
        return (
        <div className="container">
            <Jumbotron >
                <div className="row">
                    <h3>Congrats, you have completed the game.</h3>    
                </div>
                <div className="row">
                    Your Final Score : {props.final_score}
                </div>
                </Jumbotron>
            <Button onClick = {() =>props.setupagain()} className="col-md-2 " color="success" >Play Again</Button>
            <Button onClick ={() => props.goingtohomepage()} className="col-md-2 offset-3"  color="danger" >Go to Home Page</Button>
        </div>
    );  
    }
    else {
        return(
            <div className="container">
                <Jumbotron >Your Final Score : {props.final_score}</Jumbotron>
                <Button onClick = {() =>props.setupagain()} className="col-md-2 " color="success" >Play Again</Button>
                <Button onClick ={() => props.goingtohomepage()} className="col-md-2 offset-3"  color="danger" >Go to Home Page</Button>
            </div>
        );
    }
}

export default GameEnd;