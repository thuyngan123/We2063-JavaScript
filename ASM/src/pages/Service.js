import Nav from "./Nav";

const ServicePage = () => {
  return/*html */ `
  ${Nav()}
  <section id="services" class="section-padding section-connector">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="setion-title text-center" data-aos="fade-up" data-aos-delay="100">
          <h1>Services</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto dignissimos
            saepe iste soluta. Aperiam exercitationem doloribus soluta.</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="row gy-4 text-center">
      <div class="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="100">
        <div class="service py-5 px-4 border">
          <div class="service-icon">
            <i class="uil uil-money-bill-stack"></i>
          </div>
          <h5 class="mt-4">Branding</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere nihil</p>
          <a href="#" class="custom-link">
            <span>Read More</span>
            <i class="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="200">
        <div class="service py-5 px-4 border">
          <div class="service-icon">
            <i class="uil uil-money-stack"></i>
          </div>
          <h5 class="mt-4">UI Design</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere nihil</p>
          <a href="#" class="custom-link">
            <span>Read More</span>
            <i class="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="300">
        <div class="service py-5 px-4 border">
          <div class="service-icon">
            <i class="uil uil-capture"></i>
          </div>
          <h5 class="mt-4">Photography</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere nihil</p>
          <a href="#" class="custom-link">
            <span>Read More</span>
            <i class="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay="400">
        <div class="service py-5 px-4 border">
          <div class="service-icon">
            <i class="uil uil-edit"></i>
          </div>
          <h5 class="mt-4">UX Design</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facere nihil</p>
          <a href="#" class="custom-link">
            <span>Read More</span>
            <i class="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

`;
};
export default ServicePage;