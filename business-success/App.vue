<!-- https://website3667110.nicepage.io/Home.html -->
<!-- http://localhost:5173/business-success/rwd.html?https://website3667110.nicepage.io/Home.html -->
<template>
  <section class="section-1" p="x-10 y-15" text="white">
    <div bg="white/20" max-w="740px" m="x-a" p="x-5 y-10" text="center" border="20 [var(--blue)]" space="y-10">
      <h1 text="size-2xl md:size-6xl" leading="7 md:15" p="x-5" font="bold">We Are Increasing Business Success With IT
        Solution</h1>
      <p leading="10">
        Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non. Dolor
        magna eget est lorem ipsum dolor sit amet consectetur.
      </p>
      <a block bg="[var(--blue)] hover:[var(--blue-2)]" w="40" m="xa" p="y-3 x-5" href="">read more</a>
    </div>
  </section>
  <section bg="white" p="x-10 y-15" space="y-10">
    <h2 text="size-3xl md:size-5xl center" font="bold" leading="8 md:14" p="x-1 md:x-0">We advise leaders on strategy,
      marketing, organization and IT</h2>
    <ul flex="~ col md:row wrap" m="md:x-5">
      <li v-for="num in [...Array(6).keys()]" w="md:1/2" p="b-10">
        <div m="x-a y-5 md:x-0" text="size-5xl" bg="[var(--blue)]" class="i-carbon:checkmark-filled"></div>
        <p><span font="bold">Sample text.</span> Click to select the text box. Click again or double click to start
          editing the text. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      </li>
    </ul>
  </section>
  <section bg="gray-100" p="x-10 y-15">
    <ul flex="~ col md:row wrap justify-center" gap="10">
      <li w="md:84" overflow-hidden v-for="img in imgs">
        <img object-cover class="transition hover:scale-110 duration-500" w="full" h="82" :src="img" alt="">
      </li>
    </ul>
    <a un-text="white center" w="32" m="x-a y-10" p="y-3" block bg="[var(--blue)] hover:[var(--blue-2)]" href="">view
      more</a>
  </section>
  <section bg="white">
    <ul flex="~ col md:row wrap justify-center items-center">
      <li flex="~ col items-center" text="center" space="y-5" v-for="person in persons" w="96" m="y-20" p="x-10">
        <div w="64" h="72" border="10 [var(--blue)]" rounded="50%" flex="~ justify-center items-center">
          <img size="36" rounded="full" :src="person.avatar" alt="">
        </div>
        <h5 tracking-wide font="200" text="size-2xl">{{ person.name }}</h5>
        <h6 text="[var(--blue)]" font="600">{{ person.title }}</h6>
        <p font="200">
          Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem
          bibendum
        </p>
        <ul w="48" flex="~ justify-center" gap="3" bg="[var(--blue)]" text="white size-3xl" class="[&>li]:m-y-2">
          <li class="i-carbon:logo-facebook"></li>
          <li class="i-carbon:logo-twitter"></li>
          <li class="i-carbon:logo-instagram"></li>
        </ul>
      </li>
    </ul>
  </section>

  <section bg="gray-100">
    <ul p="x-10 y-15" text="center">
      <li bg="white" v-for="numebr in numbers" flex="~ col items-center" space="y-10" p="7" m="y-5">
        <h4 flex="~ items-center justify-center" font="bold" size="36" rounded="full" text="white size-4xl"
          bg="[var(--blue)]">{{ numebr.count }}</h4>
        <h5>{{ numebr.title }}</h5>
        <p text="gray-400">
          Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart
          money hopes worth too. Comfort produce husband boy her had hearing.
        </p>
      </li>
    </ul>
  </section>

  <section bg="white" p="x-10 y-20" flex="~ col md:row wrap" space="y-5" class="[&>*]:md:(w-1/2)">
    <div space="y-5" p="md:10">
      <h5 text="size-xl">
        Explore national parks with digital tours, ranger programs, educational opportunities, and more.
      </h5>
      <ul text="" space="y-2">
        <li><button align-middle class="i-carbon:checkmark" m="r-2" />Lorem ipsum dolor sit amet, consectetur </li>
        <li><button align-middle class="i-carbon:checkmark" m="r-2" />Elit, sed do eiusmod tempor incididun </li>
      </ul>
      <a block un-text="white center" w="32" m="x-a md:x-0" p="y-3" bg="[var(--blue)] hover:[var(--blue-2)]" href="">book
        now</a>
    </div>
    <div h="md:96" relative>
      <div absolute top="1/3" left="-2rem" bg="[var(--blue)]" rounded="full" size="25">
        <svg p="5" size="25" fill="white" viewBox="0 0 60 60" x="0px" y="0px" id="svg-be5f">
          <g>
            <path
              d="M42.595,0H17.405C14.977,0,13,1.977,13,4.405v51.189C13,58.023,14.977,60,17.405,60h25.189C45.023,60,47,58.023,47,55.595
            V4.405C47,1.977,45.023,0,42.595,0z M15,8h30v38H15V8z M17.405,2h25.189C43.921,2,45,3.079,45,4.405V6H15V4.405
            C15,3.079,16.079,2,17.405,2z M42.595,58H17.405C16.079,58,15,56.921,15,55.595V48h30v7.595C45,56.921,43.921,58,42.595,58z">
            </path>
            <path d="M30,49c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S32.206,49,30,49z M30,55c-1.103,0-2-0.897-2-2s0.897-2,2-2
            s2,0.897,2,2S31.103,55,30,55z"></path>
            <path d="M26,5h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4c-0.553,0-1,0.447-1,1S25.447,5,26,5z"></path>
            <path d="M33,5h1c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1c-0.553,0-1,0.447-1,1S32.447,5,33,5z"></path>
            <path d="M56.612,4.569c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c3.736,3.736,3.736,9.815,0,13.552
            c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
            C61.128,16.434,61.128,9.085,56.612,4.569z"></path>
            <path d="M52.401,6.845c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c1.237,1.237,1.918,2.885,1.918,4.639
            s-0.681,3.401-1.918,4.638c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
            c1.615-1.614,2.504-3.764,2.504-6.052S54.017,8.459,52.401,6.845z"></path>
            <path d="M4.802,5.983c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-4.516,4.516-4.516,11.864,0,16.38
            c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
            C1.065,15.799,1.065,9.72,4.802,5.983z"></path>
            <path d="M9.013,6.569c-0.391-0.391-1.023-0.391-1.414,0c-1.615,1.614-2.504,3.764-2.504,6.052s0.889,4.438,2.504,6.053
            c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
            c-1.237-1.237-1.918-2.885-1.918-4.639S7.775,9.22,9.013,7.983C9.403,7.593,9.403,6.96,9.013,6.569z"></path>
          </g>
        </svg>
      </div>
      <img size="full" object-cover
        src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/8f93fb525fca5a7d86a20ba0/black-white-exterior-building.jpg"
        alt="">
    </div>
    <div relative>
      <img size="full" object-cover
        src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/fd44305e8d7e5cb4adf5f7cd/low-angle-shot-creative-modern-building-with-outstanding-architectural-twists.jpg"
        alt="">
      <div absolute top="1/3" right="-2rem" bg="[var(--blue)]" rounded="full" size="25">
        <svg p="5" size="25" fill="white" viewBox="0 0 54 54" x="0px" y="0px">
          <g>
            <path d="M27,8c-9.374,0-17,7.626-17,17c0,7.112,4.391,13.412,11,15.9V50c0,0.553,0.447,1,1,1h1v2c0,0.553,0.447,1,1,1h6
		c0.553,0,1-0.447,1-1v-2h1c0.553,0,1-0.447,1-1v-9.1c6.609-2.488,11-8.788,11-15.9C44,15.626,36.374,8,27,8z M30,49
		c-0.553,0-1,0.447-1,1v2h-4v-2c0-0.553-0.447-1-1-1h-1v-5h8v5H30z M31.688,39.242C31.277,39.377,31,39.761,31,40.192V42h-8v-1.808
		c0-0.432-0.277-0.815-0.688-0.95C16.145,37.214,12,31.49,12,25c0-8.271,6.729-15,15-15s15,6.729,15,15
		C42,31.49,37.855,37.214,31.688,39.242z"></path>
            <path d="M27,6c0.553,0,1-0.447,1-1V1c0-0.553-0.447-1-1-1s-1,0.447-1,1v4C26,5.553,26.447,6,27,6z"></path>
            <path d="M51,24h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S51.553,24,51,24z"></path>
            <path d="M7,24H3c-0.553,0-1,0.447-1,1s0.447,1,1,1h4c0.553,0,1-0.447,1-1S7.553,24,7,24z"></path>
            <path d="M43.264,7.322l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S43.654,6.932,43.264,7.322z"></path>
            <path d="M12.15,38.436l-2.828,2.828c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293l2.828-2.828c0.391-0.391,0.391-1.023,0-1.414S12.541,38.045,12.15,38.436z"></path>
            <path d="M41.85,38.436c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2.828,2.828c0.195,0.195,0.451,0.293,0.707,0.293
		s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L41.85,38.436z"></path>
            <path d="M12.15,11.564c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-2.828-2.828
		c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L12.15,11.564z"></path>
            <path d="M27,13c-6.617,0-12,5.383-12,12c0,0.553,0.447,1,1,1s1-0.447,1-1c0-5.514,4.486-10,10-10c0.553,0,1-0.447,1-1
		S27.553,13,27,13z"></path>
          </g>
        </svg>
      </div>
    </div>
    <div space="y-5" p="md:10">
      <p text="gray-400">Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can
        manor smart
        money hopes worth too. Comfort produce husband boy her had hearing.</p>
      <p font="bold">Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil
        round
        defer. In surprise concerns informed betrayed he learning is ye.</p>
    </div>
  </section>

  <section bg="[var(--blue)]" text="white" p="x-10 y-20 b-50" flex="~ col md:row items-center">
    <div space="y-5" text="center md:left" w="md:1/2">
      <h2 text="3xl md:4xl" font="bold"> Ready to get started?</h2>
      <p>Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <a block un-text="black center" bg="white hover:[var(--gray)]" p="y-3 x-5" w="36" m="x-a md:x-0" href="">learn
        more</a>
    </div>
    <ul space="y-10" m="y-10" p="md:x-10" w="md:1/2">
      <li v-for="icon in icons" space="y-5">
        <div m="x-a md:x-0" bg="white" size="15" rounded="full" flex="~ items-center justify-center">
          <div p="5" size="10" bg="[var(--blue)]" :class="icon"></div>
        </div>
        <div space="y-2">
          <h6 text="size-2xl">Sample Headline</h6>
          <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        </div>
      </li>
    </ul>
  </section>

  <section bg="white" p="x-15" text="center">
    <div relative bg="white" top="-5rem" flex="~ col items-center" space="y-10" p="y-10 t-20 md:x-10" shadow-md>
      <img absolute top="-6rem" size="48" rounded="full" object-cover
        src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/e0fa2686ba3f5ed2af6a9332/pexels-photo-3894378.jpg"
        alt="">
      <p text="2xl" font="200">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident.
      </p>
      <div size="25" bg="[var(--blue)]" rounded="full" flex="~ items-center justify-center">
        <div size="15" p="5" bg="white" rotate="180" class="i-carbon:quotes"></div>
      </div>
    </div>
  </section>

  <section bg="gray-100" p="x-10 y-15">
    <div bg="white" p="5" space="y-10" flex="~ col md:row items-center justify-around">
      <img object-cover rounded="full" size="64"
        src="https://assets.nicepagecdn.com/11a8ddce/3667110/images/pexels-photo-733500copy.jpg" alt="">
      <div w="md:1/2" text="center" space="y-10" p="y-10">
        <h5 text="2xl md:3xl center" font="200">
          We realize that you lead a busy life, so we have made it easy for you to drop off your vehicle 24/7. </h5>
        <a block un-text="2xl" font="bold" href=""><button align-middle size="12" class="i-carbon:phone-filled"
            text="[var(--blue)]" />+1 (234) 567-8910</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const imgs = [
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/9239811de8205445af21052d/pexels-photo-4107897.jpeg?version=',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/9511ac3b37495996a3254cb7/pexels-photo-7766563.jpeg?version=',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/1cde03e6bce55c308a3ae41d/pexels-photo-3802239.jpeg?version=',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/84a02149a82b5daa80088729/pexels-photo-3261141.jpeg?version=',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/341614f7646b5ffd8cb65497/pexels-photo-3137073.jpeg?version=',
  'https://images03.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/087b0b74312e591cb872313e/pexels-photo-2438212.jpeg?version=',

];

const persons = [
  {
    name: 'Mary Brown',
    title: 'creative leader',
    avatar: 'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/23f2b6ec8f435911852884f1/2.jpg',
  },
  {
    name: 'Bob Greenfield',
    title: 'programming guru',
    avatar: 'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/47d488474b1750ad8f9a684f/fggf.jpg',
  },
  {
    name: 'Ann Richmond',
    title: 'sales manager',
    avatar: 'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/dee2a7ea9eea577cab16110a/fff.jpg',
  },
]

const numbers = [
  {
    count: '35m+',
    title: 'Square feet managed',
  },
  {
    count: '158',
    title: 'Employees on our team',
  },
  {
    count: '250+',
    title: 'Happy Clients',
  },
  {
    count: '34',
    title: 'Awards',
  },
]

const icons = [
  'i-carbon:idea',
  'i-carbon:flag',
  'i-carbon:send-alt-filled',
]
</script>

<style>
:root {
  --blue: #2590f4;
  --blue-2: #0c82f1;
  --gray: #cccccc;
}

body {
  font-size: 1rem;
}

a {
  text-transform: capitalize;
  font-size: 1rem;
}

.section-1 {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://assets.nicepagecdn.com/11a8ddce/3667110/images/pexels-photo-1471751.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}</style>