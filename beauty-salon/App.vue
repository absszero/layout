<!-- http://localhost:5173/beauty-salon/rwd.html?https://rushhairbeauty.nicepage.io/Page-2.html -->
<template>
  <header p="x-10 y-5">
    <h2>
      Beauty Salon
    </h2>
  </header>

  <section class="s1" p="x-10 y-5 md:y-15">
    <h2 p="x-2 y-15 md:(x-10 y-20)" text="md:6xl" w="52 md:100" border="5 [var(--blue)]">Rush Hair & Beauty</h2>
  </section>

  <section bg="[var(--blue)]" text="white center xl" font="semibold">
    <ul p="10" space="y-20 md:y-0" flex="md:~ ">
      <li p="md:x-5" v-for="icon in icons" flex="~ col items-center justify-center" space="y-10">
        <svg fill-white size="16">
          <use :xlink:href="'./icons.svg#' + icon.img"></use>
        </svg>
        <h2>{{ icon.title }}</h2>
        <p>{{ icon.text }}</p>
      </li>
    </ul>
  </section>

  <section flex="md:~">
    <div w="md:3/5" p="x-10 y-20">
      <h2 m="y-15" text="center 4xl [var(--blue)]">Advanced Facials</h2>
      <div bg="[var(--blue)]" p="x-10" h="84">
        <img relative top="24"  src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/65c5739df8ba5e55afe9580f/PinkEyelashandMascara.jpg"
          alt="">
      </div>
      <p m="t-50" p="md:x-10" text="xl">Get in touch today to book and we will be happy to help </p>
    </div>
    <div w="md:2/5" p="x-10 md:(x-5 y-10)">
      <img h="200 md:96" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/e1a9f2e1c298567b80431bb7/MACTresCheek.jpg" alt="">
      <p text="2xl" m="y-10">We advanced facial offers the ultimate indulgence for anti-aging, acne control, skin calming and toning. Our
        advanced facials target problem areas to nourish, regenerate and energise. We use botanical extracts to help treat
        and improve overall skin health.</p>
    </div>
  </section>

  <section class="treatments" p="x-10 y-15 md:y-10" flex="md:~ justify-end">
    <div w="md:100" p="x-5 y-10" text="white right" border="4 white" space="y-5" flex="~ col items-end">
      <h2 text="4xl md:5xl" >Hair Treatments</h2>
      <hr border="2 white/30" w="40">
      <p text="2xl" >We offer an extensive range of services including cutting, styling, blow drying, colouring, hair extensions, hair
        straightening and conditioning treatments. </p>
    </div>
  </section>

  <section bg="[var(--yellow)]" p="x-10 y-15" flex="md:~">
    <div relative w="md:2/3" >
      <img z-0 absolute top="-50" h="96" w="64 md:84" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/e36ac70f27ec50259c00b0a7/Untitled6.jpg" alt="">
      <div w="64 md:92" bg="[var(--blue)]" m="l-20 md:l-10 y-10" p="l-10 md:l-20 y-20">
        <img relative z-10 h="96" w="44 md:64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/58ce470aacea581b83e91b2e/cds.jpg" alt="">
      </div>
    </div>
    <div space="y-5" w="md:1/3">
      <div >
        <img h="160 md:128" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/7b62a06ec8975771b65afbfb/Untitled7.jpg" alt="">
      </div>
      <h2 text="4xl" >Welcome Offers</h2>
      <p text="xl">Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
        ultrices.</p>
    </div>
  </section>

  <section p="x-10 y-15">
    <div text="center">
      <h2 text="[var(--blue)]">Occasion Packages</h2>
      <p text="2xl">Nam nec auctor quam, nec bibendum massa. Ut pharetra fermentum nulla, at venenatis elit fringilla et.</p>
      <ul flex="md:~ wrap">
        <li v-for="pkg in packages" w="md:1/2" p="5">
          <figure h="84" relative text="white left">
            <img :src="pkg.img" alt="">
            <figcaption absolute bottom="0" space="y-5" w="full" m="y-5">
              <h3 text="3xl" p="x-5">{{ pkg.name }}</h3>
              <hr w="full">
              <p p="x-5">consectetur adipiscing elit nulla</p>
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </section>

  <section class="s6" p="x-10 y-15">
    <div p="x-5 y-10" border="4 white" text="white" space="y-5">
      <h2 text="5xl">Beauty Treatments</h2>
      <hr border="2 white/50" w="32">
      <p text="xl">We offer treatments for nails, eyes, hair removal, tanning, facials, massages and more, so let our expert
        therapists and stylists reveal your true beauty. </p>
    </div>
  </section>

  <section>
    <ul flex="~ col items-center md:row wrap items-center justify-center">
      <li v-for="brand in brands"  p="10">
        <img w="48" :src="brand" alt="">
      </li>
    </ul>
  </section>

  <section bg="[var(--yellow)]" flex="md:~ ">
    <img w="md:1/2" h="128" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/d506f1b504ff583cb9a80ef9/34.jpg" alt="">
    <div w="md:1/2" p="y-10 x-5 md:x-10" space="y-5">
      <h2 text="[var(--blue)] 4xl">Airbase Make Up</h2>
      <hr border="2 gray-300" w="32">
      <p text="2xl">Perfect for weddings, proms and other special occasions, this treatment will give your skin a truly flawless
        long-lasting look. With an airbase make up treatment, your makeup will look amazing all day with no touch-ups,
        regardless of the weather, and can even be used on sensitive or acne-prone skin.</p>
      <a w="36" p="y-3" bg="[var(--blue)]" un-text="sm white center" block href="">LEARN MORE</a>
    </div>
  </section>

  <section p="x-15 y-15" bg="[var(--blue)]" text="white">
    <h2 text="[var(--blue2)] center">Visit us or call us today</h2>
    <div flex="md:~" max-w="3xl" m="x-a">
      <div m="y-10" space="y-5" w="md:1/2">
        <h3 text="4xl">Opening Hours</h3>
        <ul text="xl" space="y-2">
          <li>Tues - Thurs: 9am - 5pm</li>
          <li>Fri: 9am - 7pm / Sat: 8am - 4pm</li>
          <li>Sun - Mon: Closed</li>
        </ul>
        <a un-text="[var(--yellow)] 2xl" block href="">contacts@esbnyc.com</a>
      </div>
      <form w="md:1/2" action="" m="y-10" class="[&>*]:bg-[var(--blue)]" space="y-5" >
        <input border="1 [var(--yellow)]" p="3" w="full" type="text" placeholder="Name">
        <input border="1 [var(--yellow)]" p="3" w="full" type="email" placeholder="Email">
        <textarea border="1 [var(--yellow)]" p="3" w="full" rows="4" placeholder="Message"></textarea>
        <button bg="[var(--blue2)]" text="black" p="y-2 x-5" uppercase type="submit">Submit</button>
      </form>
    </div>
  </section>
</template>

<script setup>
const icons = [
  {
    title: 'About Salon',
    img: 'makeup',
    text: 'We offer an extensive range of services including cutting, styling, blow drying, colouring',
  },
  {
    title: 'Our Team',
    img: 'haircut',
    text: 'Our team of stylists and colourists are passionate about hair styling and are always happy',
  },
  {
    title: 'Products',
    img: 'manicure',
    text: 'We understand how important it is to feel and look your best, and our blend of service, expertise',
  },
];

const packages = [
  {
    name: 'Nail Art',
    img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/af93cd1278ad50ab94a940fd/35772thelatestnailpolishtrendsinstantdesigns.png',
  },
  {
    name: 'Make Up',
    img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3ddf42bbae665465a76590f1/gtrw.jpg',
  },
  {
    name: 'Hair Salon',
    img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/d7ab6513e9665972b173e37d/kosa.jpg',
  },
  {
    name: 'Beauty Therapy',
    img: 'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/39f588e4807b5cbebbaf6a5c/rf.jpg',
  },
];

const brands = [
  'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/5fd9e32a91da5811850be369/Morrocanoil.png',
  'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/63aa20f08c2e5012a162bd35/Nouveau.png',
  'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/6b017f27798d54e081483076/PaulMitch_1.png',
  'https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a3c2930f0e6152a69647cdf4/olaplex.png',
]
</script>

<style>
:root {
  --blue: #1f2253;
  --blue2: #c1c3ec;
  --yellow: #f3eddd;
}

body {
  font-family: serif;
  background-color: white;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h2 {
  font-size: 2rem;
}

.s1 {
  background-image: url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/c2a96c9da51256fb984a6303/hairheader.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

.s6 {
  background-image: url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/bf2fd05a96895b5da1c13af9/67.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

.treatments {
  background-image: url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/5073a3eec1b954aea576d164/ef.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>