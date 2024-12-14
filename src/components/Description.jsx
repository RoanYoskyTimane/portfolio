import React from "react";

function Description({name, image}) 
{
    return(
        <div className="tech">
        <img src={image} className="icon"/>
        <p>{name}</p>
    </div>
    );    
}

export default Description;