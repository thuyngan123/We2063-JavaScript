import Header from "../components/header";
import { router } from "../lib";
import { projects } from "../data";
import ProjectGallery from "../components/ProjectGallery";
import ProjectInfo from "../components/ProjectInfo";
const ProjectDetailPage = ({ data: { id } }) => {
    // find
    const currentProject = projects.find((project) => project.id == id);
    console.log(currentProject);
    if (!currentProject) return router.navigate("/projects");

    return `
    ${Header()}
    <main>
        ${ProjectGallery({ project: currentProject })}
        <div>
            ${ProjectInfo({ project: currentProject })}
        </div>
    </main>
    `;
};
export default ProjectDetailPage;
