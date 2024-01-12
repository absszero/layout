<!-- https://organic.nicepage.io/classic.html?version=8b107ae4-e6ed-4164-8826-ee8ccf1cd3a2 -->
<!-- http://localhost:5173/organic-food/rwd.html?https://organic.nicepage.io/classic.html?version=8b107ae4-e6ed-4164-8826-ee8ccf1cd3a2 -->
<template>
  <link id="u-theme-google-font" rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i|Fjalla+One:400">
  <div>
    <section bg="[var(--blue-1)]">
      <h2 p="t-5  md:l-10 lg:l-5" text="[var(--yellow-1)] center md:left">Organic Food</h2>
      <hr w="full" m="y-10 lg:y-5">
      <div p="10">
        <div flex="md:~">
          <img w="md:1/2" src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/af1657a07c145b64a4922981/qs.jpg"
            alt="">
          <div p="5 lg:10" w="md:1/2" bg="[var(--yellow-1)]">
            <h2 p="lg:t-20" text="[var(--blue-1)] lg:size-7xl">Organic Garden</h2>
            <p italic m="t-5 b-10">
              Eating out is an essential part of our lives and we spend much of our time choosing between places that
              offer
              the best of cuisine and a desirable ambiance.
            </p>
            <a w="40" block uppercase un-text="white size-lg center" bg="[var(--blue-1)]" p="x-5 y-3" href="">learn
              more</a>
          </div>
        </div>
        <ul p="y-30" flex="~ col justify-between items-center md:row wrap">
          <li p="b-15" w="84" text="center" class="last:md:justify-self-start last:md:self-start" v-for="feature in features">
            <div>
              <span m="x-a" rounded="full" block size="25" bg="[var(--yellow-2)]">
                <img size="25" p="5" :src="feature.data" alt="">
              </span>
              <h2 text="[var(--blue-2)]" m="t-5">{{ feature.title }}</h2>
              <p m="y-8" text="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section bg="[var(--yellow-1)]" grid="~ auto-rows-min lg:cols-2" p="x-10 md:y-10">
      <div md:full>
        <img h="128" w="md:full" object-cover
          src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/78ac32ed35045b9ab90c9787/zs.jpg" alt="">
      </div>
      <div grid="row-start-3 lg:col-start-2 lg:row-start-1" bg="white" p="5 md:10 lg:y-30">
        <h2 text="[var(--blue-1)]">Reduce, Reuse, Recycle</h2>
        <hr m="y-5" border="3 [var(--yellow-1)]">
        <p m="y-5">
          The “3 R's” are a mantra for the environmentally friendly restaurant manager. By reducing waste, reusing
          containers, and recycling materials, your business can make huge strides when it comes to sustainability.
        </p>
        <a href="">learn more</a>
      </div>
      <div grid="row-start-2" flex="~ col md:row">
        <img w="md:1/2" order="2 md:1"
          src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/a6f4e4b0edcd5026a2073cec/PineappleGingerIcedTea2598x900.jpg"
          alt="">
        <ul w="md:1/2" p="y-20 x-2 md:x-10 md:y-35 lg:x-5" bg="[var(--blue-1)]" order="0 md:1" list="inside decimal"
          font="semibold" text="white size-2xl md:size-4xl lg:size-3xl">
          <li>Avani Eco</li>
          <li>Evoware</li>
          <li>Zero Waste</li>
          <li>Osem</li>
        </ul>
      </div>
      <div class="hidden md:block" grid="lg:row-start-2 lg:col-start-2">
        <img w="md:full" h="128" object-cover
          src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/a2ef8aceab345663911208a0/PineappleGingerIcedTea7598x9001.jpg"
          alt="">
      </div>
    </section>
    <section p="10" bg="[var(--yellow-1)]" flex="md:~">
      <div w="md:1/2" bg="white" p="x-5 y-10">
        <h2 text="[var(--blue-1)]">Green restaurants</h2>
        <ul m="y-5" italic list="inside decimal">
          <li>The Bistro of Green</li>
          <li>The Twisted Olive</li>
          <li>El Fogon Mexican Grill</li>
          <li>Latino Bar and Grill</li>
          <li>Basil Asian Bistro</li>
          <li>Jerzee's Sports Grille</li>
          <li>Hot Head Burritos</li>
        </ul>
      </div>
      <div w="md:1/2" bg="[var(--blue-1)]" p="x-5 y-10">
        <h2 text="[var(--blue-2)]">Eco-Friendly Practices</h2>
        <p italic text="white" p="y-5">
          Even better, 65% of consumers will pay up to 10% more to dine at a green restaurant versus a restaurant that
          simply serves organic food. With this in mind, check out the ideas below to see all the different ways you can
          green your restaurant.
        </p>
      </div>
    </section>
    <section bg="[var(--blue-1)]" text="white right" p="10 md:20 lg:30" flex="md:~ col items-end">
      <h3 m="y-5" text="size-2xl lg:size-3xl" uppercase>Our Mission</h3>
      <h2 w="md:4/5" text="[var(--blue-2)]" border="b-5 [var(--yellow-1)]">11 Ways to Go Green</h2>
      <p m="y-10">
        Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus
        laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor
        commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.
      </p>
    </section>
    <section>
      <div flex="md:~">
        <img object-cover w="full lg:2/7" h="64 md:84"
          src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/5376b175e5e057428e32a5e3/95f373590dad79bcf3202ce6edad5bcd.jpg"
          alt="">
        <img object-cover w="full lg:2/7" h="64 md:84"
          src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/9663d32125cc5b52ad22f301/53b1f260135ec7676401816dfad16b2c.jpg"
          alt="">
        <div bg="white" p="y-15 x-1 md:x-2 lg:x-5" w="lg:3/7" h="md:84">
          <h2 text="[var(--blue-1)]">Reduce Waste</h2>
          <p p="t-10">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit
            ultrices.
          </p>
        </div>
      </div>
      <div bg="[var(--yellow-1)]" p="10 y-20 lg:30 lg:x-40">
        <h2 text="[var(--blue-1)] lg:size-6xl">Use Energy Efficiently</h2>
        <hr m="y-5" border="3 [var(--blue-1)]">
        <p>
          According to the Green Restaurant Association, restaurants are the number one largest consumer of electricity in
          the commercial sector. That's crazy but makes sense. It takes a lot of energy to run a restaurant. Luckily,
          there are many practical and even easy steps you can take to reduce your energy impact.
        </p>
      </div>
    </section>
    <section bg="[var(--blue-1)]" p="10 lg:20">
      <form m="x-a" w="md:96 lg:4/7" class="
    [&>input,&>textarea]:w-full
    [&>input,&>textarea]:m-b-3
    [&>input,&>textarea]:p-2
    ">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <textarea name="" rows="4" placeholder="Message"></textarea>
        <button bg="[var(--yellow-1)]" p="y-2 x-5" uppercase>
          Submit
        </button>
      </form>
      <img m="20 x-a" block
        src="https://capp.nicepage.com/2514fe69a19b8307ee0e6b68597a9ce3f3c43b7d/images/default-logo.png" alt="">
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    data: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='u-svg-content' viewBox='0 0 512.136 512.136' id='svg-621e'%3E%3Cg%3E%3Cpath d='m494.705 145.448-51.24-123.706-123.706 51.241c-23.516 9.741-44.882 23.077-63.691 39.737-18.81-16.66-40.176-29.996-63.691-39.737l-123.706-51.241-51.24 123.706c-23.241 56.108-23.241 117.91 0 174.018 23.241 56.109 66.941 99.809 123.05 123.05l115.587 47.877 115.587-47.877c56.109-23.241 99.809-66.941 123.05-123.05 23.241-56.108 23.241-117.91 0-174.018zm-163.465-44.749 76.39-31.642-76.658 185.069c-5.585-43.699-23.87-85.57-53.766-120.038 16.015-13.941 34.134-25.146 54.034-33.389zm-85.819 43.214.898.905c55.482 56.628 71.74 140.45 41.402 213.724l-31.654 76.418-151.561-365.903 76.39 31.641c24.379 10.1 46.089 24.639 64.525 43.215zm-200.274 164.073c-20.174-48.705-20.174-102.352 0-151.057l31.642-76.39 151.562 365.904-76.39-31.642c-48.706-20.176-86.639-58.11-106.814-106.815zm421.842 0c-20.175 48.706-58.108 86.64-106.814 106.814l-76.39 31.642 31.642-76.39c.004-.009.008-.019.011-.028l119.909-289.486 31.642 76.39c20.174 48.706 20.174 102.353 0 151.058z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E",
    title: 'Organic',
  },
  {
    data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAIABJREFUeF7lXQuYHFWV/k91TzKDCQR5BmGBkIRMzZCuzvAUVEABSbqaVxJBEMQHLAjuiisoykPURVZcldV1QQRxQYUAkqkOLAIalreQTM1kpoZAjAQh4f3Ic9LprrPfqe7JzqOr6lb1Iw/v98335Uvfx7m3Tt2659z//IewHZbp00/cu4DkVBAmg2gygL3AvCcIewDYEcD48l9yyPTXAFhd/nsHhFeYsZKIXyKXlxZYe2FpT8cK4Gp3e1oy2tYnM6ljzk47FAY+UtRwFDF3AGQA2LVO81oHosUAnoXLzyQ5ubCn5/dv1GmshnS7TStAm5H5IoN+DiDRkNUaPQgD6GPgoQS4s3dKy2OYN6+4hWSJNew2rQB6KnMoiJ6JNfP6NHobxPPJ1W7v657x6LbwudimFQBz5iT0FwfeBLBzfZ5nVb2+zMy3FYEbX+jOvVpVT3VsHEkB9JQ5lwhHuKCXAF5BTCsSbvGlJUsWvFtHGQO71lPm3SCctqXGDx+XNwG4T0Pix732/CfD6ze2RjQFMMxbAJw7SkTGAAgrAV4O0HJiLHc1XgUkViYLheVLlhzyUr22w9Z09gJi/s/GLlvs0Z4gl6/r68lZsXuoccNoCpA2HwHj2BgybATw6qCCALQKzCtZ05Z7CjJthxVxD0/6jOxkuPxiiEzrAKwA42VovBJMBanPwDoQ8vJvcrEDE3Ylz1Tk3cCeJbErQE0x5hvchOgxFOlrTs/8LX5+iaYARmYZQAfUfEEAUZCX5bMCphWk0Yrddlp97cKFC70HFVZ0w1wOYH8wBph4MUDPgPmZRELrp03Fv8X9RHV0nNe0kV9rdYuYTuQe5IIMYkwHYc8wmRR+Z4DvdpG89Hn7vpcU6telSgQFuFrTjUUbAIypiyTDO13r2JY4a5SKns58nJhWNycm2osW3STf3LqW9hmzWl1OzAS7nwToIwDGVjHgegDfQ775eseZ5+1GjSzKCuB517Tk3xokXJ9jW+0NGquqYXR9zjiMGfg4gNlgzAahOWaH/XC1cxv9WVBWAD2VOQry7WpI4QWOncs0ZKgaDiJeyebCwKdAdAHA4pGMWopMuH7TmsJVy5Y9IJ/FuhdlBWg1sscR+EaA967LwWjIVAn4zz7b+lLdZ1/HAaalM0ckXHyZieYC0CINRVisaYm5vYvu+0ukdjEqKyvA0L4POmjWzpuaMElzE5OIeRITJjGwFzEmgnAggHExZNnchEGX9dud/1ZNH1tL29bps9pJS1wD8MlibKjLxe8T0ef7uqx71NtErxlBIOXOqbXj1D0TxeL+LtyfAkgrtyxXZObT+7tzd0ZttzXXn3bQSQdpieIVAM2OpAiMG5zujq/Uy49SDwXA5Mknjh0zLilOo0/HeiiudnijD0Ox5IzRSCwWMG6MYk4z4d6m4saze3r+IP6MmpaaK4B8HooJ7fcAPhZXUq1Ae/b2dr4et/3W3m7vI+a07Lhh42WAe7nqeYqB5zZRYeayrgfk7qNmpaYKMDWV+VAS9DAI02JLyBhwuq0dSo667bu0pTMpl+lmAg5WnGm/VtBO6O2dXzNzvGYK0N6e3cNN8h8B6IqT8au21LGt+ApU5eCNbi7exvXFVdcR8BXFsV9Cgj/mLMq9rFg/sFpNFEA/ZOaeyCf+pPjmy82hADgEmjWqMPCHfts6oRaT25b6aE1nTyfmmwF8QEHuFS4SR9fChVy1AkxOn7jbGE4uVHzzXyy6ZCY0fs7PVGTQL/rtzvMUFmG7qyKfBGa6F8Akhcm9mKfCkdWeCapSgP2OPrq55b1xjxDowwoCP5GnwinJpmZXyxfeCqj/Tce2/lWhv+2yiq6f8EGMHTNP8db1z0l347HVWAfVKAC1GuYdBJyh8CTuaklMPEsualqnZ2aQRov82/BZjp27Q6HP7baKvFg7vDfuboBmKUzyfmdKczbudXpsBWhNZa4hoitCBSTcuftOa84avNptT2VPdYl9vVsEOqrP7nwitN/tvIKuzxmDpoHfqKGd6AeO3XlpnCWJpQBtafM0ZswL82gR6Nd9U8Z+bqh2tqXMrzDh3/2E1QraP9TSzPEbR0+ZbUz4PoGb2cVl/T05gXtvXWXOnETbixtvYfDZCoKd69jWrxTqDasSWQGmGSfvp6HYBWBC8GA8z7EPPn2kC1M3Mj8G6J8qt+VNzpSWlrjbmcrkvUMrEt8H02eHXNK4YNya1wrfqPZQpSJDpDqiBC9suJ2JTg9pt07T3EN6Fy/oj9J/JAU4+uijk6+/N+7R0EMf0WPrd1p9/EsLFw6MFEY3zPsAnOQj5HLHtuqBOPKG043sHIB/BmA3n/HfBPGFTlfu7iiLWO+63udgzMAfFLyrvatbmg995al5AtxRKpEUQE+Z14Lw9cCeGc9jU/5Ix3nwnUr1dCPb5X9Xzn9y7FwczGGgSCVTNfEzgOYorsqdBQ0XvbDICrJWlLqqVaWyuS0Ywv1D1v8Gp9vy2WFHt1RWgHIQhsCag6Jw3tMSiYOD7rF1wxTF8MPx/8qxrdGo4ypWsT2dPdhlljd634jdvOoSz3m+K/dUxHZ1q+5B0VxNnkHQ59dlomP6uzr/V0UQJQWQrf+N98b/OeRqlzWm2b3dneLIqFgmH3bijmM2Jt/3F4yvduzct1UEV6mjp8zzQPiPKnCMBWJ8q6/buk5lvEbUaU9ljneJHggBmby4uqU5pfIpUFIA3ch+A+Bg5wzRvztdnV8NWoT2GdnprsvdfnUI9Nk+u/O2ahfSs6PfH/czMH2u2r5K7emOpDtwfjUOl9rIUepFT2WuB1HgWgP4V8e2vhk2bqgCtHecfIBbLC4B0BLQ2bMtiYlHhiFy26ZnTNao068fDXxMr50Tt3Ls0t5+0j5u0pXAi1TsTio2JDvpbjJ7eh54pbb9Ru9N8BZN45J/JmB6QOs8g9v77VxgzESoAuiGKcgcwbX5lTy7bkd/z4LesKnoafNiMG7wq1d0MWlpj/XXsH78fhfbHoT7AfxD3D5C2glfwMy+rpzvLlancUd1q6eyaRA/Hfx5407HzvlZXKW9LUjgaTNmdWiu9mxwPfXvdsjWVWxJTGwJ20X8H76HWpY3P8Q/UfUjeleDltka4vx0w7zciykIKGG7aqAC6IYptudxAf33It/coRrQcOD07IHJBM9g8L5wtX1BLCdz+dsfhLecLivWm1uGrMubrxxMUqUarCMms6+7809V9lNd81J0tA0gKIbicce2JHil8ofN943ysGv0cKCELj7u9FgCAqm6CKZ++aJ5ARZC5SFa09mPEvMCRSSyhJAJxYvQxlQqy8pmbrCtXWq5lolmqZpbVS+QTwf6jOwn4bJYBf6FMNPpsirW8d0B9JQp0C6JePEpWz54o80wD2FAFFAFhv5oIYHZiSLmEXB0pUkxsHATFeaO4aRgGo9UeGhrCTi2z7bkM7nFSqthPkjA8b4CED3mdHV+tNLvFRWgBGF25aDjpyBFdl1D5eBXr1U5cLq5f0KDOGmE+CnkBcDNnG/+knyqWg3zT0EK0G9bx8gpe+y4ppsUL2HegkZHOIs7ZffYIqVsXstllq+TToN2ZKVzS8UH3GZkbwuZ/K2ObdXIxo6+ZtMOPWUXLV98EuCpoa0JVzld1jWD9VQUoFyX9LR5BRgqjqml7pjkkc//+fdvh8pTpwq6H3dDeTyBlvd3WaOINEYpwIHp7F4JZjHF/KKA3aJL+tKezqV1mktgtwKpHr9hw8OhF1IerHh0hFEEBfDkaDWy/0TgH4VZTAAeXz9hzXGVLsAasU7lHVFsfr9doFBg3m8kXc0oBQgzLfw0qRGTLD+Qmwj8xZDxmIFL+m3rxyPrRVUAaa+nzPNBEDayYL8J4Uany/rHRq3FyHH0tNkJhuk3PhFd2dfV+Z2hv1dSAHHotPl14hJ/eEtdkLSmMp8iot+FLTCBL+qzc3LtO6rEUQBPCdLZr4L5+rCxAZrr2J0Clml4aU2f9Ali96GAgV92bGu/oTEXwxSgfHMWdKJ91rGtQxs+MwAHHTRrUjEhJI20U+D4IXcScRWgvBPcAMLFIfN/r+hiRjUezWrWt9UwuwNdxK77UadnweYw/2EKoKfMwAky8KV+22o4IZMET2worhKc4CEKi/M2sXtmX/eCB2u5A7SlZp3ApAlYdZdwGfiZlsReH4nr1Qzv379GmTzzJv8a/HPHzl04+PtQBSDdyLwK0MSKjRkDCdfdKy7fTlWTSpmXCX4vQh/MhH/r7+q4fCQkLcYOQG0p81Imz+UahZH0a45tKXwyIsxKoarHWNI08GYAU8mbzpTmiYOwu80KEA7Xxl2ObX1KQYaaVinf7jmKzp6RY9+PfP4zQ9FJURSghF9o+hXAp8SY1Hqmot7fdf+KGG2raqIbmfkAZf06GXqO26wAbensFcy82V4e2ZgIs+tNVlBJYN3I3hvzAQx29zIBswe9daoKoBszDUATbH4VGEUBxuaCblKretB+jXXDFMDrrQGdf8+xrW/J75sVQE+ZT4FwuE+jfHED7bp0aadQqjestBqZmQQSP3+1RUCSFwpsWkUB2ozsOQwWsy8IA6Ekk8Z8Qm93Ti7VGla86KIxTa/5hp4zFjndlheR7ClAOaZf4s59vnH8sGPngm4F6zE50g1T4OdBwA4BbapTwxNuhPD8AUf4CCwvQQ8Y50eYkGAcP+hbn7DY6fIWu6Hh7rqReQigT/jIVSxuoJ3lhfYUoHzC/R+/STDon/vtzp9EWJSqq+rpbBbM8wM6cl3iozSm3QG+LdQ8rFqiUR2sZeYvkDCgEgkA09dJxOBZ/XZOrqsbVvR05stg8n9mxJ9wunKPeELrafPKIJ+3plGqd3FnT8Ok9zD8poBQg8y+mxzb8t5UwRkkNC/czNeBVVvZ6QV2i6cNXobpRvZ2gM/0H4Ofceyc3+e1tqKVews71A96BUsKYGRyAYGIa5wpzTvXM1pn5AqUka8V7fhy3TV5KhwwNIrnwAOz4xMtuAVgIWGqX2HcUxygc4eehzwSTUq+GEQSyaQd1981PxhfUUupS2CR93ytJ8b/ON3WiWUFMIWPZ/fK49cnWCNoriEKCSL6bl9XZ8XA1BIUnH+qyr0TYc2LxPhmX7cl9HWjvud6OvtDMF8SsAuE4vMiyKJUVQ8m937Dsa09aPr0U3YvaIUAQia+1rFzgj1rSPHYRjYlhANnaEKnoWOvHoPEvrZ9n2h3xTItbX5Mc/G7GpE6yxivu4RPPd9lPeo3ZjlyR2x+H8uBNyXdpr0bmWNIN0xxXvk+u0TR/SC1Gyd92IUbEI7NZzp27jcNefoKly4M/KjftgLetJKkJcXe9DuAjqlS9ieKRHOXdnWuDOtHN8wbAfiymzT6MN2aNj9DjF/7yu1qh1NrOnM2MfkGY2hEh/R2dQqlS0OKns70gOkgn8FcLZGYqkqh6t0hFFZdD8KXYwnPuKElOfFfVH36ZVi6xFD4WQRdjm3NiCVLjEZhOZWYcDbpKfPbIFzp1/9AonlCHLBmDHlRjn0Tt69PieePaEubZzDjF4oETDL2OiJ8sa/L+m3UebQamSeCwCoMnhoWrBF1TL/6hnHyhDyKQel8vkch8K/XHduqRXIEpTmFBY6A+XNOdy7Ixek7TtlUlLjFMBq7F92idtrzS+bLmxy5tBmZLzFIKHIrFia6sL+rU7yMDSm6EXDAZ/xSvG3iap1ZUZqSF6ujIZKWbH9B4wqpcuVCWpvTNT9ghwiWtBycKv4FIbSuVJbmxxYOXfbMA5JBNFYJi38E4x6n26qvqTpE8pBP6nxRAAk39nGNxttyY62cWgo4IXA4QzxYscbwMH7hqOC4fevTZ30EGt3pe6Ve6vgdx+7YrV7kzyNlD5qv4BjlDNAfQPDYsCvgMM/VkIkVwHyZ050ToGZk/3qdFID0VOYrIJIwcj/zdcgUimnHvl8ieupeAtPqMZ6XHeA1f2z9cPRIPaUNs0YqjD1/INF8TtQDaq0VoJwy5pchAbQjxG8cFV6gacp4TVBA7/ldpKja3LVQjDCnhc+hYJhPXkWOWipA3DsIZv5Of3fO1/JSmYdqnRCY3xuyA4iZUDGitpEK0Jo27yHGqaoTG1LPu5VTTTBRKwXQDfOk+LeQjQOKhCjAW6IAvpw9jVQA3TD7FEw0P/1gEP1o951WXxaWa7BaBfDoct7f8TowC7t3KL+Cj8C9jm35ObtivAP+TfSU+ZMAR9jbogASzlQR0NBgBQgij1JdlMc50TS3f9G9q/waVKMAnr/fTf42OGhWSdS3HNvyo6pT6kC1UjAvI94RBXjDnzevcYdA3cjkA27w5LSv+LbxKjDmOt25xystUlwFKHEQ4K4QE2/okEEyb3RsK25+QdVn79VrM8xfMPAFn0avigK8AGCKT4WGmIElcuTxvuSGAl5gluRTyujcQXavUVe3cRQgBtvY/US0mJk94GXFkm8eq0qsEemJj6gcCKolXhLsCGI84nRbfriyauQa1rZ8lSo7UeXC+Een27qpjM8XtjLVPHz3DSSaPzvUVIyiAJ6JN3bgZjBU4fCb4xH09HPngcnX5VtIYLdGEFHqhilX2BW5AQD8r4RABwQUku3YnZHTvkXVjLC0tEz4Qn+XJbY2yowYEqHjD8QcLoCTSOC0JYus5+W/VRXgoA5zWrEIgZmF3R0MjvY2NDrLWdzpYStb0+bniSEZQCqWpFvYpxGMY7phyp2GH4XMfbIDSHq3yuycjNecbqtypFDUpxxQvwRjHuMfW890sdPdufmCpRQsUpwH0GGKYqwF6HMStKmiACVAqvvrCEDTrqKL04bGA4aBMscgsXMQqEVxXqHVdMMU5HTlcDbiW0QBAlEj+bGFnaq5HAmVEEA59s83czYD3+q3rWFsWN654d3xPwXh8ypjlN3GPwS82IejfNrIwVGo14SEUenQScDN6yasuXgkL0BYoM3uE9Y0hZmsivPyrRb2YjHzFaIAgVEkruYe/PziBQEZPqoVs9ReN0wJOqnM9cP4pdNtVTzJelutC1GEhpyqN8+WMcAaLhr8NI1chRDGjtWObQVHOddgWVtnmIeT69HoVCxMdAZJkmONSW4EKxYifDoOMCKq/LphCsdN5fNGAMmRjFPmMxRCaIl9b0R5ydXc2UEvhm6YsptUJpoaEplTT2HDIGEEHEph20QQAreWwutp83cBp+0NyDdPCDKbvHk0jbkDhE/WUq5RfRH+mCwmzwgCd3qpcz+QfC9gV/qNY1sBcQS1mUGbkbmOQf6pZPL5XQZh4RIW5hNi1RhMQGsq8y0iGkZfMnQZ1HIJXa3pqUVXgSD2t6qpqLraLkDfcewZ14Td5Ze5C30RxAAakhktxARc6djWhzwFCOGZW7v7hDU71/3A4oEpNH+Oe+YfOt25f1F5WnraPBGM2yOYimHdrmbgnH7bkmwnoaXNMH/EwD/7VfSjbAvtOEKF8sFaoPOShrdCod87duepSqFhYJrhdHdKoGbdSjktitwHVM6cSfibM7l5f9UIpTJrltjx1foxRpl4QYtQzq3wEoAP+dRb05KYuIsq0jjugpfPRb5obmJ8XfIglHaAMHIhwpedLksSL9S1hLFcaUynBSWkGClcKUv3gJBFxc1Ccuv6CWsujEL9pqfMuSAIw7pfuc+xrTiEE5HWXk9lLgGRmL2V33+mY4XruLQDiMtzzIDgAvzgTA85tuVPRRpJNP/K5aROd/nX8IIsBb8YCQpW5s0RBR6rKOpGAl/cZ+cESh6lCMTuWRB8gbSNItoICQsrFDfQBzeHh3tKkDKf8xecNyG/aU+/RFBRViiobvlSSK5yfSnf4y5ghNxBKzSi2XGCYRRo7N7Nry1MXLbsgY21WrNK/QjxdnNxw5sBt6uPOrbl8SX/P0OIYX5XTqe+W0aN0rmETTw8yBIvFzdQexy2khLFbEE8fb5s4e6Y5OFxKF9Li76xF+C9A+Z4vWNbXwtbg2p/D1PEwe//MAUIjxHEfMe2/DH71Updbu9R1br8l8BQ6yoyjKvcBcSZShhXL4ANaCpOcp69X0C4dS26kZ0XFCZPxMZg1pP/93eXcPmy/fohVTYk3Y27NSJxUpth/oyBzVx2lVYrboKpeiiAnsqcCyK5VAs4viBSPr+4GlLe5V4NOO+86tjWPoPnqBFEkdmfg9iX63botWxcAVXaTe0wd00WIde3/qSMjAEwZkVNWFFrBdBLiTUkuirogPkW8vkD632G8s5yIXmZRsL8himAggdLwIxCshTpFK7y0EfWCWe89FqsAfNMP/hXpXFrqQDK2UqYPu90dwbvEHEWqUKbwDsVqT/CpzPiyvNqTTcWCVW8f+6eGqaJCZ6zyPLcgwFMV4PNNzDwaVUvXa0UoDWVOYVAkt49+BaS6EGnq/PERrw0Ci9wn2Nbw8AhFdjCM1cBdHXAw2nIYVDGb2/P7uEm3S4FIKbsSNc6U5qvDPMUVqsAXgLt98d/lxhyyRKGGViZdJPpRrGCtBqmRUAm4NmNoq8dNYHWjlMnUjG/IsCGjETSUO3O5tG9MIRo0S+BxeYhGHiOmM4LcltXowBe/GKCfgGGCsnDRrjucUOZuatdi6D2evokHewK1X9lpWQMJDm570hlrFg5lJ41AKBRj0m2prOnE7PgAFVu+IoM3J4sutcsWbJAsoQNK3EUQJ+RnUwuruASFZwKYbQLxhlOtxXg1aztSoWl+RHkUp9tjUq0UVkBUplDQSSpyv2KC6aD631BNHTwMvGCuHPDtt3BZsVSFlG6eXXz2IcGEymrKkD5HuF4wdRTiT9BRfm8YxYDFzWSVl8haRSDtPZK3Aq+i6kbpiQV8MPOiR3g8czVVo+Deytz+ArSViEEe1hf6wBeyIynieiMAKSvIxlJmFlwg+Iq9blK9ZOTN5VM5Zw/MVMdFiw0bRxwv2NbsyoN7asAKkTNW4IIudXIziK4d0RA7NZhySt1ye+D6Ay/BI1DW8RNkllp1DCaX6/NiCwhQ/sJ3E7DCY/Q0z+leUbYybvWT6A1PXNfchPCA9hQ+lXfeRAWa1pirip7mW6YwicoHlcxuVeAaQU0dwWBVhSKtFg1I5sHPRuXFJxGq/8aByf4DFSAEuVJAEpHRiX+htOVi5LNoyb6UJp8QkxWgXCHWgg1GXR0JwJl/wHyzdeohnmVASMSBuf3GVO+MNJDLvBKaXKLHUFsJKEHqjDaVgB5Ij50S6VU96jlWPspGMfW6SH7dMsPF13tItW3dbCTMlJplHWyeZARQTB+cyod/NzngihxGbit37YE9h+weYWsWnvHyQe4xaLE7gf5up31E9Z0REHO1PphSfQuE10W4gipxbBPMGlXxyV+bjcyR7sg36zj5HK2rydnBQnqweeaBp4MAp5IcmskuM1ZlHu5KgWQxnrKvBaEr4esnvLWVYun4NdHWzqTcpnOIcYZteMK5lUg7bca4bZqafNDA3GK2vQwjsKw7G6lLzMu6eu2hEgrsIR+AqR1R4e5w4YiJJm0H5BCqrka84mNTo/iNzvvW/vOB46ARscC8ud571SyjEuXEqW0GIQ/wuU/OlNbnqrVQVc3gl3tYaF44bA5b0W6d5+w5mAVJLeSAkiPZcCI+AaCHCKr3aJ2VJgGh2llvX73opCRnEoJ7MEuxhOws4zFwLukYQ0X8XqBeOnI/Lq1lCcEOPKuY1u+Uc/TUjOnapSQxJ47BshUdDX3MNVwPmUFKH8KVDJn/jXpJg9v1AVILR9OI/oKBmv6h+OXMRISwudH5jEo/uaMYCrziaQAJdOr6WmAjZDOn21J4OhFi6z1KkL8PdXRDfMvACb5zLkiZFw5Yzrj6ZbkxI9GiTmIpADep0DMLleTgINgNynhTmdy85m1+nZuH0ri4S3EB+Djt+CfOHZueERRCaonga9heMy3tYKW7u2dL8k2lEtkBZCe29LmacyQDNlh7e9qSUw8K4pGKku+DVYMY0IZdXIvPXy5V/h0yHSFJu9kp6uzM+qyhD1A3/50w/wBgNBYPQZyGyasmbMlfQRRF6Ve9UtMY7Q5c/fIcZj51P7unDCmA6WH/ysAZ4XJI0QP/d05gfVHLrEVoCygaFxlqvlhovCC9RPWzv57VwLdyJwJkAStVizsckd/T26xOHp47MBvVZhTCfTrPrtTvH2xcJrxFcDLy3P8BwraWPFqhad1F5t6Y35OI5CxkV+DBjVoNcxvEuD/pubzHgqax4y5h0rX0cGF6LH8mk3HVRNpVJUCiHTlrGPChhFmnkj15UR86pa6Nwhbz3r/HpJUam0igUOKRYgbOMjhVhKTeInb1HRMnCimofOsWgFKSnDi3gUtsVAp07bg+QkXSCLnei/41tZ/CHBDspQUUXZOhcjel3STx9bC11ITBRBhvTt6FiVQ4+kh4MfNiYmX/j1ZCLqRXQrw1CoVcyknmo4J4kOO0n/NFMBTAkEUu/kHA9K+DZeNeAlcfMHpzkken+29CCPbuipT0jucaPpErR6+9yWp9aqXU9FLqJRfivaRQ7oAbka++auOM29treXZWvorZ0T1ZTEPk5PBTxYTdFKt6WVrrgClM4FYB83/HYHcWc6+EhF8fjUJocIWcUv+HsbZF3Lcv3v9hNWfqYcZXRcFKE+GdCN7FcCSGiXCOPwwgS7vsy259dpuigJ1TOW5Ct6QtYuLicRf+xfdK6Hlsex9v4WM8GDiPQs9nZkNjzSZojBjyiTnu0Xtyq31ajnqarQa2UsJLFnFqimCQXwFwCqAVzLRcnKxnDVtebJQWL7LLuteVsEADBWg7gogg3mwMrd4l2JI1VD55HxwN4Fu6LM7AxJcV7OmjWmrwnlQvSS8CaBXGHR+v935kEp/DVEAEUR46wYKqy5h4u8EARkDhF5KjFs3aoVblnU9IMSW21QJzNBa45mokWqWBm2YAgzOUZ9+0mHQXMn/G4BlD1iRkiPpXgbmuRvokThcQTVeb6XudMOUwM02pcpVViow762Kamq4AshDbl7FAAACSklEQVTcyqSQcpMopFQRw6+GrU4ehMfBeED+nG5L0Mt1LaWU9CvT0DA+isWiG6Z4+sbXVbhS53nH7mgJo7MdlGOLKMDg4NOMk/fTqPh9SfJUo93oDYB7wOhmDT0a0M0bW/pVgzZGPhwPhlWgfUjjacx8GECHQnIXlUgh/urYlh+yZ1hXAlB98/0dv8Eu7wvifQHat0zCocpbGEFv+C+OnQu/Syj3uEUVYLMizJjVobnatQCOizBT1aoFMN4C4S0G3iLgDQZJEmrP6URcAoaWiyB1PgTGPiDIQ2oJHESjKc7izmWqgoysJ06zTU2YpLmJSQzsBeKJxDwJTJNA3uVaEPiz8rAR8zxtFQowOBN9unksCJfXIC9f3GcSrR3xBU5X7r+iNVKvPaggiQLtxUQTWcOkIQpyQEVCTeJbnK6cahaVxh8CVaYvwR3s0ldBfHpMi0FlmOrrMO5xuq3Z1XcUrwfP7a4l9uPyZ0UD78eMp6IQU2xVO8DIZZBr5k2U+CwRnaN0Rx5vHatp9a4zpXm3bRn4ulUrwJAnQ/r0WUeRpp3NQBbA7tU8tZq2ZT5sW77N3FYUYMgzu1qbln7uMM2lLMhjxBLbekvNo0jgC2KwitdUB6vpbEstXDUyD2sruYIo2XSkm6AjCfRhMAsP3tCTfc3GAvA6gB6AnmTgCXcDnt5WHFF+i7DNK0CliQnhtAbSCW4rmPYB857wzCxIEkwx7SYArJUvqOS+4f0SmQLeB/E6MMmFizzsV8H4G2vUz02Jvmrxd7XUxFr19X8q428cTG19WgAAAABJRU5ErkJggg==',
    title: 'Reduce',
  },
  {
    data: 'data:image/png;base64,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',
    title: 'Products',
  },
]
</script>

<style>
:root {
  --blue-1: #2a304d;
  --blue-2: #cbcfe6;
  --yellow-1: #ffd900;
  --yellow-2: #ffe44d;
}

body {
  font-family: 'Open Sans', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Fjalla One';
}

h2 {
  font-size: 2.5rem;
  font-weight: 500;
}
@media (min-width: 1024px) {
  h2 {
    font-size: 3rem;
  }
}
</style>