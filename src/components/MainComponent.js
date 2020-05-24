import React , {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import {Button} from 'reactstrap';
import {Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { sports_people } from '../people';
import GameEnd from './GameEndComponent';
import Rules from './RulesComponent';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state ={
            sports_persons : sports_people,
            gamestart : false,
            current_score : 0,
            high_score : 15,
            gameend : false
        };
        this.startgame = this.startgame.bind(this);
    }
    startgame() {
        this.setState ({        
            gamestart : !this.state.gamestart
        })
    }
    ShuffleArray = (images) => {
        var c = images.length,index,temp;
        while(c > 0 ) {
            index = Math.floor(Math.random() * c) ;
            c--;
            temp=images[c];
            images[c] = images[index];
            images[index] = temp;
        }
        this.setState ({
            sports_persons : images
        })
    }
    handleScore = (id) => {
        
        this.state.sports_persons.forEach(ele => {
            if(ele.id === id && ele.clicked === false)
            {
                this.setState({                    
                    current_score : this.state.current_score + 1
                });
                ele.clicked = true;
            }
            else if(ele.id === id && ele.clicked === true)
            {
                this.setState({
                    current_score : this.state.current_score,
                    gameend : true
                });
                this.state.sports_persons.forEach(e => {e.clicked = false});
            }
        } );
        if(this.state.current_score === this.state.high_score - 1)
        {
            this.setState({
                gameend : true
            });
            console.log("asdsdsasdsadsa");
            this.state.sports_persons.forEach(e => {e.clicked = false});


        }

    }
    setupagain = () => {
        this.setState({
            current_score : 0,
            gameend : false,
            gamestart : true
        });
    }    

    goingtohomepage = () => {
        this.setState({
            current_score : 0,
            gameend : false,
            gamestart : false
        });
    } 
    
    render() {
        
        const home_variation = () => {
            if(this.state.gameend ===true) {
                return (<GameEnd 
                        final_score={this.state.current_score}
                        setupagain = {this.setupagain} 
                        goingtohomepage={this.goingtohomepage} />);
            }
            else if(this.state.gamestart) {
                return (<Home 
                        images= {this.state.sports_persons} 
                        ShuffleArray = {this.ShuffleArray} 
                        handleScore={this.handleScore}
                        current_score={this.state.current_score}
                        final_score={this.state.final_score}
                        />);
                
            }
            else {
                return (
                <div>
                    <div className="row">
                        <h1 className="font-italic col-12 col-md-5 offset-4">  SIMPLE  MEMORY  GAME </h1>
                        <hr/>
                    </div>
                    <div className="row">    
                        <Button onClick={this.startgame} className="btn-lg col-12 col-md-2 offset-5" color="primary">Start Game</Button>
                    </div>

                </div>
                ); 
            }
        }   
        return(
            <div className="container col-12">
                <Header />
                <div className="jumbotron jumbotron-fluid"> 
                <Switch>
                    <Route path="/home" component= {home_variation} />
                    <Route path="/rules" component = { () => <Rules />} />
                    <Route path="/history" component />
                    <Redirect to="/home" />
                </Switch>
                </div>  
            </div>
        );
    }
}

export default Main;