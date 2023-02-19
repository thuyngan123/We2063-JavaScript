<?php
session_start();
include "../model/pdo.php";
include "../model/category.php";
include "../model/products.php";
include "./pages/header/header.php";
$list_statistical = loadall_statistical();
$list_cart = statistical_most_ordered_products();
$list_date = statistical_Statistics_of_the_number_of_orders_by_day();
$list_sum = statistical_revenue_by_day();

if (isset($_GET['act'])) {
    $act = $_GET['act'];
    switch ($act) {
        case 'add_category':
            // kiểm tra xem người dùng có click và nút add hay không 
            if (isset($_POST['add_new']) && ($_POST['add_new'])) {
                $type_name = $_POST['type_name'];
                $image = $_POST['image'];
                insert_category($type_name, $image);
                $notification = "More success";
            }
            include "./pages/category/add_category.php";
            break;
        case 'list_category':
            $list_category = loadall_category();
            include "./pages/category/list_category.php";
            break;

        case 'delete_category':
            if (isset($_GET['id']) && ($_GET['id'] > 0)) {
                delete_category($_GET['id']);
            }
            $list_category = loadall_category();
            include "./pages/category/list_category.php";
            break;

        case 'update_category':
            if (isset($_GET['id']) && ($_GET['id'] > 0)) {
                $category = loadone_category($_GET['id']);
            }
            include "./pages/category/update.php";
            break;
        case 'update_categories':
            if (isset($_POST['update']) && ($_POST['update'])) {
                $type_name = $_POST['type_name'];
                $image = $_POST['image'];
                $id = $_POST['id'];
                update_category($id, $type_name, $image);
            }
            $list_category = loadall_category();
            include "./pages/category/list_category.php";
            break;
            // CONTROL SẢN PHẨM
        case 'add_product':
            // kiểm tra xem người dùng có click và nút add hay không 
            if (isset($_POST['add_products']) && ($_POST['add_products'])) {
                $id_ct = $_POST['id_ct'];
                $name_products = $_POST['name_products'];
                $price = $_POST['price'];
                $desc = $_POST['describe'];
                $image = $_FILES['image']['name'];
                $target_dir = "../upload/";
                $target_file = $target_dir . basename($_FILES["image"]["name"]);

                if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                    // echo "The file " . htmlspecialchars(basename($_FILES["hinh"]["name"])) . " has been uploaded.";
                } else {
                    // echo "Sorry, there was an error uploading your file.";
                }
                insert_product($name_products, $price, $image, $desc, $id_ct);
                $notification = "More success";
            }
            $list_category = loadall_category();
            include "./pages/product/add_product.php";
            break;
        case 'list_product':
            if (isset($_POST['list_ok'])) {
                $kyw = $_POST['kyw'];
                $id_category = $_POST['id_ct'];
            } else {
                $kyw = '';
                $id_category  = 0;
            }
            $list_category = loadall_category();
            $list_products = loadall_products($kyw, $id_category);
            include "./pages/product/list_product.php";
            break;
        case 'delete_products':
            if (isset($_GET['id']) && ($_GET['id'] > 0)) {
                delete_product($_GET['id']);
            }
            $list_products = loadall_products();
            include "./pages/product/list_product.php";
            break;

        case 'update_product_btn':
            if (isset($_GET['id']) && ($_GET['id'] > 0)) {
                $products = loadone_product($_GET['id']);
            }
            $list_category = loadall_category();
            include "./pages/product/update.php";
            break;
        case 'update_products':
            if (isset($_POST['update']) && ($_POST['update'])) {
                $id = $_POST['id'];
                $id_ct = $_POST['id_ct'];
                $name_products = $_POST['name_products'];
                $price = $_POST['price'];
                $desc = $_POST['describe'];
                $image = $_FILES['image']['name'];
                $target_dir = "../upload/";
                $target_file = $target_dir . basename($_FILES["image"]["name"]);

                if (move_uploaded_file($_FILES["image"]["tmp_name"], $target_file)) {
                    // echo "The file " . htmlspecialchars(basename($_FILES["hinh"]["name"])) . " has been uploaded.";
                } else {
                    // echo "Sorry, there was an error uploading your file.";
                }
                update_product($id, $id_ct, $name_products, $price, $desc, $image);
                $notification = "More success";
            }
            $list_products = loadall_products();
            $list_category = loadall_category();
            include "./pages/product/list_product.php";
            break;

        default:
            include "./pages/home/master.php";
            break;
    }
} else {
    include "./pages/home/master.php";
}
