import { router, useEffect, useState } from "../../lib";

const AdminEditProjectsPage = ({ id }) => {
    //kiểm tra xem localStrange có dữ liệu không?
    //Nếu có thì lấy
    //ngược lại gán mảng rỗng
    const [data, setData] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/post/" + id).then((response) => response.json()).then((data) => setData(data));
    }, []),
        useEffect(() => {
            const form = document.getElementById("form-add");
            const projectName = document.getElementById("project-name");
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                //tạo ra một projects mới lấy dự liệu từ from
                const formData = {
                    id, name: projectName.ariaValueMax,
                    img: "",
                };
                fetch("http://localhost:3000/post" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }).then(() => {
                    router.navigate("/admin/projects");
                });
                //chuyển hướng về trang quản lí dự án
            });
        });
    return `<div class="container">
        <h1>Thêm dự án</h1>
        <form action="" id="form-add">
            <div class="form-group mb-3">
                <label for="" class="form-label">Tên dự án</label>
                <input type="text" class="form-control" id="project-name" value="${data.name}" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Thêm dự án</button>
            </div>
        </form>
    </div>`;
};

export default AdminEditProjectsPage
