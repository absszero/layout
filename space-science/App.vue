<template>
  <!-- https://freewebsitetemplates.com/preview/space-science/index.html -->
  <div class="">
    <nav class="bg-black/50 flex justify-between sm:justify-center">
      <div class="logo">
        <img src="https://freewebsitetemplates.com/preview/space-science/images/logo.png" alt="" class="src sm:mr-10">
      </div>
      <ul class="hidden sm:block sm:flex space-x-10 text-white uppercase [&>li]:px-4 [&>li]:pt-5 text-bold">
        <li class="active bg-black text-gray-400">Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <svg class="sm:hidden" xmlns="http://www.w3.org/2000/svg" width="45px" viewBox="0 0 24 24">
        <path class="fill-white" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
      </svg>
    </nav>
    <div class="content sm:flex sm:flex-col sm:items-center">
      <div class="jumbotron">
        <img class="absolute top-30 left-30 z-1"
          src="https://freewebsitetemplates.com/preview/space-science/images/satellite.png" alt="">
        <div class="z-2 sm:-right-50 relative flex flex-col items-center text-center text-white font-bold mt-45">
          <h1 class="font-size-6xl">SOYUZ TMA-M</h1>
          <h2 class="font-size-4xl mb-10">SPACECRAFT</h2>
          <div class="mb-40 sm:mb-20 w-35 bg-black p-3 text-gray-400"><a href="">READ MORE</a></div>
        </div>
      </div>
      <div class="projects sm:w-940px">
        <h3 class="font-size-2xl p-2 text-center bg-black/50 text-gray-300 font-bold">FEATURED PROJECTS</h3>
        <ul class="[&>li]:m-7 flex flex-col sm:justify-center items-center sm:flex-row sm:[&>li]:m-0">
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
      <div class="mission p-10 sm:w-full bg-pink-900 text-center text-white">
        <h3 class="font-size-3xl font-bold mb-5">OUR MISSION</h3>
        <p class="px-5">This website template has been designed by Free Website Templates for you, for free. You can replace all this
          text with your own text.</p>
      </div>
      <div class="mt-10 media text-center sm:mb-15 sm:text-left text-white sm:flex sm:justify-between sm:w-940px">
        <div class="video flex flex-col items-center sm:items-start">
          <h3 class="font-size-3xl font-bold sm:mb-5">FEATURED VIDEO</h3>

          <div class="preview grid place-items-center place-content-center">
            <img class="block" src="https://freewebsitetemplates.com/preview/space-science/images/mars-rover.jpg" alt="">
            <div class="i-carbon:play-filled font-size-5xl"></div>
          </div>
        </div>
        <div class="blog mt-10 sm:mt-0 sm:w-440px">
          <h3 class="font-size-3xl font-bold sm:mb-5">LATEST BLOG</h3>
          <ul class="flex flex-col items-center sm:items-start">
            <li v-for="article in articles"
              class="sm:first:pt-0 first:border-none border-t py-5 border-gray-300 flex justify-between w-90%">
              <div class="figure"><img :src="article.img" alt="" class="src"></div>
              <div class="article flex flex-col items-start w-72">
                <h4 class="font-size-2xl text-gray-400">{{ article.title }}</h4>
                <time class="font-size-xs block">{{ article.time }}</time>
                <a class="self-end font-size-sm font-bold bg-purple-950 px-3 py-1" href="">READ MORE</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="p-10 social bg-gray-600 text-white font-bold sm:text-size-2xl text-size-xl flex flex-col sm:flex-row sm:w-full items-center sm:items-start sm:justify-center">
        <span class="mb-10 sm:mb-0 sm:mr-10">FOLLOW OUR MISSIONS ON</span>
        <ul class="flex text-size-4xl space-x-4">
          <li class="i-fa6-brands:facebook-f"></li>
          <li class="i-fa6-brands:twitter"></li>
          <li class="i-fa6-brands:google-plus-g"></li>
          <li class="i-fa6-brands:pinterest"></li>
        </ul>
      </div>
    </div>
    <footer class="text-size-xs p-10 sm:p-5 text-center text-white bg-white">
      <span class="text-black">© 2023 BY SPACE PROSPECTION | ALL RIGHTS RESERVED</span>
    </footer>
  </div>
</template>

<script setup>

const articles = [
  {
    title: "Finding Planet X-123",
    time: "FEBRUARY 6, 2023",
    img: "https://freewebsitetemplates.com/preview/space-science/images/finding-planet.jpg",
  },
  {
    title: "New Satellite Dish",
    time: "FEBRUARY 3, 2023",
    img: "https://freewebsitetemplates.com/preview/space-science/images/new-satellitedish.jpg",
  }
];
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

img {
  max-width: inherit;
  height: inherit;
}
.preview {
  grid-template: "container";
}

.preview > * {
  grid-area: container;
}
</style>