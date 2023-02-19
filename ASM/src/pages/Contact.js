import footer from "./footer"
import Nav from "./Nav"

const Contact = () => {
  return `
  ${Nav()}
  <section id="contact" class="section-connector">
  <div class="container section-padding">
    <div class="row">
      <div class="col-12">
        <div class="setion-title text-center" data-aos="fade-up" data-aos-delay="100">
          <h1>Contact</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci architecto dignissimos
            saepe iste soluta. Aperiam exercitationem doloribus soluta.</p>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8" data-aos="fade-up" data-aos-delay="200">
        <form action="#" class="row g-3">
          <div class="form-group col-md-4">
            <input type="text" class="form-control" placeholder="Name">
          </div>
          <div class="form-group col-md-4">
            <input type="text" class="form-control" placeholder="Phone Number">
          </div>
          <div class="form-group col-md-4">
            <input type="email" class="form-control" placeholder="Email Address">
          </div>
          <div class="form-group col-md-12">
            <input type="text" class="form-control" placeholder="Enter Subject">
          </div>
          <div class="form-group col-md-12">
            <textarea name="" class="form-control" placeholder="Enter Your Message" rows="4"></textarea>
          </div>
          <div class="form-group text-center col-md-12">
            <button class="btn btn-brand">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  
     

 `
}

export default Contact
