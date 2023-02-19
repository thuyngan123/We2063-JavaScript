import Nav from "./Nav";


const AboutPage = () => {
    return `
    ${Nav()};
    <div class="section-padding pb-0">
        <div class="container">
          <div class="row">
            <div class="col-12" data-aos="fade-up" data-aos-delay="100">
              <div class="setion-title text-center">
                <h1>About</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto
                  dignissimos saepe iste soluta. Aperiam exercitationem doloribus soluta.</p>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div class="home_container">
            <div class="container">
              <div class="row">
                <div class="col-lg-5 col-md-6">
                  <div class="img-about">
                    <img class="img_about" src="./assets/image/cv.png" alt="">
                  </div>
                </div>
                <div class="col-lg-7 tw-col-md-6">
                  <div class="content_about">
                    <h5 class="heading_about">Thúy Ngân</h5>
                    <p class="para_about">Graphics Designer/Web Developer</p>
                    <p class="para_text">Xin chào! Hiện tại tôi đang là sinh viên kì 5 tại trường Cao đẳng FPT
                      Polytechnic.Tôi bắt đầu học lập trình từ tháng 10 năm ngoái,phần lớn thời gian học trên trường
                      thì
                      tôi vẫn thường xuyên học thêm trên F8,W3shool..và trên các kênh Youtube.</p>
                    <div class="information_content">
                      <ul class="list">
                        <li class="items">
                          <b>From: <span>Cao Bằng</span></b>
                        </li>
                        <li class="items">
                          <b>Live in:<span>Hà Nội</span></b>
                        </li>
                        <li class="items">
                          <b>Address:<span>Quan Hoa-Cầu Giaays</span></b>
                        </li>
                        <li class="items">
                          <b>Gender:<span>Female</span></b>
                        </li>
                        <li class="items">
                          <b>Age: <span>19</span></b>
                        </li>
                      </ul>
                    </div>
                    <a  target ="_blank"href="https://drive.google.com/file/d/1g0XlgIQpmfdjsg6K_ysC_xgdRdIhhEGu/view?usp=sharing" class="btn_about"><span></span>Dowload CV</a>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </section>
    `
}

export default AboutPage;
