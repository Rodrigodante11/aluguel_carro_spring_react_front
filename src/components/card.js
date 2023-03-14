import React from 'react';
import '../styles/card.css';

class Card extends React.Component{
    
    render(){
        return(
           <div className='card mb-3 mt-4' id='cardCars'>
                
                <h3 className="card-header">
                    {this.props.title}
                </h3>
                <div className="card-body">
                    
                    {this.props.children}
                </div>
           </div> 
        )
    }
}

export default Card;