import { useEffect, router, useState } from "../../../utilities"
import { projects } from "../../data"
import { v4 as uuidv4 } from 'uuid';

const AdminProjectsEdit = ({ id }) => {
    // console.log(id)
    // const projects = JSON.parse(localStorage.getItem("projects")) || [];
    // const currentProject = projects.find((projects) => projects.id === id);

    // console.log(currentProject);

    //API
    const [project, setProject] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`).then((reponse) => reponse.json()).then((data) => {
            setProject(data);
        });
    }, []);
    useEffect(() => {
        const form = document.getElementById('form-add');
        const projectsName = document.getElementById('projects-name');
        const projectsDescription = document.getElementById('projects-description');

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const formData = {
                id: id,
                name: projectsName.value,
                description: projectsDescription.value,

            };
            fetch(`http://localhost:3000/projects/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            }).then(() => {
                router.navigate("/admin/projects");
            });
            // const newProject = projects.map(project => {
            //     return project.id === newProjects.id ? newProjects : project;
            // });
            // localStorage.setItem('projects', JSON.stringify(projects));

        });

    });
    //  if (!currentProject) return null;
    return `
    <div class="container">
    <h1>Cập nhật dự án</h1>
    <form action=""id="form-add">
        <div class="form-group mb-3">
            <label for="">Tên dự án</label>
            <input type="text" id="projects-name" class="form-control"value="${project.name}">
        </div>
        <div class="form-group mb-3">
            <label for="">Mô tả dự án</label>
            <input type="text" id="projects-description" class="form-control value="${project.description}">
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Cập nhật</button>
        </div>
    </form>
    </div>
       `
}


export default AdminProjectsEdit;
