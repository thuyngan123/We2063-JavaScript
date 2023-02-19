<?php
include "../../../model/pdo.php";
include "../../../model/binhluan.php";
if (isset($_GET['id']) && ($_GET['id'] > 0)) {
    delete_binhluan($_GET['id']);
    header('Location: cmt_user.php');
}
$listbinhluan = loadall_binhluan(0);


?>