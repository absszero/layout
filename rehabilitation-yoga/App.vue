<template>
  <!-- https://freewebsitetemplates.com/preview/rehabilitation-yoga/about.html -->
  <div class="container">
    <div class="header">
      <div class="title">
        <h1>Belle & Carrie</h1>
        <h2>Rehabilitation Yoga</h2>
      </div>
    </div>
    <nav class="nav">
      <ul id="menu">
        <li><a href="">Home</a></li>
        <li class="active"><a href="">About</a></li>
        <li><a href="">Classes</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Blog</a> </li>
      </ul>
    </nav>
    <div class="content">
      <div class="main">
        <h1>About</h1>
        <h2>We Have Free Templates for Everyone</h2>

        <p>Our website templates are created with inspiration, checked for quality and originality and meticulously sliced
          and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use
          them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our
          links if you want to.</p>

        <h2>We Have More Templates for You</h2>

        <p>Looking for more templates? Just browse through all our Free Website Templates and find what you're looking
          for. But if you don't find any website template you can use, you can try our Free Web Design service and tell us
          all about it. Maybe you're looking for something different, something special. And we love the challenge of
          doing something different and something special.</p>
        <h2>Be Part of Our Community</h2>

        <p>If you're experiencing issues and concerns about this website template, join the discussion on our forum and
          meet other people in the community who share the same interests with you.</p>
        <h2>Template Details</h2>

        <p>Design version 3. Code version 1. Website Template details, discussion and updates for this Belle & Carrie
          Rehabilitation Yoga Web Template. Website Template design by Free Website Templates. Please feel free to remove
          some or all the text and links of this page and replace it with your own About content.</p>
      </div>
      <div class="side"><img src="https://freewebsitetemplates.com/preview/rehabilitation-yoga/images/lady-in-yoga.jpg"
          alt="" class="src"></div>
    </div>
    <div class="footer">
      <div class="address">
        <h3>123 St. City Location, Country | 987654321</h3>
        <span> © 2023 by Belle & Carrie Rehabilitation Yoga. All rights reserved. </span>
      </div>
      <div class="social">
        <ul>
          <li class="fb"><a href="">Facebook</a></li>
          <li class="twitter"><a href="">Twitter</a></li>
          <li class="google"><a href="">Google+</a></li>
          <li class="pinterest"><a href="">Pinterest</a> </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
@import 'reset-css';

/* block */
body {
  font-family: "PingFang TC", "Heiti TC", "微軟正黑體", sans-serif;
  font-size: 16px;
  background-color: #077054;
}

.container {
  width: 80%;
  margin: 0 auto;
}

.header {
  margin: 30px auto;
}

.content {
  background-color: #ffffff;
  margin-bottom: 25px;
  padding: 35px;
  display: flex;
}

.content .side {
  display: flex;
  align-items: end;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.footer .social {
  display: flex;
}

/* style */
.header .title {
  text-align: center;
}

.header .title h1 {
  font-size: 3rem;
  color: #99fa99;
  margin-bottom: 15px;
}

.header .title h2 {
  font-size: 1.7rem;
  color: #b6d8cf;
  font-weight: lighter;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.nav {
  margin-bottom: 15px;
  text-align: center;
}

.nav ul li {
  display: inline-block;
  padding: 0 30px;
}

.nav a {
  color: #b6d8cf;
  text-decoration: none;
  text-transform: uppercase;
}

.nav li.active a {
  color: #99fa99;
}

.nav a:hover {
  color: #d3a3ff;
}

.content h1 {
  font-size: 2.5rem;
  font-weight: lighter;
  margin-bottom: 35px;
  color: #21a51e;
}

.content h2 {
  font-size: 1.5rem;
  font-weight: lighter;
  margin-bottom: 5px;
  color: #315f52;
}

.content p {
  font-size: 0.9rem;
  line-height: 1.5em;
  margin-bottom: 25px;
}

.footer h3 {
  color: #99fa99;
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.footer span {
  color: #b6d8cf;
  font-size: 0.85rem;
}

.footer .social li {
  display: inline-block;
  background: url("https://freewebsitetemplates.com/preview/rehabilitation-yoga/images/icons.png") no-repeat;
  text-indent: -999999px;
  height: 30px;
  width: 37px;
  margin-left: 15px;
}

.social li.fb {
  background-position: 12px 0;
}

.social li.twitter {
  background-position: 0 -30px;
}

.social li.google {
  background-position: 0 -62px;
}

.social li.pinterest {
  background-position: 0 -94px;
}

@media screen and (max-width: 767px) {
  .container {
    width: 90%;
    margin: 0 auto;
  }

  .header {
    margin-top: 75px;
  }

  .nav {
    display: none;
    border: 1px solid #99fa99;
    background-color: rgba(7, 112, 84, 0.9);
    text-align: left;
    width: 90%;
    position: absolute;
    top: 71px;
  }

  .nav ul li {
    display: block;
    border: 1px solid #99fa99;
    padding: 15px;
  }

  .nav li.active {
    background-color: rgba(153, 250, 153, 0.9);
  }

  .nav li.active a {
    color: #ffffff;
  }

  .nav a {
    color: #ffffff;
    font-weight: bold;
  }

  .content {
    flex-direction: column;
  }

  .content .side {
    justify-content: flex-end;
  }

  .footer {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer h3 {
    margin-bottom: 15px;
  }

  .address {
    margin-bottom: 20px;
  }

  .social {
    margin-bottom: 20px;
  }
}</style>