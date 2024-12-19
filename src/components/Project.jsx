import React from "react";
import work from "./my_work.js"
import Card from "./Card.jsx";

function createCardComponent(work) 
{
    return (
        <Card key={work.id} name={work.name} image={work.image} description={work.description_project} />
    );
}

function Project() 
{
    return(
        <section id="project">
        <h2>Projects</h2>
        <div className="card-container">
            {work.map(createCardComponent)}
        </div>
        
    </section>
    
    );
}

export default Project;