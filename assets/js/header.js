document.write(`
<header id="header" class="header fixed-top">
  <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

    <a href="index.html" class="logo d-flex align-items-center">
      <img src="assets/img/logo.png" alt="">
    </a>

    <nav id="navbar" class="navbar">
      <ul>
        <li><a class="nav-link scrollto active" href="index.html#hero">Home</a></li>
        <li><a class="nav-link scrollto" href="index.html#about">About</a></li>
        <li><a class="nav-link scrollto" href="index.html#features">Features</a></li>
        <li class="dropdown"><a class="nav-link scrollto" href="index.html#pricing"><span>Airports</span> <i
              class="bi bi-chevron-down"></i></a>
          <ul>
            <lil><a href="airport_cyyz.html">CYYZ - Toronto Pearson</a></lil>
            <li><a href="airport_cykf.html">CYKF - Waterloo Airport</a></li>
            <li><a href="airport_cnc4.html">CNC4 - Guelph Airpark</a></li>
            <lil><a href="airport_czba.html">CZBA - Burlington Airpark</a></lil>
            <li><a href="airport_phli.html">PHLI - Lihue Airport</a></li>
          </ul>
        </li>
        <li><a class="nav-link scrollto" href="index.html#testimonials">Testimonials</a></li>
        <li class="dropdown"><a class="nav-link scrollto" href="index.html#team"><span>Team</span> <i
              class="bi bi-chevron-down"></i></a>
          <ul>
            <li><a href="executiveprofile_david.html">David</a></li>
            <li><a href="executiveprofile_darwin.html">Darwin</a></li>
            <li><a href="executiveprofile_marshall.html">Marshall</a></li>
            <lil><a href="executiveprofile_nick.html">Nick</a></lil>
            <hr style="margin: 10px 6% 10px 6%;color: black;height: 2px; border-radius: 1px;">
            <lil><a href="https://forms.gle/N8gBSsWe5N2iyThA6">Apply Now</a></lil>

          </ul>
        <li><a class="nav-link scrollto" href="index.html#recent-blog-posts">News</a></li>
        <li><a class="nav-link scrollto" href="https://store.regdesigns.xyz">Merch</a></li>
        <li><a class="getstarted scrollto" href="https://secure.simmarket.com/regdesigns.mhtml">Buy Now</a></li>
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>

  </div>
</header>
`);