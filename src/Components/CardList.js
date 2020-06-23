import React from 'react';
import Card from './Card';
import { PropTypes } from 'prop-types';


const CardList = (props) => {    

   const BuildSrc = (number) => { return "/images/" + number + ".png"; } 
    const BuildGraySrc = (number) => {return "/images/" + number + "_gray.png" }    
  
    return (

        <div className="game-field">             
            <div className="row">                
                <Card 
                    buildImageUrl={BuildSrc} 
                    buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[0]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide} 
                    availables={props.availables} 
                    incrementTries={props.incrementTries} 
                                     
                    />    
                <Card 
                     buildImageUrl={BuildSrc} 
                     buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[1]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}          
                    />    
                <Card 
                     buildImageUrl={BuildSrc} 
                     buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[2]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}           
                    />   
                <Card 
                    buildImageUrl={BuildSrc} 
                    buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[3]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}              
                    />                                                     
            </div>
            <div className="row">                
            <Card 
                    buildImageUrl={BuildSrc} 
                    buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[4]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}            
                    />    
                <Card 
                   buildImageUrl={BuildSrc} 
                   buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[5]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}         
                    />    
                <Card 
                    buildImageUrl={BuildSrc} 
                    buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[6]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}            
                    />   
                <Card 
                    buildImageUrl={BuildSrc} 
                    buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[7]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}             
                    />   
            </div>
            <div className="row">                
                <Card 
                    buildImageUrl={BuildSrc} 
                    buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[8]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}             
                    />    
                <Card 
                   buildImageUrl={BuildSrc} 
                   buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[9]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}           
                    />    
                <Card 
                    buildImageUrl={BuildSrc} 
                    buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[10]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}           
                    />   
                <Card 
                    buildImageUrl={BuildSrc} 
                    buildGrayImageUrl={BuildGraySrc}
                    number={props.cardNumbers[11]} 
                    onReveal={props.addToSelecteds} 
                    onHide={props.removeFromSelecteds} 
                    canHide={props.canHide}   
                    availables={props.availables}  
                    incrementTries={props.incrementTries}           
                    />   
            </div> 
        </div>
        );
}

CardList.propTypes  = {    
    cardNumbers: PropTypes.array,
    addToSelecteds: PropTypes.func,
    removeFromSelecteds: PropTypes.func,
    canHide: PropTypes.func,
    OnCheckAvailables: PropTypes.func,
    availables: PropTypes.array,
    incrementTries: PropTypes.func
}

export default CardList;