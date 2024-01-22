<!-- https://website79320.nicepage.io/Home.html -->
<!-- http://localhost:5173/transportation-company/rwd.html?https://website79320.nicepage.io/Home.html -->
<template>
  <header p="5">
    <a un-text="gray-400 3xl" font="500" href="">logo</a>
  </header>

  <section class="s1" p="x-5 y-10" h="40rem" bg="top">
    <div bg="white" rounded="xl" w="64 md:96" p="x-5 y-10" space="y-5" float="right">
      <h2 text="[var(--blue)] md:5xl">Transportation Company</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
      <Link />
    </div>
  </section>

  <section bg="[var(--blue)]" text="white center" p="x-5 y-10">
    <ul flex="md:~ wrap">
      <li v-for="feature in features" space="y-5" p="10" w="md:1/2 lg:1/4">
        <div><img m="xa" size="16" :src="feature.img" alt=""></div>
        <h4 uppercase text="2xl">{{ feature.title }}</h4>
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      </li>
    </ul>
  </section>

  <section bg="[var(--gray)]" flex="lg:~">
    <div p="x-5 y-10 md:20 lg:t-40" space="y-5">
      <h2 text="[var(--blue)] xl md:4xl lg:5xl">Explore transportation solutions for every challenge and budget</h2>
      <p>ivamus arcu felis bibendum ut tristique et. Habitant morbi tristique senectus et netus et malesuada fames. Sapien
        eget mi proin sed libero enim sed.</p>
      <Link />
    </div>
    <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/40dd7122b9ea5a8198a67a94/hhhh.jpg" alt="">
  </section>

  <section p="10" bg="[var(--orange)]" text="white center" space="y-10">
    <h2 text="md:4xl">Our company story is a values story</h2>
    <ul flex="lg:~ wrap">
      <li v-for="num in [...Array(4).keys()]" space="y-7" p="y-10 lg:x-12" w="lg:1/2" flex="lg:~ items-end">
        <div bg="white" size="12" m="xa"></div>
        <p w="lg:128">Sit amet nisl purus in mollis nunc sed id semper. At in tellus integer feugiat. Commodo viverra
          maecenas
          accumsan lacus vel facilisis.</p>
      </li>
    </ul>
  </section>

  <section bg="[var(--blue)]" p="x-10 y-20 md:x-15" space="y-10 lg:(y-0 x-10)" flex="lg:~">
    <blockquote bg="white" rounded="xl" p="x-5 y-10" space="y-10">
      <img size="16" src="./quote.png" alt="">
      <p text="gray-500 md:1.25rem" font="500" leading="10">
        The mission is to be recognized as the standard-bearer of quality performance in flatbed transportation. We will
        accomplish this by searching out the very best people.
      </p>
      <div space="x-5" flex="~ items-center">
        <img size="16" rounded="full" inline-block
          src="https://images01.nicepage.com/thumbs/c461c07a441a5d220e8feb1a/d071f361765b573dbc08ac6c/1222_150.jpg"
          alt="">
        <span><mark font="800 italic" bg="transparent">Bob Rawsthorn</mark>, ​highly&#8209;trained driver</span>
      </div>
    </blockquote>

    <div bg="[var(--orange)]" rounded="xl" text="white" p="x-5 y-10" space="y-10">
      <h2>Our Values</h2>
      <p leading="10" text="md:1.25rem">Nibh tortor id aliquet lectus proin nibh nisl condimentum. Libero id faucibus nisl
        tincidunt eget nullam. Justo
        eget magna fermentum iaculis eu non diam phasellus. Arcu risus quis varius quam quisque id diam vel quam. Felis
        donec et odio pellentesque diam.</p>
      <ul flex="~" class="[&>li]:(size-8 m-x-3)">
        <li class="i-carbon:logo-facebook"><a href="">Click</a></li>
        <li class="i-carbon:logo-twitter"><a href="">Click</a></li>
        <li class="i-carbon:logo-instagram"><a href="">Click</a></li>
        <li class="i-carbon:logo-linkedin"><a href="">Click</a></li>
      </ul>
    </div>
  </section>

  <section bg="[var(--blue)]" p="x-5 y-10 lg:x-10" text="white center">
    <ul flex="md:~ wrap" m="md:b-40">
      <li v-for="work in works" m="y-10 md:y-5" w="md:1/2 lg:1/3">
        <div p="md:x-5">
          <img rounded="t-2xl" h="64" :src="work.img" alt="">
          <div space="y-5" p="x-5 y-10" bg="[var(--orange)]" rounded="b-2xl">
            <h3 text="2xl">{{ work.title }}</h3>
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
            <a inline-block uppercase border="b-2" href="">learn more</a>
          </div>
        </div>
      </li>
    </ul>
  </section>

  <section bg="[var(--gray2)]" p="x-5 y-10 lg:x-15" flex="md:~">
    <div bg="white" space="y-5" p="5" w="md:1/2" m="md:t--40">
      <h2 text="[var(--orange)]">About Company</h2>
      <p leading="10" text="xl">Quickly incentivize impactful action items before tactical collaboration and idea-sharing.
        Monotonically engage
        market-driven intellectual capital through wireless opportunities. Progressively network performance based
        services for functionalized testing procedures.</p>
      <Link />
    </div>
    <div w="md:1/2" h="md:35rem" m="md:t--40">
      <img src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/fb75b2085f665688b53c157c/vbvbvb.jpg" alt="">
    </div>
  </section>

  <section bg="[var(--gray2)]" p="x-5 y-10" space="y-10">
    <h2 text="[var(--blue)] xl center" font="700">Transportation Solutions</h2>
    <div class="[&>p]:(p-5 font-500 rounded-xl lg:w-48% lg:leading-8)" w="lg:50rem" m="x-a" space="y-5 lg:y-0" flex="lg:~ justify-around wrap">
      <p bg="white">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p bg="[var(--orange)]" text="white">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>

  <section bg="[var(--orange)]" p="x-5 y-10 md:x-10 lg:x-30" space="y-10 lg:y-0 x-10" flex="lg:~">
    <img rounded="xl" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a4812e778b27546e88676d85/vbbvvb.jpg"
      alt="">
    <div rounded="xl" bg="white" p="x-5 y-10" space="y-5">
      <h3 text="[var(--orange)] 2xl lg:6xl" font="600">Our Mission</h3>
      <p leading="10 lg:12" text="lg:2xl">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>

  <section p="x-5 y-10" space="y-10 md:y-0" bg="[var(--gray)]" flex="md:~">
    <ul w="md:1/2" bg="[var(--orange)]" text="white" m="md:x-5" p="x-5 y-10">
      <li v-for="contact in contacts" p="y-5">
        <div space="y-2">
          <h4 text="lg" uppercase font="600" space="x-5">
            <button align-middle :class="contact.icon" size="8" />
            <span>{{ contact.title }}</span>
          </h4>
          <p>{{ contact.text }}</p>
        </div>
      </li>
    </ul>

    <form w="md:1/2" action="" bg="white" p="x-5 y-10" m="md:x-5" space="y-10"
      class="[&>input,&>textarea]:(border-b-2 p-2 w-full border-[var(--blue)])">
      <h3 text="center 2xl [var(--blue)] md:4xl" font="600">Contact Us</h3>
      <input type="text" placeholder="Enter your name">
      <input type="text" placeholder="Enter your email">
      <textarea rows="4"></textarea>
      <button rounded="xl" w="full" bg="[var(--orange)]" uppercase text="white" p="y-2" type="submit">Submit</button>
    </form>
  </section>
</template>

<script setup>
import Link from './Link.vue';

const features = [
  {
    title: 'logistics',
    img: 'logistics.png',
  },
  {
    title: 'fast delivery',
    img: 'fast delivery.png',
  },
  {
    title: 'order tracking',
    img: 'order tracking.png',
  },
  {
    title: 'warehousing',
    img: 'warehousing.png',
  },
];

const works = [
  {
    title: 'Our Company',
    img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/50bcf4b451e55ea4bb2c79ed/xcxcxc.jpg',
  },
  {
    title: 'Carriers',
    img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/82429c499d0557e78a0b930e/vbvb.jpg',
  },
  {
    title: 'Logistics',
    img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/032b145db7485f0fba1d08d6/cvcvcv.jpg',
  },
];

const contacts = [
  {
    title: 'call us',
    text: '1 (234) 567-891, 1 (234) 987-654',
    icon: 'i-carbon:phone',
  },
  {
    title: 'Location',
    text: '121 Rock Sreet, 21 Avenue, New York, NY 92103-9000',
    icon: 'i-carbon:location',
  },
  {
    title: 'Business Hours',
    text: 'Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed',
    icon: 'i-carbon:time',
  },
]
</script>

<style>
:root {
  --blue: #0c4265;
  --orange: #f15e0e;
  --gray: #f3f7fa;
  --gray2: #e0e5eb;
}

body {
  background-color: white;
}

.s1 {
  background-image: url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/c60ea3b83a4358de8fb24258/nbnnb-min.jpg');
  background-size: cover;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 2rem;
}
</style>