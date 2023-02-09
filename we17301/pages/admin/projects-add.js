
import { projects } from "../../data";
import { router, useEffect } from "../../lib";

const AdminAddProjectsPage = () => {
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-name");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      //Tạo ra một projects mới lấy dũ liêu từ form
      const formData = {
        name: projectName.value,
        img: "",

      };
      //call api và tham phần tử
      //GET,POST,PUT,DELETE
      fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
          "Contend-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json()).then((data) => console.log(data));
      //chuyển hướng về trang quản lí dụ án
      router.navigate("/admin/projects")
      // projects.push(newObject);
      // router.navigate("/admin/projects")
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
