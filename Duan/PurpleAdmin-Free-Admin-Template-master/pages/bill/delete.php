<?php
include "../../../model/pdo.php";
include "../../../model/cart.php";

if (isset($_GET['id']) && ($_GET['id'] > 0)) {
    delete_bill($_GET['id']);
    header("location:list_bill.php");
}
$listbill = loadall_bill($kyw,0);

?>
