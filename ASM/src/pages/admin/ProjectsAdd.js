import { useEffect, router } from "../../../utilities"
// import { projects } from "../../data"
import { v4 as uuidv4 } from 'uuid';

const AdminProjectsAdd = () => {
    // const projects = JSON.parse(localStorage.getItem('projects')) || [];
    useEffect(() => {
        const form = document.getElementById('form-add');
        const projectsName = document.getElementById('projects-name');
        const projectsDescription = document.getElementById('projects-description');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const newProjects = {
                id: uuidv4(),
                name: projectsName.value,
                description: projectsDescription.value,

            }
            fetch("http://localhost:3000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newProjects),
            }).then(() => {
                router.navigate('/admin/projects');
            });

            // projects.push(newProjects);
            //lưu lại storage
            // localStorage.setItem('projects', JSON.stringify(projects));
            //redirect sang admin/projects
            // router.navigate('/admin/projects');
        });
    });
    return `
    <div class="container">
    <h1>Thêm dự án</h1>
    <form action="" id="form-add">
        <div class="form-group mb-3">
            <label for="">Tên dự án</label>
            <input type="text" id="projects-name" class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">Mô tả dự án</label>
            <input type="text" id="projects-description" class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">Image</label>
            <input type="file" id="projects-img" class="form-control">
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Thêm dự án </button>
        </div>
    </form>
    </div>
  `
}

export default AdminProjectsAdd;
