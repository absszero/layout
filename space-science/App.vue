<template>
  <!-- https://freewebsitetemplates.com/preview/space-science/index.html -->
  <div class="ctn">
    <nav>
      <div class="logo">
        <img src="https://freewebsitetemplates.com/preview/space-science/images/logo.png" alt="" class="src">
      </div>
      <ul>
        <li class="active">Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <svg class="burger" xmlns="http://www.w3.org/2000/svg" width="45px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
      </svg>
    </nav>
    <div class="content">
      <div class="jumbotron">
        <img src="https://freewebsitetemplates.com/preview/space-science/images/satellite.png" alt="" class="satellite">
        <div class="title">
          <h1>SOYUZ TMA-M</h1>
          <h2>SPACECRAFT</h2>
          <div class="more"><a href="">READ MORE</a></div>
        </div>
      </div>
      <div class="projects">
        <h3>FEATURED PROJECTS</h3>
        <ul>
          <li><img src="https://freewebsitetemplates.com/preview/space-science/images/project-image1.jpg" alt=""
              class="src"></li>
          <li><img src="https://freewebsitetemplates.com/preview/space-science/images/project-image2.jpg" alt=""
              class="src"></li>
          <li><img src="https://freewebsitetemplates.com/preview/space-science/images/project-image3.jpg" alt=""
              class="src"></li>
          <li><img src="https://freewebsitetemplates.com/preview/space-science/images/project-image4.jpg" alt=""
              class="src"></li>
        </ul>
      </div>
      <div class="mission">
        <h3>OUR MISSION</h3>
        <p>This website template has been designed by Free Website Templates for you, for free. You can replace all this
          text with your own text.</p>
      </div>
      <div class="media">
        <div class="video">
          <h3>FEATURED VIDEO</h3>
          <div class="preview">
            <img src="https://freewebsitetemplates.com/preview/space-science/images/mars-rover.jpg" alt="">
            <div class="play-icon"></div>
          </div>
        </div>
        <div class="blog">
          <h3>LATEST BLOG</h3>
          <ul>
            <li>
              <div class="figure"><img
                  src="https://freewebsitetemplates.com/preview/space-science/images/finding-planet.jpg" alt=""
                  class="src"></div>
              <div class="article">
                <h4>FINDING PLANET X-123</h4>
                <time>FEBRUARY 6, 2023</time>
                <a href="">READ MORE</a>
              </div>
            </li>
            <li>
              <div class="figure"><img
                  src="https://freewebsitetemplates.com/preview/space-science/images/new-satellitedish.jpg" alt=""
                  class="src"></div>
              <div class="article">
                <h4>NEW SATELLITE DISH</h4>
                <time>FEBRUARY 3, 2023</time>
                <a href="">READ MORE</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="social">
        <span>FOLLOW OUR MISSIONS ON</span>
        <ul>
          <li class="fb"><a href="">Facebook</a></li>
          <li class="twitter"><a href="">Twitter</a></li>
          <li class="google"><a href="">Google+</a></li>
          <li class="pinterest"><a href="">Pinterest</a> </li>
        </ul>
      </div>
    </div>
    <footer>
      <span>© 2023 BY SPACE PROSPECTION | ALL RIGHTS RESERVED</span>
    </footer>
  </div>
</template>

<script setup>
</script>

<style>
body {
  font-family: "PingFang TC", "Heiti TC", "微軟正黑體", sans-serif;
  font-size: 16px;
  background-color: #000000;
  background-image: url("https://freewebsitetemplates.com/preview/space-science/images/bg-home.jpg");
  background-repeat: no-repeat;
  background-position: center top;
}

h3 {
  font-size: 2rem;
  font-weight: bolder;
}

.ctn {
  color: #ffffff;
  width: 100%;
}

nav {
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
}

nav ul {
  margin-left: 30px;
  display: flex;
}

nav ul li {
  height: 60px;
  padding: 0 15px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
}

nav ul li.active {
  color: #cccccc;
  background-color: #000000;
}

nav .burger {
  display: none;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.jumbotron {
  width: 900px;
  display: flex;
  height: 490px;
}

.jumbotron img.satellite {
  position: relative;
  bottom: -30px;
  margin-top: 50px;
}

.jumbotron .title {
  width: 500px;
  margin-top: 200px;
  text-align: center;
  z-index: 51;
}

.jumbotron h1 {
  letter-spacing: 0.25rem;
  font-size: 3.75rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.jumbotron h2 {
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.jumbotron .more a {
  font-size: 1.1rem;
  text-decoration: none;
  background-color: #000000;
  padding: 10px 25px;
  color: #cccccc;
}

.projects h3 {
  text-align: center;
  margin: 0;
  padding: 15px 0;
  font-size: 1.5rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.projects ul {
  display: flex;
  font-size: 0;
}

.mission {
  text-align: center;
  background-color: #630031;
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mission h3 {
  margin: 25px 0;
}

.mission p {
  width: 800px;
  line-height: 1.2rem;
}

.media {
  display: flex;
  justify-content: space-between;
}

.video, .blog {
  width: 45%;
}

.media h3 {
  margin: 25px 0;
}

.video .preview {
  display: grid;
  grid-template: "container";
  place-items: center;
  place-content: center;
}

.preview>img {
  grid-area: container;
}

.preview>.play-icon {
  grid-area: container;
  background: url("https://freewebsitetemplates.com/preview/space-science/images/icons.png") no-repeat 0 -152px;
  height: 72px;
  width: 62px;
}

.blog ul li {
  display: flex;
  margin: 30px 0;
  margin-left: 0;
  padding-top: 30px;
}

.blog ul li:first-child {
  padding-top: 0px;
  border-top: 0;
}

.blog .article {
  display: flex;
  flex-direction: column;
  width: 300px;
}

.blog img {
  margin-right: 20px;
}

.article h4 {
  color: #cccccc;
  font-weight: bolder;
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.article time {
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: 25px;
}

.article a {
  align-self: end;
  width: 75px;
  display: block;
  background-color: #3c0f38;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 5px 15px;
  text-decoration: none;
  color: #ffffff;
}

.social {
  width: 100%;
  display: flex;
  background-color: #a3a3a3;
  justify-content: center;
  align-items: center;
}

.social span {
  font-size: 1.5rem;
  padding: 50px 50px;
}

.social ul {
  display: flex;
}

.social ul li {
  background: url("https://freewebsitetemplates.com/preview/space-science/images/icons.png") no-repeat;
  display: block;
  float: left;
  height: 36px;
  width: 20px;
  text-indent: -99999px;
  margin-right: 20px;
}

.social .twitter {
  background-position: 0 -114px;
  width: 46px;
}

.social .google {
  background-position: 0 -38px;
  width: 38px;
}

.social .pinterest {
  background-position: 0 -76px;
  width: 30px;
}

footer {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  font-size: 0.75rem;
  height: 100px;
}

@media screen and (max-width: 918px) {
  nav {
    justify-content: space-between;
  }

  nav ul {
    display: none;
  }

  nav .burger {
    display: block;
  }

  .jumbotron {
    width: auto;
    justify-content: center;
  }

  .jumbotron img.satellite {
    position: absolute;
    bottom: 0;
    top: 80px;
    left: 40px;
    margin-top: 0;
  }

  .projects {
    width: 100%;
  }

  .projects ul {
    flex-direction: column;
    align-items: center;
  }

  .projects ul img {
    margin-bottom: 25px;
  }

  .mission p {
    width: 90%;
  }

  .media {
    width: 90%;
    flex-direction: column;
    align-items: center;
  }

  .video, .blog {
    width: 100%;
  }

  .media h3 {
    text-align: center;
  }

  .video {
    margin: 0 0;
    margin-bottom: 50px;
  }

  .blog .article {
    width: 90%;
  }

  .social {
    flex-direction: column;
  }

  .social ul {
    margin-bottom: 50px;
  }
}</style>