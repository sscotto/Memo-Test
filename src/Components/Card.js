import React,  { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import './Card.css'
import CardBack from '../images/back_card.jpg';
import Card1 from '../images/1.png';
import Card1Gray from '../images/1_gray.png';
import Card2 from '../images/2.png';
import Card2Gray from '../images/2_gray.png';
import Card3 from '../images/3.png';
import Card3Gray from '../images/3_gray.png';
import Card4 from '../images/4.png';
import Card4Gray from '../images/4_gray.png';
import Card5 from '../images/5.png';
import Card5Gray from '../images/5_gray.png';
import Card6 from '../images/6.png';
import Card6Gray from '../images/6_gray.png';


const Cards = [ Card1, Card2, Card3, Card4, Card5, Card6 ];
const GrayCards = [ Card1Gray, Card2Gray, Card3Gray, Card4Gray, Card5Gray, Card6Gray ];

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
    },[props.availables, props.number])

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
            <input 
                alt="BackCard"
                type="image" 
                onClick={revealNumber} 
                className="img-card" 
                src={CardBack}
                style={{display: showImg ? 'none' : 'inline'}}
                >
            </input>       
            <input 
                alt="FrontCard"
                type="image"
                onClick={hideNumber}          
                className="img-card"
                src={!useGrayImg ? Cards[props.number - 1]: GrayCards[props.number - 1]}
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