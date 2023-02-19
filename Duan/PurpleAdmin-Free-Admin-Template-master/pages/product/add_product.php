
      <div class="col-10 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
          <h4 class="card-title text-uppercase bg-gradient-primary p-3 text-white rounded-3">add products <i class="mdi mdi-cart"></i></h4>
            <p class="card-description"> add products </p>
            <form class="forms-sample" action="index.php?act=add_product" method="post" enctype="multipart/form-data">
              <div class="form-group">
                <label for="exampleInputName1">Product's name</label>
                <input type="text" name="name_products" class="form-control" id="exampleInputName1" placeholder="Name">
              </div>
             
              <div class="form-group">
                <label>File upload image</label>
                <div class="input-group col-xs-12">
                  <input type="file" name="image" class="form-control file-upload-info" placeholder="Upload Image">
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputCity1">Price</label>
                <input type="number" name="price" class="form-control" id="exampleInputCity1" placeholder="Location">
              </div>
              <div class="form-group">
                <label for="exampleSelectGender">Type product</label>
                <select name="id_ct" class="form-control" id="exampleSelectGender">
                  <option value="" disabled selected>categories</option>
                  <?php 
                    
                    foreach ($list_category as $category) {
                        extract($category);
                        echo '<option value="' . $category['id'] . '"> ' . $category['name_ct'] . ' </option>';
                    }
                    ?>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleTextarea1">Describe</label>
                <textarea name="describe" class="form-control" id="exampleTextarea1" rows="4"></textarea>
              </div>
              <?php
            if (isset($notification) && ($notification != "")) echo $notification;
            ?>
            </form>
          </div>
        </div>
      </div>



</div>











     <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="assets/vendors/js/vendor.bundle.base.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <script src="assets/vendors/chart.js/Chart.min.js"></script>
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="assets/js/off-canvas.js"></script>
    <script src="assets/js/hoverable-collapse.js"></script>
    <script src="assets/js/misc.js"></script>
    <!-- endinject -->
    <!-- Custom js for this page -->
    <script src="assets/js/chart.js"></script>
    <!-- End custom js for this page -->
  </body>
</html>