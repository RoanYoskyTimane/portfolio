import React from "react";

function Card({name, image, description}) 
{
    return (
        <div className="card">
            <img src={image} alt="" />
            <div className="card-content">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;