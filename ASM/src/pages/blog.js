import Nav from "./Nav"


const blog = () => {
  return `
    ${Nav()}
    <section id="blog" class="section-padding section-connector">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="setion-title text-center" data-aos="fade-up" data-aos-delay="100">
            <h1>Blog</h1>
            <p>Một số trang Web hỗ trợ tôi trong quá trình học,và thực hiện dự án</p>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="row gy-5">
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <div class="bp">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png"
              alt="">
            <div class="bp-content pt-4">
              <h4>W3school</h4>
              <p>Hỗ trợ tôi học HTML&CSS,PHP,JAVASCRIP....</p>
              <a target ="_blank" href="https://www.w3schools.com/" class="custom-link">
                <span>Read More</span>
                <i class="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
          <div class="bp">
            <img src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
              alt="">
            <div class="bp-content pt-4">
              <h4>Website Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <a target ="_blank"href="#" class="custom-link">
                <span>Read More</span>
                <i class="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
          <div class="bp">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/MDN_Web_Docs_logo.svg/2560px-MDN_Web_Docs_logo.svg.png"
              alt="">
            <div class="bp-content pt-4">
              <h4>Website Design</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <a target ="_blank"href="#" class="custom-link">
                <span>Read More</span>
                <i class="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
}

export default blog
