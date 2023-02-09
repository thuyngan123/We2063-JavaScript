// import { projects } from "../../data";
import { useEffect, useState } from "../../lib";
const AdminProjectPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        //kiểm tra xem localStorage có dữ liệu không?
        //     const projects = JSON.parse(localStorage.getItem("projects")) || [];
        //     setData(projects);
        // }, []);
        fetch("http://localhost:3000/post")
            .then((response) => response.json())
            .then((data) => setData());
    }, []);
    //chạy sau khi render
    useEffect(function () {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            const id = btn.dataset.id;
            btn.addEventListener("click", function () {
                const newData = data.filter((project) = project.id != id)
                localStorage.setItem("projects", JSON.stringify(newData));
                setData(newData);
                fetch("http://localhost:3000/post" + id, {
                    method: "DELETE",
                });
            });
        }
    });
    return `<div class="container mt-5">   
        <h1>Quản lí dự án </h1>
        <table class="table table-bordered">
    <thead>
    <tr>
            <th>#</th>
            <th>Tên dự án</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    ${data
            .map((project, index) => {
                return `
            <tr>
                <td>${index + 1}</td>
                <td>${project.name}</td>
                <td width="150">
                    <button data-id="${project.id}" class="btn btn-danger btn-remove">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
            })
            .join("")}
    
</tbody>
</table>
</div>`;
};
export default AdminProjectPage;