<!-- http://localhost:5173/training-programs/rwd.html?https://website87058.nicepage.io/home.html -->
<template>
  <header absolute="md:~" bg="[var(--yellow)]" p="3">
    <h5 font="200" text="gray-400 3xl">logo</h5>
  </header>

  <section bg="[var(--yellow)]" space="y-5" flex="md:~ items-center">
    <div w="md:1/2" p="5 md:(t-20 x-10)">
      <h3 text="lg:4xl">your personal coach</h3>
      <h2 text="lg:6xl gray-800" w="64 lg:128">
        online training programs
      </h2>
    </div>
    <img w="md:1/2" src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/d4ee61f59c695343b3666ee6/z-min.jpg"
      alt="">
  </section>

  <section text="center" p="x-10 y-15" space="y-10">
    <h2 text="md:5xl">Why people choose us</h2>
    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>

    <ul flex="md:~ wrap">
      <li v-for="(reason, index) in reasons" grid="~" m="y-15" p="md:x-10" w="md:1/2 lg:1/3">
        <div row-span-full col-start-1 text="[var(--yellow2)] 8xl md:15rem" font="800">{{ index + 1 }}</div>
        <div space="y-5" row-span-full col-start-1>
          <h3 font="400">{{ reason }}</h3>
          <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        </div>
      </li>
    </ul>
  </section>

  <section bg="[var(--gray)]" flex="md:~">
    <div text="center" w="md:1/2" p="y-10 x-5 md:x-10">
      <h2 text="[var(--yellow3)]">Life is Good</h2>
      <h3 font="400">when it's lived for oneself</h3>
      <p p="y-10" text="xl">It's great when lived for others! Unim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu</p>
      <a block bg="[var(--yellow3)]" font="700" m="x-a" uppercase p="y-3" un-text="center" w="40" href="">Read More</a>
    </div>
    <div w="md:1/2">
      <img object="md:left"
        src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/1b5890f34507521db4b625bc/3565087ff.jpg" alt="">
    </div>
  </section>

  <section class="nina" bg="black left md:[120px]" text="white center md:left" p="x-5 y-10" space="y-5">
    <h3>nina perry</h3>
    <p>manager</p>

    <h2>why us</h2>
    <p w="md:30rem" leading="2rem" h="lg:80">
      Our consulting agency provides consulting, ideas, and resources for people working to create social change. We bring
      the right people together to challenge established thinking and drive transformation. We work with our clients to
      build the capabilities that enable organizations to achieve sustainable advantage.
    </p>
  </section>

  <section text="center md:left" p="y-10 x-5 md:x-10" space="y-5 md:x-5" flex="md:~">
    <div space="y-5" w="md:2/3">
      <h2 text="md:6xl">Results & Partnerships</h2>
      <p>We develop partnerships with leading companies and organizations from around the globe to complement our
        expertise and deliver breakthrough results. We have long-lasting partnerships and affiliations with like-minded
        organizations and leaders share our commitment to deliver lasting results.</p>
      <a un-text="center" block w="40" p="y-3" m="x-a md:x-0" bg="[var(--yellow)]" uppercasae font="600" href="">Read
        More</a>
    </div>
    <div w="md:1/3" h="md:30rem"><img
        src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/49c5cc4cfa7a576d8331768f/rfgd-min.jpg" alt=""></div>
  </section>

  <section text="center" p="10" space="y-5">
    <h2 text="md:5xl">Information partners</h2>
    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
    <ul flex="md:~ wrap justify-around" p="lg:y-10">
      <li v-for="partner in partners" w="md:1/3 lg:auto">
        <img object="scale-down" :src="partner" alt="">
      </li>
    </ul>
  </section>

  <section bg="black" text="white center" p="x-5 y-10" space="y-5">
    <div grid="~ items-center" uppercase>
      <p text="gray-400/30 7xl" row-span-full col-start-1 font="800">contact</p>
      <h2 text="[var(--yellow3)]" row-span-full col-start-1>get in touch</h2>
    </div>
    <div flex="lg:~">
      <div w="lg:1/2">
        <h3 font="400">don't be shy</h3>
        <p p="lg:x-15">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to
          be part of your visions.</p>
        <ul class="[&>li]:p-5" flex="md:~ justify-evenly">
          <li>
            <div m="x-a" bg="[var(--yellow3)]" class="i-carbon:email" size="16"></div>
            <p>Mail me</p>
            <p>info@mail.com</p>
          </li>
          <li>
            <div m="x-a" bg="[var(--yellow3)]" class="i-carbon:phone" size="16"></div>
            <p>Call me</p>
            <p>+1 333 454 55 44</p>
          </li>
        </ul>
      </div>
      <form w="lg:1/2" action="" space="y-5" p="5 lg:t-0" class="[&>input,&>textarea]:(bg-black border-1 p-3 w-full)">
        <input type="text" placeholder="Enter your name">
        <input type="text" placeholder="Enter your email">
        <textarea rows="4" placeholder="Enter your message"></textarea>
        <label block for="accept"><input name="accept" type="checkbox"> I accept the <a href="" un-text="[var(--yellow3)]" >Terms of Service</a></label>
        <button text="black" p="y-3" bg="[var(--yellow3)]" w="40" rounded="full" font="800" uppercase type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  'High Quality',
  'Development',
  'Photography',
  'Web design',
  'Marketing',
  'Branding'
];

const partners = [
  'https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/b26eaa96084b5d63a1b8d98d/5.png',
  'https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/303f208dbbed58b0ad91b352/3.png',
  'https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/edcb21a5c3ce51d686ceb941/4.png',
  'https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/f152870f5c9d5ab28268fb89/2.png',
  'https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/8cf263ed39d95b719e7321a1/6.png',
];


</script>

<style>
:root {
  --yellow: #ffd741;
  --yellow2: #f9e79b;
  --yellow3: #f1c50e;
  --gray: #efefef;
}

body {
  background-color: white;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2 {
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 2.5rem;
}

h3 {
  font-size: 1.5rem;
  font-weight: 200;
  text-transform: uppercase;
}

.nina {
  background-image: url('https://images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/633c94b317fb5366b354d730/pexels-photo-3906049.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}</style>