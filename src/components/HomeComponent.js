import React , {Component} from 'react';
import RenderCard from './RenderCardComponent';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked : false
        }
    }
    handleClick = (id) => {
        this.props.ShuffleArray(this.props.images);
        this.props.handleScore(id);
    }
    
    
    render() {
        return(
            <div className="container" id="m">
                <div className="row">
                    <h3>Your Score : {this.props.current_score}</h3>
                </div>
                <div className="row">
                    {this.props.images.map( (sp) => (
                        <RenderCard 
                            handleClick= {this.handleClick}
                            id = {sp.id} 
                            image={sp.image} 
                            name = {sp.name}
                        />
                    ))}
                </div>       
            </div>
        );
    }    
}
export default Home;