import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js ";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import { render, router } from "../utilities";
import NotFoundPage from "./pages/NotFound";
import ProjectDetailPage from "./pages/ProjectDetail";
import ProjectsAdminPage from "./pages/admin/Projects";
import AdminProjectsAdd from "./pages/admin/ProjectsAdd";
import AdminProjectsEdit from "./pages/admin/Projects-edit";
import Nav from "./pages/Nav";
import blog from "./pages/blog";
import ServicePage from "./pages/Service";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageProjects from "./components/ProjectsDetail";

const app = document.querySelector("#app");
router.on('/', () => render(HomePage, app));
router.on('/about', () => render(AboutPage, app));
router.on('/nav', () => render(Nav, app));
router.on('/blog', () => render(blog, app));
router.on('/service', () => render(ServicePage, app));
router.on('/contact', () => render(Contact, app));
router.on('/login', () => render(Login, app));
router.on('/register', () => render(Register, app));
router.on('/projectsdetail', () => render(PageProjects, app));




router.on('/projects', () => render(ProjectsPage, app));
router.on('/projects/:id', ({ data }) => render(() => ProjectDetailPage(data), app));

//admin
router.on('/admin/projects', () => render(ProjectsAdminPage, app));
router.on('/admin/projects/:id/edit', ({ data }) => render(() => AdminProjectsEdit(data), app));
router.on('/admin/projectsadd', () => render(AdminProjectsAdd, app));


router.notFound(() => render(NotFoundPage, app));
router.resolve();

















