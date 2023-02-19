import { projects } from "../data";
const ProjectDetailPage = ({ id }) => {
    //tìm kiếm
    const project = projects.find((projects) => projects.id === +id);
    if (!project) return null;
    return `
    <div>
    ${project.name}
    </div>`
}

export default ProjectDetailPage;
