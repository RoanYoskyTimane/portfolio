import React from "react";
import frontend from "./frontend.js";
import backend from "./backend.js";
import Description from "./Description.jsx";

function createDescriptionFrontend(frontend)
{
    return(
        <Description key={frontend.id} name={frontend.name} image={frontend.image}></Description>
    );
}

function createDescriptionBackend(backend) 
{
    return(
        <Description key={backend.id} name={backend.name} image={backend.image}></Description>
    );   
}

function Skill() 
{
    return(
        <section id="skills">
        <h2>Skills</h2>
        <div id="all">
        {frontend.map(createDescriptionFrontend)}
        {backend.map(createDescriptionBackend)}
        </div>
    </section>
    
    );
}

export default Skill;