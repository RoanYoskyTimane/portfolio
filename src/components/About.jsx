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



function About() 
{
    return(
        <section id="aboutMe">
            <div class="aboutMe-Hero">
                <h2 id="whoAmI">About Me</h2>
                <p>I'm a driven Computer Engineering student with a strong passion for technology and problem-solving. Through various college and independet projects, I've demonstrated my proficiency in programming languages, frameworks, and a solid grasp of algorithms and data structures. I am eager to apply my knowledge, take on real-world challenges, and contribute effectively to innovative tech solutions. I'm motivated, quick to learn, and ready to make a meaningful impact in the field.
                </p>
            </div>    
            <div className="skill-Hero">
                <h2 id="whoAmI">Skills</h2>
                <div id="all">
                    {frontend.map(createDescriptionFrontend)}
                    {backend.map(createDescriptionBackend)}
                </div>
            </div>
            
        </section>
    );    
}

export default About;