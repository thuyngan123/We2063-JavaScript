<div class="col-lg-10 grid-margin stretch-card">
    <div class="card">
        <div class="card-body">
        <form action="index.php?act=list_bill" method="post">
                <h4 class="card-title d-flex justify-content-between align-items-center  text-uppercase bg-gradient-primary p-3 text-white rounded-3">List bill
                    <div class="input-group md-3" style="width: 800px;">
                        <input type="text" class="form-control" name="kyw" placeholder="Search Here">
                        <button type="submit" name="list_ok" class="input-group-text shadow-none px-4  btn btn-gradient-light btn-fw ">
                            <i class="mdi mdi-magnify"></i>
                        </button>
                    </div>

                </h4>
            </form>
            <p class="card-description"> List bill
            </p>
            <div class="table-responsive">
                <table class="table  table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center">code orders</th>
                            <th class="text-center">client</th>
                            <th class="text-center">number of rows</th>
                            <th class="text-center">order value</th>
                            <th class="text-center">order status</th>
                            <th class="text-center">order_date</th>
                            <th class="text-center">manipulation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        foreach ($list_bill as $bill) {
                            extract($bill);
                            $delete_bill = "index.php?act=delete_bill&id=" . $id;
                            $update_bill = "index.php?act=update_bill&id=" . $id;
                            $client = $bill["bill_name"] . '
                         <br> ' . $bill["bill_email"] . '
                         <br> ' . $bill["bill_address"] . '-' . $bill['bill_towncity'] . '-' . $bill['bill_country'] . '
                         <br> ' . $bill["bill_phone"];
                            $completion_time = get_completion_time($bill["bill_status"]);
                            $count_products = loadall_cart_count($bill["id"]);


                        ?>
                            <tr>
                                <td class="text-center">MT-<?= $bill['id'] ?></td>
                                <td class="text-center"><?= $client ?></td>
                                <td class="text-center"><?= $count_products ?></td>
                                <td class="text-center"><?= $bill["total"] ?></td>
                                <td class="text-center" style="color:red ;"><?= $completion_time ?></td>
                                <td class="text-center"><?= $bill["order_date"] ?></td>
                                <td class="text-center"><a href="<?= $update_bill ?>"><input type="button" class="btn btn-gradient-primary btn-fw" value="update"></a>
                    
                                </td>

                            </tr>
                        <?php
                        }

                        ?>



                    </tbody>
                </table>

            </div>

        </div>

    </div>
</div>
</div>



</div>










<!-- plugins:js -->
<script src="assets/vendors/js/vendor.bundle.base.js"></script>
<!-- endinject -->
<!-- Plugin js for this page -->

<script src="assets/js/jquery.cookie.js" type="text/javascript"></script>
<!-- End plugin js for this page -->
<!-- inject:js -->
<script src="assets/js/off-canvas.js"></script>
<script src="assets/js/hoverable-collapse.js"></script>
<script src="assets/js/misc.js"></script>
<!-- endinject -->
<!-- Custom js for this page -->
<script src="assets/js/dashboard.js"></script>
<script src="assets/js/todolist.js"></script>
<!-- End custom js for this page -->
</body>

</html>