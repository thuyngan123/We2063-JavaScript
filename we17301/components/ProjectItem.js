const ProjectItem = ({ projects }) => {
    return (`<div><a href="/project/${projects.id}">${projects.name})</a></div>`)
}
export default ProjectItem;