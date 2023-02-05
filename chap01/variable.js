/**
 * Mặc định không sdung var khai báo biến 
 * Thay vào đó sử dụng const
 * Khi xác định giá trị của biến sẽ thay đổi
 */
const products = ["products A", "products B"];
//B1 tạo 1 biến lưu giá trị mỗi vòng lặp

let result = "";
for (let i = 0; i < products.length; i++) {
    result += "<div>" + products[i] + "<div>";
    //Bước 2:Hiển thị kết quả ra ngoài màn hình
}
document.querySelector("#app").innerHTML = result;
//cách đặt tên:Trạng thái bắt buộc phải có has,is
 //ví dụ:hasChild = true
//Tham chiếu:
//Tham trị:
