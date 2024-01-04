<template>
  <!-- https://nicepage.com/website-templates/preview/personal-thoughts-in-interior-68879?device=desktop -->
  <div class="container ma">
    <header>
    <svg class="ma left-1/2 mt-5 absolute" xmlns="http://www.w3.org/2000/svg" width="32px" viewBox="0 0 24 24">
      <path class="fill-white" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
    </svg>
  </header>
  <section m-x-0
    flex="~ col sm:row"
  >
    <div min-h-460px w-full class="section-1-image"></div>
    <div text-end mr-2 sm:m-x-5 sm:mt-30 >
      <h2 mt-10>MINIMALIST INTERIOR</h2>
      <h1>DESIGN</h1>
      <p class="text-start p-2">
        The architectural reimagining of the space began with the idea of paring away everything to a state of
        emptiness and using three axes from the underlying structure to shape the new geometry.
      </p>
    </div>
  </section>
  <section class="section2 bg-bottom sm:bg-right">
    <h2>MODERN</h2>
    <h2 class="mb-10 font-bold">Interior Studio</h2>
    <p>
      Adding items that have that natural feel or are from organic roots would give our homes the warmth of nature.
    </p>
    <ul class="mt-15 sm:w-2/3"
      flex="~ col flex-col items-center sm:row wrap"
    >
      <li v-for="item in items"
        flex="~ col items-center justify-center"
        size-40
        m-4
        text="center"
        bg="black"
      >
        <div
        text="size-7xl"
        :class="item.icon"></div>
        <span
        text="size-2xl"
        >{{ item.name }}</span>
      </li>
    </ul>
  </section>
  <section class="section4" text-end sm:text-center uppercase
  >
    <div>
      <h3 text="size-xl">Decorating Secrets</h3>
      <h2>Interior Art</h2>
    </div>
    <div flex="sm:~ items-end">
      <img class="size-86 object-cover m-5" src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/5a722f602c7957e29952e156/pexelsphoto3874015.jpeg" alt="">
      <img class="size-86 object-cover m-5" src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/b05f8a1851105cc1b07eb140/pexelsphoto3874013.jpeg" alt="">
      <ul text-right>
        <li text-size-2xl v-for="item in ['artworks', 'artists', 'Magazine', 'Terms of Use']">{{ item }}</li>
      </ul>
    </div>
  </section>
  <section
    flex="sm:~ row"
  >
    <div class="sm:w-1/3">
      <h2 class="leading-10"
      text="size-3xl sm:size-5xl"
      font="bold"
      >FOR HIGH LEVEL OVERVIEWS</h2>
      <h3 mb-15>BUSINESS STRATEGY</h3>
    </div>
    <p mb-15 class="sm:w-1/3 sm:mr-10">
      Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,
      a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User
      generated content in real-time will have multiple touchpoints for offshoring. At the end of the day, going forward,
      a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
    </p>
    <ul list-disc text-size-xl list-inside class="sm:self-end [&>li]:pb-1">
      <li>STRATEGY</li>
      <li>CONCEPT</li>
      <li>MARKETING</li>
      <li>MANAGEMENT</li>
      <li>DESIGN</li>
    </ul>
  </section>
  <section text-right
    flex="~ col sm:row"
  >
    <div>
      <img class="w-86 h-72 object-cover sm:w-128 sm:h-92" src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/9dbd3c1f8f7656d087f52c21/pexelsphoto35544241.jpeg" alt="">
    </div>
    <div class="sm:w-2/5">
      <h3 m-y-5 class="text-size-xl uppercase">from Milan Design Week</h3>
      <h2 mb-5 uppercase font-semibold text-size-4xl sm:text-size-5xl>Interior Color Trends 2020</h2>
      <p>
        I love to observe how the colour trends that we see are always the consequence of bigger trends, which are generated
        by macro changes in our society, interest, behaviours. As a consequence, they are reflected into new shapes, new
        colours...
      </p>
    </div>
  </section>
  <section
    flex="sm:~"
    sm:h-200
  >
    <div class="">
      <div mb-5>
        <img class="object-cover size-86 sm:h-full sm:w-108" src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/0dedaa8602ba5d6d818dec9f/houseofsilencemariamarinina03.jpg" alt="">
      </div>
      <div class="sm:w-120">
        <h2
        text="size-4xl sm:size-5xl"
        font-bold uppercase mb-5>Thai Style Home Wabi Sabi</h2>
        <p mb-10>
          The home is surrounded by a landscaped garden and there are lots of different neighbours in the area. The average
          home is created for a single family.
        </p>
      </div>
    </div>
    <div
      class="w-128 [&>img]:mb-5"
      grid="sm:~ cols-2 items-end"

    >
      <img class="object-cover size-86 sm:w-52 sm:h-84" src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/42568883ba365e639e3fc0a9/0f9a91f61af2dac432841181deef820c.jpg" alt="">
      <img class="object-cover size-86 sm:w-52 sm:h-60" src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/2dd335aa72b0516cb1df543c/22c7537e24e94a7b5fc4c74be769544a.jpg" alt="">
      <img class="object-cover object-bottom size-86 sm:w-108 sm:h-84 col-span-2" src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/add58d50d86d5fb4a773eff5/0ee610f6080f69b8179888943e49b794.jpg" alt="">
    </div>
    <div>

    </div>
  </section>
  <section text-center>
    <h2 class="uppercase mb-5 font-bold">Get in Touch!</h2>
    <p sm:w-128 ma mb-10>We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take
      action.</p>
      <ul
      flex="~ col sm:row items-center justify-center"
      >
        <li v-for="connect in connects"
          mb-15
          flex="~ col items-center"
        >
          <div
          class="text-size-5xl rounded-full mb-5"
          :class="connect.icon"
           ></div>
          <div text-size-xl text-gray-300 font-bold mb-5 class="after:content-[':']" >{{ connect.name }}</div>
          <div><ul>
            <li w-64 v-for="text in connect.text">{{ text }}</li>
          </ul></div>
        </li>
      </ul>
  </section>
  <footer class="bg-blue-950">
    <p
    p-10
     m-x-10
     text="center size-sm"
    >
      Sample text. Click to select the text box. Click again or double click to start editing the text.
    </p>
  </footer>
  </div>
</template>

<script setup>
const items = [
  {
    icon: 'i-carbon:idea',
    name: 'Idea',
  },
  {
    icon: "i-carbon:license-draft",
    name: 'Project',
  },
  {
    icon: "i-carbon:star",
    name: 'Design',

  },
  {
    icon: "i-carbon:color-palette",
    name: 'Color',
  },
  {
    icon: "i-carbon:tool-kit",
    name: 'Support',
  },
  {
    icon: "i-carbon:license-draft",
    name: 'Project',
  }
];

const connects = [
  {
    icon: "i-carbon:location",
    name: "Address",
    text: ["121 Rock Sreet, 21 Avenue, New York, NY 92103-9000 "],
  },
  {
    icon: "i-carbon:email",
    name: "Email",
    text: [
      'hello@company.com',
      'support@company.com',
    ],
  },
  {
    icon: "i-carbon:phone",
    name: "Call us",
    text: [
      '1 (234) 567-891',
      '1 (234) 987-654',
    ],
  }
]
</script>

<style>
body {
  background-color: black;
  color: white;
}

h1 {
  font-size: 4rem;
  font-weight: bold;
  text-decoration: uppercase;
}

h2 {
  font-size: 3rem;
  line-height: 3rem;
  text-decoration: uppercase;
}

section {
  margin: 0 2.5rem 2.5rem 2.5rem;
}

.section-1-image {
  background-image: url('https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/04a7960db4c959a7ac43ece4/pexelsphoto3289084.jpeg');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}

.section2 {
  background-image: url('https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/ca53768833225c14a921c673/pexelsphoto3178818.jpeg');
  background-repeat: no-repeat;
  background-size: contain;
}
</style>