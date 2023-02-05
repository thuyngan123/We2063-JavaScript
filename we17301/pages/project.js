import Header from "../components/header";
import ProjectList from "../components/ProjectList";
import { projects } from "../data";
const projectPage = () => {
    return `
    ${Header()}
    <div>  ${ProjectList({ projects })}</div>
    `;
};
export default projectPage;
// console.log(projectPage());
// document.querySelector("#app").innerHTML = projectPage();