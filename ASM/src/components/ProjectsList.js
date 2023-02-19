// import { projects } from "../data";
const ProjectsList = ({ projects }) => {
    return `
    ${projects.map((projects) => {
        return /*html*/`<div class="container"
        <div class="tw-col" >
        <h3><a href="/projects/${projects.id}">${projects.name}</a></h3>
        <span>${projects.price}</span>
        </div>`
    }).join("")}`;


};

export default ProjectsList
