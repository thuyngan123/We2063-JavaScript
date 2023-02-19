// import logo from "../Image/logo.png"
const Header = () => {
  return `
    <section id="home" class="d-flex align-items-center">
    <div class="logo">
      <img src="../assets/image/logo1.png" alt="">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md">
          <h1 class="display-2 fw-bold" data-aos="fade-up">Xin chào! Tôi là <span class="text-brand">Thúy
              Ngân</span></h1>
          <!-- <h4 data-aos="fade-up" data-aos-delay="100" class="mt-3 mb-5">Mars based web designer and
            photographer</h4> -->
          <div data-aos="fade-up" data-aos-delay="200"><a href="https://drive.google.com/drive/my-drive" class="btn btn-brand">Dowload CV</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

export default Header;
