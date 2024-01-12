<!-- https://website3626399.nicepage.io/About.html?version=a1aa9db9-493c-45b5-8893-c99593de6fb7 -->
<!-- http://localhost:5173/power-innovation/rwd.html?https://website3626399.nicepage.io/About.html?version=a1aa9db9-493c-45b5-8893-c99593de6fb7 -->
<template>
  <link id="u-theme-google-font" rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i">

  <section bg="cover top" class="contact-us md:[background-size:130%] md:[background-position:center-top]"
    p="x-10 y-15 md:(l-50)" h="md:128">
    <div text="center" bg="white/50" p="x-2 y-10 md:x-5" rounded="3xl">
      <h1 text="md:4xl">We power innovation because we are innovators</h1>
      <p m="y-10">Sample text. Click to select the Text Element.</p>
      <form action="">
        <input m="y-2" p="3" text="size-lg" font="semibold" w="full md:2/3" type="email" placeholder="YOUR EMAIL">
        <button m="y-2" p="3" bg="[var(--green)]" text="size-lg white" font="semibold" w="full md:1/3">CONTACT US</button>
      </form>
    </div>
  </section>

  <section p="x-10 y-15" class="features">
    <ul text="center" flex="~ col justify-between items-center md:row wrap">
      <li rounded="3xl" p="5" m="y-5" w="84" bg="white/50" v-for="product in products">
        <span m="x-a" size="20" bg="[var(--orange)]" block rounded="full">
          <img m="x-a" p="5" :src="product.img" :alt="product.title">
        </span>
        <h3 text="size-xl" m="y-5" font="bold">{{ product.title }}</h3>
        <p>Sample text. Click to select the Text Element.</p>
      </li>
    </ul>
  </section>

  <section bg="white" m="10">
    <div bg="[var(--gray)]" p="5" flex="md:~ items-center">
      <div w="md:1/2">
        <h2>Our company has many years of experience!</h2>
        <ul class="[&>li]:(m-y-10) [&>li>span]:(text-size-xl font-bold m-l-5 align-middle inline-block w-56)">
          <li>
            <img size="15" inline-block
              src="./imgs/ok.png"
              alt="">
            <span>Content Optimization</span>
          </li>
          <li>
            <img size="15" inline-block
            src="./imgs/ok.png"
              alt="">
            <span>Branding Strategy</span>
          </li>
          <li>
            <img size="15" inline-block
            src="./imgs/ok.png"
              alt="">
            <span>Better than normal ads</span>
          </li>
        </ul>
        <p>
          As a result of our philosophy to be the most forward thinking home cleaning company and our focus on
          understanding
          customer needs, we have and will continue to expand across the UK with franchises in the southwest of England to
          the north east of Scotland with over 50 territories nationwide.
        </p>
      </div>
      <div m="5" w="md:1/2">
        <img m="xa" size="72 lg:104" rounded="full" object="cover left"
          src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/07dfdfa5239551ee9e51616d/front-view-smiley-elegant-businesswoman-using-laptop-with-copy-space.jpg"
          alt="">
      </div>
    </div>
  </section>

  <section p="10" text="center">
    <h2 text="md:size-4xl">Together we can envision, inspire and transform your business</h2>
    <ul text="white" flex="~ col md:row items-center wrap justify-between">
      <li class="[&>h3]:last:text-[var(--orange)]" text="last:black" m="y-5" p="10 md:5" rounded="3xl" w="84" h="64" :bg="rate.bg" v-for="rate in rates">
        <h3 m="y-5" text="size-2xl md:size-7xl" font="bold">{{ rate.percentage }}</h3>
        <p text="lg">{{ rate.text }}</p>
      </li>
    </ul>
  </section>

  <section m="10">
    <div bg="[var(--gray)]" p="x-2 y-5" flex="md:~ items-center justify-between">
      <div class="[&>*]:m-y-5" m="md:l-5" w="md:1/2">
        <h2 text="md:size-3xl">About Our Company</h2>
        <p text="gray-500">Sample text. Click to select the text box. Click again or double click to start editing the text. Image from </p>
        <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart
          money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day
          real less till dear read. </p>
        <ul class="[&>li>span]:(m-x-1 text-[var(--orange)])" font="light" text=" size-xl">
          <li><span>►</span>Support via E-mail and Phone</li>
          <li><span>►</span>Multi-Language Support</li>
        </ul>
          <a font="bold" tracking="wide" un-text="size-2xl hover:[var(--green)]" href=""><button align-middle size="8" class="i-carbon:phone-filled" text="[var(--green)]" />+1 (234) 567-8910</a>
      </div>
      <div m="5" w="md:1/2">
        <img m="xa" size="72 lg:104" rounded="full" object="cover"
      src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/abd943c656105541872fcdd1/portrait-beautiful-caucasian-woman-laughing-covering-face-with-hand-chuckle-something-funny-express-happy-positive-emotions-white-wall.jpg"
      alt="">
      </div>
    </div>
  </section>

  <section bg="[var(--green)]" text="white center" p="10" class="[&>*]:m-y-5">
    <h3 text="size-2xl" >Add more speed to your website</h3>
    <h2 text="md:size-4xl">Your success in the industry is our mission</h2>
    <p>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money
      hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less
      till dear read.</p>
    <a bg="black" font="bold" p="x-10 y-3" un-text="white" href="">READ MORE</a>
  </section>

  <section>
    <h3 p="10" font="bold" text="size-2xl md:size-3xl" >Our Modern Office Space</h3>
    <ul flex="md:~ wrap">
      <li w="md:1/2" overflow-hidden v-for="space in spaces">
        <img object-cover class="transition hover:scale-110 duration-500" w="full" h="96" :src="space" alt="">
      </li>
    </ul>
  </section>

  <section bg="[var(--gray)]" p="10" text="center" class="[&>*]:m-y-5">
    <div>
      <img m="x-a"  object="cover [-35px]" size="72" rounded="full"
      src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/ee6258ad779a50aeb60a64b7/fashionable-young-redhead-woman-with-braid-tattoo-shoulder-having-rest-indoors.jpg"
      alt="">
    </div>
    <p text="size-lg">
      Faucibus vitae aliquet nec ullamcorper sit amet. Auctor eu augue ut lectus arcu bibendum at varius. Ac turpis
      egestas sed tempus urna et pharetra pharetra. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Lorem
      dolor sed viverra ipsum nunc. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.
    </p>
    <img m="x-a" src="https://images03.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/bb37292b528c5f3f8bfd73f3/___._.png" alt="">
    <span font="bold" text="size-xl">Stella Larson</span>
  </section>

  <section p="10" gap="md:5" class="[&>*]:(w-full h-72 md:h-80 object-cover)" flex="md:~ wrap">
    <img w="md:1/5"
      src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/20cebe00b3975420afb850e2/business-sucessful-businessman-working-with-laptop-using-computer-smiling-standing.jpg"
      alt="">
    <img w="md:1/5"
      src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/8dfd94ea91d15a07a4d8993a/41dead2e-89b8-4788-859e-d96b8f1d9713.jpg"
      alt="">
    <img w="md:1/2"
      src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/e5bef7faa99e55f19bf51030/elegant-smiling-man-typing-computer.jpg"
      alt="">
    <div bg="[var(--gray)]" p="5" h="80"  w="md:1/2">
      <h3 text="size-2xl" font="bold">Our perfect team</h3>
      <p p="y-5" >Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart
        money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. Image
        from </p>
      <a font="bold" un-text="white size-md" bg="black" p="2 x-10" href="">READ MORE</a>
    </div>
    <img w="md:1/5"
      src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/ee6258ad779a50aeb60a64b7/fashionable-young-redhead-woman-with-braid-tattoo-shoulder-having-rest-indoors.jpg"
      alt="">
    <img w="md:1/5"
      src="https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/29fd0360109159e1970d573a/woman-sitting-sofa-with-laptop-legs.jpg"
      alt="">
  </section>

  <section bg="[var(--green)]" text="white center" p="10">
    <h2>Featured clients</h2>
    <p m="y-5">Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex.</p>
    <ul flex="~ col items-center md:row wrap">
      <li  w="72 md:1/2" m="y-5 md:y-10" v-for="client in clients">
        <img w="40" h="20" m="x-a" :src="client" alt="">
        <p>Sample text. Click to select the Text Element.</p>
      </li>
    </ul>
  </section>

  <section class="contacts" p="10 md:y-20">
    <div bg="white/50" rounded="3xl" text="center" p="5 md:10" gap="5" flex="~ col items-center">
      <a font="bold" un-text="white" p="3 x-10" bg="[var(--orange)]">CONTACTS</a>
      <h2>Together for a business lifestyle</h2>
      <p>We are here to meet any business need and to promote your company online!</p>
      <ul text="size-xl">
        <li v-for="contact in contacts">
          <span font="bold" text="" class="after:content-[':']" >{{ contact.type }}</span>
          <span>{{ contact.text }}</span>
        </li>
      </ul>
    </div>
  </section>

  <footer bg="#333333" p="10">
    <p text="center white">Sample text. Click to select the Text Element.</p>
  </footer>
</template>

<script setup>
const products = [
  {
    img: "imgs/Investment.svg",
    title: 'Investment',
  },
  {
    img: "imgs/Finance.svg",
    title: 'Finance',
  },
  {
    img: "imgs/Risk Management.svg",
    title: 'Risk Management',
  },
  {
    img: "imgs/Audit.svg",
    title: 'Audit & Accounting',
  },
  {
    img: 'data:image/png;base64,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',
    title: 'Marketing',
  },
  {
    img: 'data:image/png;base64,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',
    title: 'Experience',
  },
];

const rates = [
  {
    bg: '[var(--green)]',
    percentage: '50%',
    text: 'Sample text. Click to select the text box.'
  },
  {
    bg: 'black',
    percentage: '36%',
    text: 'Click again or double.'
  },
  {
    bg: '[var(--gray)]',
    percentage: '20%',
    text: 'Click again or double click to start editing the text.'
  }
];

const spaces = [
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/2f29242132ca565ebb7c836c/businessman-working-with-laptop-office.jpg',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/806984438e2b56dabf1cd41e/documents-with-charts-touchpad-desk.jpg',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/43bdaa24bc855997be21ba58/516befa0-bbfa-454c-acd8-11ce10a95795.jpg',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/5f0866426abe54f7b27c5cb4/pexels-fauxels-3182759.jpg',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/e8b57286eafe541c9d61ebad/pexels-fauxels-3183181.jpg',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/2f868a3cb2ae539ba7e43e3e/pexels-fauxels-3183179.jpg',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/210084dc58bd5c6796e3c8c2/pexels-lisa-fotios-3197390.jpg',
  'https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/9b91317c5d445f72bb35db22/pexels-fox-1595391.jpg',
];

const clients = [
  'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/6e6414551ba057cda3373ae6/logo-amazon.svg',
  'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/d31506595cff5d9f89d800f7/1.svg',
  'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/16dceaaca47153d9b01ce7f6/evga.svg',
  'https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/b88bf2b6798c5483a79b3bc6/tesla-9.svg',
];

const contacts = [
  {
    type: 'Phone',
    text: '1 (232) 252 55 22',
  },
  {
    type: 'Location',
    text: '75 Street Sample, WI 63025',
  },
  {
    type: 'Mail',
    text: 'template@sample.com ',
  },
];
</script>

<style>
:root {
  --green: #2aba5b;
  --orange: #f1ae0e;
  --gray: #f2f2f2;
}

body {
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
}

.contact-us {
  background-image: url('https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/6f08fcd379775a96a7ab7ce6/positive-business-woman-posing-camera-outdoors.jpg');
  background-repeat: no-repeat;
}

.features {
  background-image: url('https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/e39b53000c675b9abef6df35/top-view-person-writing-laptop-with-copy-space.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

.contacts {
  background-image: url('https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/32037b0791a95987aececbcd/female-work-brainstorming.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.75rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 900;
}
</style>