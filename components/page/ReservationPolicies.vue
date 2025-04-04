<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from "vue3-carousel"
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { $gsap } = useNuxtApp()
$gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  slides: {
    type: Object,
    required: true,
  },
  reservationPolicies: {
    type: Boolean,
    required: true,
  }
})

const breakpoints = {
  350: { itemsToShow: 1, snapAlign: 'start' },
  700: { itemsToShow: 3, snapAlign: 'center' },
  1024: { itemsToShow: props.slides.slides.length, snapAlign: 'start', enabled: false, mouseDrag: true, touchDrag: false },
};



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
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    })
});
</script>

<template>
  <section class="py-12  bg-opacity-10 justify-center flex flex-col items-center gap-8"
    :class="reservationPolicies ? 'bg-secondary' : ' bg-primary'">
    <span class="text-2xl font-bold">{{ slides.title }}</span>
    <div class="container">
      <div class="relative items-center justify-between w-full flex lg:hidden mx-3"
        :class="reservationPolicies ? 'inset-y-10' : 'inset-y-24'">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
            class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor"
            class="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <carousel :wrap-around="true" :breakpoints="breakpoints">
        <slide v-for="(slide, index) in slides.slides" :key="index" class="animated-slide text-md px-2">
          <div class="text-start flex flex-row items-center gap-6">
            <div class="bg-gray-700 text-white rounded-full p-4 my-6">
              <div v-html="slide.icon"></div>
            </div>
            <div class="text-start flex flex-col">
              <span v-if="slide.title" class="text-lg font-bold">{{ slide.title }}</span>
              <span class="text-sm">{{ slide.text }}</span>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <button class="btn-ternary-outline tracking-wide">Find out More</button>
  </section>
</template>