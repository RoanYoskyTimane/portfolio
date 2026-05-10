import palma from "../assets/images/palma.webp"
import mozgnv from "../assets/images/mozgnv.webp"
import kinetic from "../assets/images/kinetic.png"
import iris from "../assets/images/iris.png"

export const projects = [
    {
        title: 'Kinetic',
        description: 'A web application for managing and tracking fitness activities',
        tags: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
        status: 'completed',
        image: kinetic,
        link: 'https://kinetic.roanyosky.dev'
    },
    {
        title: 'Iris',
        description: 'A web application for uploading and editing images',
        tags: ['React', 'Spring Boot', 'PostgreSQL', 'Docker'],
        status: 'completed',
        image: iris,
        link: 'https://iris.roanyosky.dev'
    },
    {
        title: 'Palma Empreendimentos',
        description: 'A portfolio website made with Vue js for Palma Empreendimentos',
        tags: ['Vue', 'Node.js'],
        status: 'completed',
        image: palma,
        link: 'https://palma-empreendimentos.netlify.app/'
    },
    {
        title: 'MOZGNV',
        description: 'A portfolio website made with Vue js for MOZGNV',
        tags: ['Vue', 'Node.js'],
        status: 'completed',
        image: mozgnv,
        link: 'https://mozgnv.netlify.app/'
    }
];