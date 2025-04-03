<script lang="ts" setup>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel, Slide } from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css';

const { $gsap } = useNuxtApp()
$gsap.registerPlugin(ScrollTrigger);

const breakpoints = {
  autoplay: 8000,
  pauseAutoplayOnHover: true,
  wrapAround: true,
  350: { itemsToShow: 1, snapAlign: 'start' },
  700: { itemsToShow: 3, snapAlign: 'center' },
  1024: { itemsToShow: 5, snapAlign: 'start', enabled: true, mouseDrag: true, touchDrag: false },
};

// const config = {
//   height: 200,
//   itemsToShow: 2,
//   gap: 5,
//   autoplay: 4000,
//   wrapAround: true,
//   pauseAutoplayOnHover: true,
// }

const slides = [
  {
    icon: "/icons/shield.png",
    title: "Book with Confidence",
    description: "Plan your travels with peace of mind"
  },
  {
    icon: "/icons/trusted.png",
    title: "Trusted local Peru travel experts",
    description: "Professional service from trusted local experts"
  },
  {
    icon: "/icons/tripadvisor.png",
    title: "Great Reviews",
    description: "We are proud of our service quality and great reviews"
  },
  {
    icon: "/icons/good.png",
    title: "You are in good hands",
    description: "While on your journey help is never out of reach"
  },

  {
    icon: "/icons/hassle.png",
    title: "Hassle-free experience",
    description: "We plan and book your entire Peru trip before you arrive"
  },
  {
    icon: "/icons/tours.png",
    title: "Flexible tour options",
    description: "Our vacation packages are customisable to your needs"
  },
  {
    icon: "/icons/good.png",
    title: "Hospitality at its finest",
    description: "Peruvian hospitality is worldwide known and we are proof of that"
  },
  {
    icon: "/icons/secure.png",
    title: "Full Financial Protection",
    description: "Your payments are protected with financial safety as standard"
  },
  {
    icon: "/icons/guarantee.png",
    title: "Value for Money",
    description: "Exceptional quality for your Money, no intermediaries"
  }
];

onMounted(() => {
  $gsap.fromTo('.animated-slide',
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.animated-slide',
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    })
});
</script>

<template>

  <section class="bg-primary bg-opacity-5 p-6 justify-center flex flex-col w-full items-center gap-6">
    <!--    <span class="text-2xl font-bold">Why choose GOTOPERU?</span>-->
    <!--    <div-->
    <!--      class="relative translate-y-6 md:translate-y-10 inset-y-10 items-center justify-between w-full flex lg:hidden ">-->
    <!--      <div>-->
    <!--        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"-->
    <!--          class="h-4 w-4">-->
    <!--          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />-->
    <!--        </svg>-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"-->
    <!--          class="h-4 w-4">-->
    <!--          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />-->
    <!--        </svg>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    animated-slide-->
    <carousel :breakpoints="breakpoints" class="w-full">
      <slide v-for="(slide, index) in slides" :key="index" class="animated-slide text-md px-2">
        <div class="text-center flex flex-row items-center gap-3">
          <div class="bg-gray-100 rounded-full p-5">
            <!--            <div class="text-gray-900" v-html="slide.icon"></div>-->
            <NuxtImg :src="slide.icon" class="w-8"></NuxtImg>
          </div>
          <div class="text-left">
            <h4 class="text-sm font-semibold">{{ slide.title }}</h4>
            <p class="text-xs">{{ slide.description }}</p>
          </div>
        </div>
      </slide>
    </carousel>
  </section>
</template>