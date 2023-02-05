
import { projects } from "../../data";
import { router, useEffect } from "../../lib";

const AdminAddProjectsPage = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const newObject = {
                id: projects.length + 1,
                name: projectName.value,
                img: "",

            };
            projects.push(newObject);
            router.navigate("/admin/projects")
        });
    });
    return `
        <div class="container">
        <h1>Thêm dự án</h1>
        <form action="" id="form-add">
          <div class="form-group mb-3">
            <label for="" class="form-lable">Tên dự án </label>
            <input type="text" class="form-cotrol"id="project-name">
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Thêm dự án</button>
          </div>
        </form>
      </div>`;

}

export default AdminAddProjectsPage;
