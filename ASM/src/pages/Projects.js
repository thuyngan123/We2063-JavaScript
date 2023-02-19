// import { projects } from "../data";

import ProjectsList from "../components/ProjectsList";
// import PageProjects from "../components/Projects";
const ProejectsPage = () => {
    return `
    <div class="container"
        <div class="tw-col" >
        ${ProjectsList({ projects })}
 </div></div>`;
};
export default ProejectsPage;

