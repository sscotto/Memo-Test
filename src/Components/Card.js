import React,  { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import './Card.css'
import CardBack from '../images/back_card.jpg';

export default function Card(props) {    
    const [showImg, setShowImg] = useState(false);    
    const [useGrayImg, setUseGrayImg] = useState(false);

    useEffect(() => {                      
        if (typeof props.number !== 'undefined' 
                && typeof props.availables !== 'undefined' 
                && !props.availables.includes(props.number)){
            setUseGrayImg(true);
        }
        return () => { }            
    },[props.availables])

    const revealNumber = () => {              
        setShowImg(props.onReveal(props.number));             
    }

    const hideNumber = () => {
        if (props.canHide(props.number))
        {
            props.onHide(props.number);
            setShowImg(false);
        }        
    }

    return (               
        <div className="col-sm-3">  
        {console.log("Rendering:", props.number)}                
            <input 
                type="image" 
                onClick={revealNumber} 
                className="img-card" 
                src={CardBack}
                style={{display: showImg ? 'none' : 'inline'}}
                >
            </input>       
            <input 
                type="image"
                onClick={hideNumber}          
                className="img-card"
                src={!useGrayImg ? props.buildImageUrl(props.number): props.buildGrayImageUrl(props.number)}
                style={{display: showImg ? 'inline' : 'none'}}     
                >
            </input>
        </div>
        );
}

Card.propTypes  = {
    buildImageUrl: PropTypes.func,
    buildGrayImageUrl: PropTypes.func,
    number: PropTypes.number,    
    onReveal: PropTypes.func,
    onHide: PropTypes.func,
    canHide: PropTypes.func,
    availables: PropTypes.array
}