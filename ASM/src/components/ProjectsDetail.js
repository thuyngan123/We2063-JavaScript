import Nav from "../pages/Nav"

const PageProjects = () => {
  return /*html */`
  ${Nav()}
  <section id="work" class="section-padding section-connector">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12" data-aos="fade-up" data-aos-delay="100">
            <div class="setion-title text-center">
              <h1>Projects </h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto dignissimos
                saepe iste soluta. Aperiam exercitationem doloribus soluta.</p>
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="100">
            <div class="project">
              <img src="./assets/image/pr1.jpg" alt="">
              <div class="content">
                <a href="./assets/images/p-1.jpg" data-fancybox="gallery" class="btn btn-outline-light">View
                  Project</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="200">
            <div class="project">
              <img src="./assets/image/pr2.jpg" alt="">
              <div class="content">
                <a href="./assets/images/p-2.jpg" data-fancybox="gallery" class="btn btn-outline-light">View
                  Project</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="300">
            <div class="project">
              <img src="./assets/image/pr3.jpg" alt="">
              <div class="content">
                <a href="./assets/images/p-3.jpg" data-fancybox="gallery" class="btn btn-outline-light">View
                  Project</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="100">
            <div class="project">
              <img src="./assets/images/p-4.jpg" alt="">
              <div class="content">
                <a href="./assets/images/p-4.jpg" data-fancybox="gallery" class="btn btn-outline-light">View
                  Project</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="200">
            <div class="project">
              <img src="./assets/images/p-5.jpg" alt="">
              <div class="content">
                <a href="./assets/images/p-5.jpg" data-fancybox="gallery" class="btn btn-outline-light">View
                  Project</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="300">
            <div class="project">
              <img src="./assets/images/p-6.jpg" alt="">
              <div class="content">
                <a href="./assets/images/p-6.jpg" data-fancybox="gallery" class="btn btn-outline-light">View
                  Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
`

}

export default PageProjects
