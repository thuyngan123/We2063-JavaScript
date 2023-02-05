
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
    return `<div>
    ${projects.map((project) => `${ProjectItem({ project })}`)
            .join("")};`
};
export default ProjectList;
//cài đặt extension reactjs/es7
//gõ rafce
