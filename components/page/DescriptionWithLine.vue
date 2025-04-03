<script lang="ts" setup>
const { $gsap } = useNuxtApp();
import { ScrollTrigger } from "gsap/ScrollTrigger";

$gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  text: {
    type: Object,
    required: true,
  },
  line: {
    type: Number,
    default: false,
  }
});

onMounted(async () => {
  await nextTick();
  $gsap.fromTo(
    '.animatedSvg',
    {
      clipPath: "inset(0% 0% 0% 100%)"
    },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.animatedSvg',
        start: "top 80%",
        end: "top 0%",
        scrub: true,
      },
    }
  );

  $gsap.fromTo('.g-svg',
    { opacity: 0, }
    , {
      opacity: 1,
      scrollTrigger: {
        trigger: '.g-svg',
        start: "top 50%",
        end: "top 0%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

  // if (props.line === 2) {
  //   {
  //     $gsap.fromTo(
  //       '.animatedSvgDown',
  //       {
  //         clipPath: "inset(0% 0% 100% 0%)"
  //       },
  //       {
  //         clipPath: "inset(0% 0% 0% 0%)",
  //         duration: 2,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: '.animatedSvgDown',
  //           start: "top 80%",
  //           end: "top 20%",
  //           scrub: true,
  //         },
  //       }
  //     );

  //     $gsap.fromTo('.g-svg-down',
  //       { opacity: 0, }
  //       , {
  //         opacity: 1,
  //         scrollTrigger: {
  //           trigger: '.g-svg-down',
  //           start: "top 60%",
  //           end: "top 0%",
  //           toggleActions: "play none none reverse",
  //           scrub: true,
  //         },
  //       });
  //   }
  // }

  $gsap.fromTo('.animatedDiv',
    {
      opacity: 0, y: 50,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.animatedDiv',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
});

</script>

<template>
  <section class=" relative">
    <!--    <svg v-if="line === 1" class="absolute right-0 top-3 hidden md:flex md:w-1/3 lg:w-1/3 overflow-visible"-->
    <!--      viewBox="0 0 400 200">-->
    <!--      <path d="M400,0 C200,0 150,150 30,160" stroke="currentColor" stroke-width="0.4" fill="none" stroke-dasharray="1,4"-->
    <!--        stroke-linecap="round" class=" text-secondary" />-->
    <!--      <g class="g-svg">-->
    <!--        <path-->
    <!--          d="M53.2705 173.306C48.8573 185.805 35.1476 192.359 22.649 187.946C10.1505 183.533 3.59599 169.823 8.00919 157.325C12.4224 144.826 26.1321 138.272 38.6307 142.685C51.1292 147.098 57.6837 160.808 53.2705 173.306Z"-->
    <!--          fill="#FDEEE9" fill-opacity="1" stroke-width="1.5"></path>-->
    <!--        <path-->
    <!--          d="M34.4116 166.647C33.6761 168.731 31.3911 169.823 29.3081 169.087C27.225 168.352 26.1325 166.067 26.8681 163.984C27.6036 161.901 29.8886 160.808 31.9717 161.544C34.0548 162.279 35.1472 164.564 34.4116 166.647Z"-->
    <!--          fill="#F05B2A"></path>-->
    <!--      </g>-->
    <!--    </svg>-->
    <div class="w-1/2">
      <svg viewBox="0 0 830 208" class="absolute right-0 top-3 hidden md:flex md:w-1/3 lg:w-1/2 overflow-visible">
        <path class="animatedSvg text-secondary" fill="none" stroke="currentColor" stroke-dasharray=".1 7"
          stroke-linecap="round" stroke-width="1.3"
          d="M828.83 45.367C785.225 29.412 741.933 5.495 695.441 2.375 631.754-1.9 585.635 27.83 543.083 60.646c-30.253 23.33-62.846 44.691-94.447 66.708-40.774 28.409-81.521 56.592-134.048 69.847-52.768 13.315-111.636 9.665-168.236 3.141-32.471-3.742-70.003-11.736-101.17-23.139">
        </path>
        <!--        <path class="animatedSvg" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="8" stroke-dashoffset="1696" d="M828.83 45.367C785.225 29.412 741.933 5.495 695.441 2.375 631.754-1.9 585.635 27.83 543.083 60.646c-30.253 23.33-62.846 44.691-94.447 66.708-40.774 28.409-81.521 56.592-134.048 69.847-52.768 13.315-111.636 9.665-168.236 3.141-32.471-3.742-70.003-11.736-101.17-23.139"></path>-->
        <g class="g-svg">
          <path
            d="M53.2705 173.306C48.8573 185.805 35.1476 192.359 22.649 187.946C10.1505 183.533 3.59599 169.823 8.00919 157.325C12.4224 144.826 26.1321 138.272 38.6307 142.685C51.1292 147.098 57.6837 160.808 53.2705 173.306Z"
            fill="#FDEEE9" fill-opacity="0.4"></path>
          <path
            d="M34.4116 166.647C33.6761 168.731 31.3911 169.823 29.3081 169.087C27.225 168.352 26.1325 166.067 26.8681 163.984C27.6036 161.901 29.8886 160.808 31.9717 161.544C34.0548 162.279 35.1472 164.564 34.4116 166.647Z"
            fill="#F05B2A"></path>
        </g>
      </svg>
    </div>
    <!--    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">-->
    <!--      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />-->
    <!--    </svg>-->


    <!--    <div class="text-center">-->
    <!--      <div class="border-title mb-2 mx-auto"></div>-->
    <!--      <h1 class="font-semibold text-5xl mb-6 title font-playfair-display tracking-wide">{{ text.title }}</h1>-->
    <!--      <div class="w-2/3 mx-auto my-8 animatedDiv">-->
    <!--        <p class="tracking-widest font-light">{{ text.description }}</p>-->
    <!--      </div>-->
    <!--    </div>-->

    <div class="text-center grid space-y-3">
      <NuxtImg src="/images/banners/banner-detail.png" alt="" class="w-96 mx-auto mb-12" />
      <div class="border-title-secondary mx-auto"></div>
      <h2 class="font-bold text-4xl">Must-Experience Peru: Our Top Travel Packages</h2>
      <!--          <h2 class="font-bold text-4xl mt-2"></h2>-->
      <p class="mt-4 animatedDiv"> Our adventures are tailored to meet a variety of fitness levels so you can pick the
        perfect match.</p>
    </div>
    <!--    <svg v-if="line === 2" class="mx-auto hidden md:flex md:w-1/3 lg:w-1/4 my-16" viewBox="0 0 400 200">-->
    <!--      <line x1="200" y1="143" x2="200" y2="1" stroke="#F05B2A" stroke-width="2" stroke-linecap="round"-->
    <!--        stroke-dasharray="0.1 10" class="animatedSvgDown"></line>-->
    <!--      <g class="g-svg-down">-->
    <!--        <circle cx="200" cy="170.765" r="24" transform="rotate(180 200 170.765)" fill="#FDEEE9" fill-opacity="0.4">-->
    <!--        </circle>-->
    <!--        <circle cx="200" cy="171.104" r="4" transform="rotate(180 200 171.104)" fill="#F05B2A"></circle>-->
    <!--      </g>-->
    <!--    </svg>-->
  </section>
</template>
