import React from 'react';
// import './style.css';
// import Col from "react-bootstrap/Col";
function VidBlock(props) {
    return (
        <div>
     <iframe 
     title={props.title}
     width={'100%'} 
     height={350} 
     src={props.src} 
     frameBorder={0} 
     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
     allowFullScreen />

    </div>
    )
}
export default VidBlock;
