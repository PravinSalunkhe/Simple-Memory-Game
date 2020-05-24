import React  from 'react';
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function Rules(props) {
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Rules</BreadcrumbItem>
            </Breadcrumb>
            <div className="row offset-1">
                <h4>Rules</h4>
            </div>
            <div className="row offset-1">       
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">You are presented with multiple images of sports persons.</li>
                    <li className="list-group-item">The images get shuffled every-time they are clicked.</li>
                    <li className="list-group-item">You should remember the images you have clicked.If you click the same image more than once,game will be over.</li>
                    <li className="list-group-item">The result will be displayed once the game ends with the participant’s score.</li>
                </ul>
            </div>
        </div>
    );
}

export default Rules;