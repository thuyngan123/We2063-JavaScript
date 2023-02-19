import Header from "../../components/Header"
import PageProjects from "../../components/ProjectsDetail"
import AboutPage from "../About"
import Contact from "../Contact"
import footer from "../footer"
import Nav from "../Nav"
import ServicePage from "../Service"


const HomeAdmin = () => {
    return `
    ${Nav()}
    ${Header()}
    ${ServicePage()}
    ${PageProjects()}
    ${AboutPage()}
    ${Contact()}
    ${footer()}
  `
}

export default HomeAdmin;
