<!-- https://mobileapp.nicepage.io/Page-2.html?version=c157bc4d-d4e4-46eb-bff4-a604df304a68 -->
<template>
  <div class="container mx-auto p-x-10 lg:p-x-0">
    <section class="jumbotron" flex="md:~">
      <div>
        <h1
        text="size-5xl md:size-6xl md:base/16 lg:size-8xl lg:base/22" font-bold
        m="y-5 t-10 md:t-30"
        >Create<br> & deliver</h1>
        <h2
        capitalize
        font="light"
        text="white"
        m="b-10"
        >Real Experience</h2>
        <a bg-red-500 w-28 text-center block mb-10 p-y-3 p-x-5 uppercase text-size-xs font-semibold href="">see more</a>
      </div>
      <img
       w="2/3 lg:1/3"
       m="md:t-15"
       mx-auto src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/60700b8c43095d66ada6928d/579161.png" alt="">
    </section>
    <section class="12">
      <div class="01">
        <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/ef005f3d59d953ce906b4031/67732.jpg" alt="">
        <div>
          <h1>01</h1>
          <h2>An Inspirational Technology</h2>
          <p>Phasellus scelerisque sed leo quis gravida. Fusce lobortis libero ut arcu blandit pharetra.</p>
        </div>
      </div>
      <div class="02">
        <div>
          <h1>02</h1>
          <h2>Quickly pick up a new skill </h2>
          <p>How much time do you think that you get to make a good impression with a potential customer? If you’re
            talking about interacting with them online, you have less than three seconds.</p>
        </div>
        <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/d1dd2654458d52c7b8db60c9/OS5KJE1.png" alt="">
      </div>
    </section>
    <section class="counts">
      <h1>Doing The Right Things</h1>
      <ul>
        <li v-for="count in counts">
          <div>
            <h3>{{ count.numbers }}</h3>
            <span>{{ count.title }}</span>
          </div>
        </li>
      </ul>
    </section>
    <section class="form">
      <div>
        <h2>Dream, train and activate</h2>
        <p>Justis pede vixtu, aliquet vel fringilla, pellentes arcu eget mus vix</p>
      </div>
      <form action="">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input type="text" placeholder="Message">
        <button>Submit</button>
      </form>
    </section>
    <section class="03">
      <div>
        <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/66ee030b4117564e874269a7/grcell2.jpg" alt="">
      </div>
      <div>
        <h1>03</h1>
        <h2>Userfriendly Design</h2>
        <p>
          How much time do you think that you get to make a good impression with a potential customer? If you’re talking
          about interacting with them online, you have less than three seconds.
        </p>
        <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/e8e7290111aa5533acfd6f40/Untitled6.jpg" alt="">
      </div>
      <div>
        <h2>what we do</h2>
        <p>
          While you could create a separate version of your website that works well on mobile devices from the one people
          see on desktop, for most businesses the better option is to make one website that’s responsive.
        </p>
      </div>
      <div>
        <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/193c299b8dcc56ccafc40e7b/Untitled2.jpg" alt="">
      </div>
    </section>
    <section class="get-the-app">
      <h2>Get the App</h2>
      <p>
        In vitae velit luctus, imperdiet augue et, elementum dui. Sed sit amet nisi nulla. In ut diam id lectus efficitur
        efficitur quis vitae felis. Suspendisse euismod leo sapien, sit amet accumsan quam fermentum nec.
      </p>
      <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/752054dc06b85c85ae62733f/h5img11.png" alt="">
    </section>
  </div>
</template>

<script setup>

const counts = [
  {
    numbers: 92,
    title: "Happy Clients",
  },
  {
    numbers: 33,
    title: "Awards Winning",
  },
  {
    numbers: 12,
    title: "Our Projects",
  },
  {
    numbers: 492,
    title: "Working Hours",
  },
]
</script>

<style>
html {
  font-size: 16px;
}

body {
  color: white;
  background-color: #43005d;
}

h1 {
  font-size: 5rem;
  text-transform: uppercase;
  line-height: 3rem;
  font-weight: lighter;
}

h2 {
  color: #f70647;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  text-transform: uppercase;

}

section {
  /* border: 1px solid white; */
}

</style>