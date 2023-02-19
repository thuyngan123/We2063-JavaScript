const Nav = () => {
  return `
    <div id="app"></div>
  <script type="module" src="./src/main.js"></script>

  <body data-bs-spy="scroll" data-bs-target="#navbar">

    <!-- Navbar -->
    <nav id="navbar" class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">Thúy Ngân</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/service">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./projectsdetail">Projects </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
          <ul class="navbar-nav flex-row">
            <li class="nav-item">
              <a class="social-icon" href="#"><i class="uil uil-github-alt"></i></a>
            </li>
            <li class="nav-item">
              <a class="social-icon" href="#"><i class="uil uil-basketball"></i></a>
            </li>
            <li class="nav-item">
              <a class="social-icon" href="#"><i class="uil uil-instagram"></i></a>
            </li>
            <li class="nav-item">
              <a class="social-icon" href="#"><i class="uil uil-message"></i></a>
            </li>
            <li class="nav-item">
              <a class="social-icon" href="/login"><i class="uil uil-registered"></i></a>
            </li>
            <li class="nav-item">
              <a class="social-icon" href="/register"><i class="uil uil-signin"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`
}

export default Nav
