import { render, router } from "./lib";
// import "boostrap/dist/css/boostrap.min.css";
import aboutPage from "./pages/about";
import AdminProjectPage from "./pages/admin/projects";
import ContactPage from "./pages/contact";
import homePage from "./pages/home";
import NotFound from "./pages/not-found";
import PostPage from "./pages/post";
import Postdetail from "./pages/post-detail";
import ProjectPage from "./pages/project";
import Projectdetail from "./pages/project-detail";
// import './style.css';
const app = document.querySelector("#app");
router.on("/", () => render(homePage, app));
router.on("/about", () => render(aboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/post", () => render(PostPage, app));
router.on("/project/:id", (params) => render(() => ProjectDetailPage(params), app));
router.on("/project", () => render(ProjectPage, app));
router.on("/post/:id", () => render(Postdetail, app));
router.on("/project-detail/:id", () => render(Projectdetail, app));
router.notFound(() => render(NotFound, app));
router.on("/admin/projects", () => render(AdminProjectPage, app));
router.resolve();



// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

//callback:
// const display = (content) => {
//     document.querySelector('#app').innerHTML = content;

// };
// const sum = (a, b, callback) => {
//     const result = a + b;
//     callback(result);
// }
// sum(a, b, display)