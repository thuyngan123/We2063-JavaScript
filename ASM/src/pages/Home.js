import Header from "../components/Header";
import Nav from "./Nav";
import AboutPage from "./About";
import blog from "./blog";
import Contact from "./Contact";
import footer from "./footer";
import ServicePage from "./Service";
import PageProjects from "../components/ProjectsDetail";

const HomePage = () => {
    return `
    ${Nav()}
    ${Header()}
    ${ServicePage()}
    ${PageProjects()}
    ${AboutPage()}
  
    ${Contact()}
    ${footer()}

    
    `;
};
export default HomePage;