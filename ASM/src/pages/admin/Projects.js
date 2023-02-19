import { useEffect, useState } from "../../../utilities";
import { projects } from "../../data";
const ProjectsAdminPage = () => {
    //lưu truex gtrij
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((data) => setProjects(data));
        // const projects = JSON.parse(localStorage.getItem('projects')) || [];
        // console.log("ok")
        // setData(projects);
    }, []);
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        // console.log(btns);
        for (let btn of btns) {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                fetch(`http://localhost:3000/projects/${id}`, {
                    method: "DELETE",
                }).then(() => {
                    const newProjects = projects.filter((project) => project.id !== +id);
                    setProjects(newProjects);
                    // console(newProjects);
                });

            });
        }
    });
    return /*html*/`
    <div div class="container" >
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Mô tả dự án</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${projects.map((project, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${project.name}</td>
            <td>
            <label for="">${project.description}</label id="projects-description">
           </td>
            <td>
                <button data-id="${project.id}" class="btn btn-danger btn-remove">Xóa</button>
                <a href="/admin/projects/${project.id}/edit">Sửa</a>
            </td>
        </tr>
    `).join("")}

            </tbody >
        </table >
    </div>
    `;
};


export default ProjectsAdminPage;
