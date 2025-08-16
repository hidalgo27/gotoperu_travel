<script lang="ts" setup>
import Destinations from "~/components/sections/destinations.vue";
import { usePackageStore } from "~/stores/packages";
import SliderBanner from "~/components/page/SliderBanner.vue";
import ReservationPolicies from "~/components/page/ReservationPolicies.vue";
import Benefits from "~/components/page/Benefits.vue";
import Blog from "~/components/sections/Blog.vue";
import ButtonW from "~/components/wetravel/ButtonW.vue";
import ModalW from "~/components/wetravel/ModalW.vue";
import MiniReviews from "~/components/sections/MiniReviews.vue";
import DescriptionWithLine from "~/components/page/DescriptionWithLine.vue"
import ModalSuscriptionForm from "~/components/modal/ModalSuscriptionForm.vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { $gsap } = useNuxtApp();
$gsap.registerPlugin(ScrollTrigger);
const packageStore = usePackageStore()
const listDestinations = ref([])

const getDestinations = async (url: any) => {
  const res: any = await packageStore.getCountry(url)
  listDestinations.value = res.slice(0, 7)
  // console.log(listDestinations.value)
}

const isModalOpen = ref(false);

const youtube2 = ref(null);

const reservation_slides = {
  title: "Book with confidence",
  slides: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
  <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clip-rule="evenodd" />
  <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
</svg>
`,
      text: "Lock in your spot with a $200 deposit"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
</svg>
`,
      text: "Pay monthly or bi-weekly"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
</svg>
`,
      text: "Amend your booking up to 60 days pre-tip"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
</svg>
`,
      text: "Plans changed? Your payments are protected"
    },
  ]
};

// // Estados del primer dropdown
// const showFirst = ref(false);
// const selectedItemsFirst = ref([]);
// const dropdownFirst = ref(null);
// const itemsFirst = [
//   { id: 1, name: 'Opción 1' },
//   { id: 2, name: 'Opción 2' },
//   { id: 3, name: 'Opción 3' },
// ];
//
// // Estados del segundo dropdown
// const showSecond = ref(false);
// const selectedItemsSecond = ref([]);
// const dropdownSecond = ref(null);
// const itemsSecond = [
//   { id: 4, name: 'Opción 4' },
//   { id: 5, name: 'Opción 5' },
//   { id: 6, name: 'Opción 6' },
// ];
//
// const handleClickOutside = (event) => {
//   if (dropdownFirst.value && !dropdownFirst.value.contains(event.target)) {
//     showFirst.value = false;
//   }
//   if (dropdownSecond.value && !dropdownSecond.value.contains(event.target)) {
//     showSecond.value = false;
//   }
// };
//
// onMounted(() => {
//   document.addEventListener('click', handleClickOutside);
// });
//
// onBeforeUnmount(() => {
//   document.removeEventListener('click', handleClickOutside);
// });
//
// const toggle = (dropdown) => {
//   if (dropdown === 'first') {
//     showFirst.value = !showFirst.value;
//   } else if (dropdown === 'second') {
//     showSecond.value = !showSecond.value;
//   }
// };
//
// const toggleSelection = (item, dropdown) => {
//   const selectedItems = dropdown === 'first' ? selectedItemsFirst : selectedItemsSecond;
//   const index = selectedItems.value.findIndex(i => i.id === item.id);
//   if (index === -1) {
//     selectedItems.value.push(item);
//   } else {
//     selectedItems.value.splice(index, 1);
//   }
// };
//
// const isSelected = (item, dropdown) => {
//   const selectedItems = dropdown === 'first' ? selectedItemsFirst : selectedItemsSecond;
//   return selectedItems.value.some(i => i.id === item.id);
// };

// const play = () => {
//   if (youtube2.value && youtube2.value.playVideo) {
//     youtube2.value.playVideo();
//   }
// };

const welcome_text = {
  title: 'Why South America Company?',
  description: 'At South America Company, we specialize in tailor-made trips that immortalize the best days exploring Peru and South America. Every detail is meticulously designed to offer the maximum comfort, exclusivity, and luxury. From private villas and luxury cruises to customized itineraries, we make sure you only worry about enjoying your luxury vacation.',
}

onMounted(async () => {
  // if (youtube.value && youtube.value.playVideo) {
  //   youtube.value.playVideo();
  // }
  await getDestinations('peru')
  await nextTick();

  $gsap.utils.toArray('.animatedSvgDown').forEach(el => {
    return $gsap.fromTo(
      el,
      { clipPath: "inset(0% 0% 100% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  });

  // Seleccionar todos los elementos con la clase 'g-svg-down' y animarlos
  $gsap.utils.toArray('.g-svg-down').forEach(el => {
    return $gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          end: "top 0%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
  });

  if (process.client) {
    // @ts-ignore
    import('https://static.elfsight.com/platform/platform.js').then((module) => {

    });
  }
})

</script>
<template>
  <div class="shadow">
    <div class="relative m-3 rounded-lg overflow-hidden">
      <div class="h-[90vh] relative overflow-hidden vimeo-wrapper ">
        <div class="absolute bg-gradient-to-r from-gray-800 h-[90vh] opacity-20 z-10 inset-0"></div>
        <iframe
          src="https://player.vimeo.com/video/1049078603?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1"
          frameborder="0" allow="autoplay; fullscreen" class=""></iframe>
      </div>
      <div class="absolute inset-x-0 bottom-12 z-10 h-full   flex  items-end">
        <div class="container text-center">
          <button class="backdrop-blur-md text-white p-1 rounded-md ">
            <div class="elfsight-app-19a38dd6-cb79-4354-ab2e-57709a6ad7e7" data-elfsight-app-lazy></div>
          </button>

          <!--        <h1-->
          <!--          class="text-white/80 drop-shadow-[0_0_1px_rgba(255,255,255,0.5)] leading-tight text-4xl 2xl:text-7xl tracking-wide font-semibold my-12">-->
          <!--          DO WILD THINGS-->
          <!--        </h1>-->
          <h2 class="text-white text-xl mt-4 md:text-3xl  drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">THE BEST OF PERU
            <span class="text-primary">DESIGNED BY</span> <span class="text-secondary">PERUVIANS</span> JUST FOR YOU
          </h2>
          <div class="mt-6 justify-center flex">
            <NuxtLink to="/peru-travel-packages" class="btn-primary hover:bg-opacity-75 duration-500 transition">
              View all Adventures
            </NuxtLink>
          </div>
        </div>
        <!--        <InquireHome></InquireHome>-->
      </div>
      <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-50"></div>
    </div>
    <Benefits></Benefits>

    <!-- <wetravel-we-travel-checkout-button :trip-uuid="`${55842886}`"></wetravel-we-travel-checkout-button> -->

    <!--    <div>-->
    <!--      &lt;!&ndash; Primer dropdown &ndash;&gt;-->
    <!--      <div class="relative" @click="toggle('first')" ref="dropdownFirst">-->
    <!--        <button class="bg-gray-300 text-black p-2">-->
    <!--          {{ selectedItemsFirst.length ? selectedItemsFirst.map(i => i.name).join(', ') : 'Selecciona elementos del Primer Dropdown' }}-->
    <!--        </button>-->
    <!--        <div v-if="showFirst" class="absolute w-full bg-white border mt-2">-->
    <!--          <div-->
    <!--              v-for="item in itemsFirst"-->
    <!--              :key="item.id"-->
    <!--              @click.stop="toggleSelection(item, 'first')"-->
    <!--              class="cursor-pointer hover:bg-gray-100 p-2"-->
    <!--          >-->
    <!--            {{ item.name }}-->
    <!--            <span v-if="isSelected(item, 'first')" class="ml-2 text-green-500">&#10003;</span>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      &lt;!&ndash; Segundo dropdown &ndash;&gt;-->
    <!--      <div class="relative mt-4" @click="toggle('second')" ref="dropdownSecond">-->
    <!--        <button class="bg-gray-300 text-black p-2">-->
    <!--          {{ selectedItemsSecond.length ? selectedItemsSecond.map(i => i.name).join(', ') : 'Selecciona elementos del Segundo Dropdown' }}-->
    <!--        </button>-->
    <!--        <div v-if="showSecond" class="absolute w-full bg-white border mt-2">-->
    <!--          <div-->
    <!--              v-for="item in itemsSecond"-->
    <!--              :key="item.id"-->
    <!--              @click.stop="toggleSelection(item, 'second')"-->
    <!--              class="cursor-pointer hover:bg-gray-100 p-2"-->
    <!--          >-->
    <!--            {{ item.name }}-->
    <!--            <span v-if="isSelected(item, 'second')" class="ml-2 text-green-500">&#10003;</span>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <section class="py-24 bg-gray-100">
      <div class="mb-16">
        <DescriptionWithLine :text="welcome_text" :line="1"></DescriptionWithLine>
      </div>
      <div class="container">
        <!--      <section class="container  pb-12 text-center flex gap-6 items-center justify-center">-->

        <!--        <div class="text-center grid space-y-3">-->
        <!--          <NuxtImg src="/images/banners/banner-detail.png" alt="" class="w-80 mx-auto mb-3" />-->
        <!--          <div class="border-title-secondary mx-auto"></div>-->
        <!--          <h1 class="font-bold text-4xl ">Must-Experience Peru: Our Top Travel Packages</h1>-->
        <!--&lt;!&ndash;          <h2 class="font-bold text-4xl mt-2"></h2>&ndash;&gt;-->
        <!--          <p class="mt-2"> Our adventures are tailored to meet a variety of fitness levels so you can pick the perfect match.</p>-->
        <!--        </div>-->
        <!--      </section>-->

        <carousel-p></carousel-p>
        <!--      <section class="my-12 container">-->
        <!--        <div class="grid grid-cols-2 gap-6">-->
        <!--          <div class="rounded-xl overflow-hidden">-->
        <!--            <a href="/peru-travel-packages/Amazing-Peru-9-days"><img src="/images/banners/amazing.jpg" alt="" class="object-cover  h-full"><div class="absolute inset-0 bg-gradient-to-b to-70% from-gray-900 from-0% opacity-50"></div></a>-->
        <!--          </div>-->
        <!--          <div class="rounded-xl overflow-hidden">-->
        <!--            <a href="/peru-travel-packages/honeymoon-Cusco-and-Machu-Picchu"><img src="/images/banners/honeymoon.jpg" alt="" class="object-cover  h-full"><div class="absolute inset-0 bg-gradient-to-b to-70% from-gray-900 from-0% opacity-50"></div></a>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--      </section>-->
        <div class="-mt-72">
          <svg class="mx-auto w-[35rem]" viewBox="0 0 400 200">
            <line x1="200" y1="143" x2="200" y2="1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-dasharray="0.1 8" class=" text-secondary"></line>
            <g class="g-svg-down">
              <circle cx="200" cy="170.765" r="24" transform="rotate(180 200 170.765)" fill="#FDEEE9"
                fill-opacity="0.4">
              </circle>
              <circle cx="200" cy="171.104" r="4" transform="rotate(180 200 171.104)" fill="#F05B2A"></circle>
            </g>
          </svg>
        </div>
        <div class="container text-center ">
          <nuxt-link to="/peru-travel-packages" type="button" class="btn-ternary inline-block mt-4">View all travel
            packages</nuxt-link>
        </div>
      </div>
    </section>
    <!--    <YouTube-->
    <!--        src="https://www.youtube.com/watch?v=jNQXAC9IVRw"-->
    <!--        ref="youtube2" />-->

    <!--    <button type="button" @click="play">sdsds</button>-->
    <SliderBanner></SliderBanner>
    <ReservationPolicies :slides="reservation_slides" :reservationPolicies="true"></ReservationPolicies>
    <!-- <section class="my-12 container">
      <div class="w-10/12 mx-auto">
        <div class="grid md:grid-cols-2 justify-center items-center gap-6 md:gap-24">
          <div class="">
            <div class="columns-2 gap-3 space-y-4 float">
              <img src="/images/home/operator1.jpg" alt="" class="mt-3 rounded-xl">
              <img src="/images/home/operator2.jpg" alt="" class="rounded-xl">
              <img src="/images/home/operator3.jpg" alt="" class="rounded-xl">
              <img src="/images/home/operator4.jpg" alt="" class="rounded-xl">
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold">PERU Travel Operator</h2>
            <p class="my-6 md:hidden">Traveling fills our soul with magical and unforgettable experiences. The best
              way
              to visit Peru is with one of the best operators in Peru. Our family of travel and operations specialists
              aims to provide
              <br> you with all the facilities to customize your travel program and make the most of your visit to
              Peru.
              The GOTOPERU team is here to help you and provide personalized attention.
            </p>

            <p class="mt-6 mb-12 hidden md:block">Traveling fills our soul with magical and unforgettable experiences.
              The best way to visit Peru is with one of the best operators in Peru. Our family of travel and
              operations
              specialists aims to provide you with all the facilities to customize your travel program and make the
              most
              of your visit to Peru. The GOTOPERU team is here to help you and provide personalized attention.</p>
            <a href="#form-dream-adventure" class="btn-primary">Create My Trip Now</a>
          </div>
        </div>
      </div>
    </section> -->

    <!--    <section class="md:py-12 pb-12 bg-gray-100">-->
    <!--      <carousel-h></carousel-h>-->
    <!--    </section>-->

    <section class="py-24 ">
      <div class="container">
        <destinations></destinations>
        <div class="-mt-32">
          <svg class="mx-auto w-[35rem]" viewBox="0 0 400 200">
            <line x1="200" y1="143" x2="200" y2="1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-dasharray="0.1 8" class="animatedSvgDown text-primary"></line>
            <g class="g-svg-down">
              <circle cx="200" cy="170.765" r="24" transform="rotate(180 200 170.765)" fill="#7D8506"
                fill-opacity="0.1">
              </circle>
              <circle cx="200" cy="171.104" r="4" transform="rotate(180 200 171.104)" fill="#7D8506"></circle>
            </g>
          </svg>
        </div>
        <div class="text-center ">
          <nuxt-link to="/peru-travel-packages" type="button" class="btn-primary inline-block mt-4">View all
            destinations</nuxt-link>
        </div>
      </div>
    </section>
    <!--    <MiniReviews></MiniReviews>-->
    <!--    <section class="py-12 bg-gray-100">-->
    <!--      <div class="container">-->
    <!--        <h2 class="text-3xl font-bold text-center">Reviews and Testimonials</h2>-->
    <!--        <div class="columns-3 gap-6 space-y-6 my-12 hidden md:block">-->
    <!--          <div class="relative rounded-2xl">-->
    <!--              <div class="relative">-->
    <!--                <img src="/images/testimonials/testimonial1.png" alt="" class="w-full object-center">-->
    <!--                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">-->
    <!--                  <img src="/icons/pay.svg" alt="" class="mx-auto">-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">-->
    <!--              <img src="/icons/quotes.svg" alt="" class="-mt-9">-->
    <!--              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>-->
    <!--              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="relative rounded-2xl">-->
    <!--              <div class="relative">-->
    <!--                <img src="/images/testimonials/testimonial2.png" alt="" class="w-full object-center">-->
    <!--                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">-->
    <!--                  <img src="/icons/pay.svg" alt="" class="mx-auto">-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">-->
    <!--              <img src="/icons/quotes.svg" alt="" class="-mt-9">-->
    <!--              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>-->
    <!--              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="relative rounded-2xl">-->
    <!--              <div class="relative">-->
    <!--                <img src="/images/testimonials/testimonial3.png" alt="" class="w-full object-center">-->
    <!--                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">-->
    <!--                  <img src="/icons/pay.svg" alt="" class="mx-auto">-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">-->
    <!--              <img src="/icons/quotes.svg" alt="" class="-mt-9">-->
    <!--              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>-->
    <!--              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="relative rounded-2xl">-->
    <!--              <div class="relative">-->
    <!--                <img src="/images/testimonials/testimonial4.png" alt="" class="w-full object-center">-->
    <!--                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">-->
    <!--                  <img src="/icons/pay.svg" alt="" class="mx-auto">-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">-->
    <!--              <img src="/icons/quotes.svg" alt="" class="-mt-9">-->
    <!--              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>-->
    <!--              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="relative rounded-2xl">-->
    <!--              <div class="relative">-->
    <!--                <img src="/images/testimonials/testimonial2.png" alt="" class="w-full object-center">-->
    <!--                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">-->
    <!--                  <img src="/icons/pay.svg" alt="" class="mx-auto">-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">-->
    <!--              <img src="/icons/quotes.svg" alt="" class="-mt-9">-->
    <!--              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>-->
    <!--              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="relative rounded-2xl">-->
    <!--              <div class="relative">-->
    <!--                <img src="/images/testimonials/testimonial5.png" alt="" class="w-full object-center">-->
    <!--                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">-->
    <!--                  <img src="/icons/pay.svg" alt="" class="mx-auto">-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">-->
    <!--              <img src="/icons/quotes.svg" alt="" class="-mt-9">-->
    <!--              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>-->
    <!--              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--          <div class="relative rounded-2xl">-->
    <!--              <div class="relative">-->
    <!--                <img src="/images/testimonials/testimonial3.png" alt="" class="w-full object-center">-->
    <!--                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">-->
    <!--                  <img src="/icons/pay.svg" alt="" class="mx-auto">-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">-->
    <!--              <img src="/icons/quotes.svg" alt="" class="-mt-9">-->
    <!--              <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>-->
    <!--              <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="md:hidden my-12">-->

    <!--          <testimonials></testimonials>-->

    <!--        </div>-->
    <!--        <div class="flex  gap-2 items-center justify-center">-->
    <!--          <p>Happy Guests are the Best Rewarc</p>-->
    <!--          <img src="/images/logos/tripadvisor.png" alt="" class="w-32">-->
    <!--          <img src="/images/logos/trustpilot.png" alt="" class="w-20">-->
    <!--        </div>-->
    <!--      </div>-->


    <!--    </section>-->



    <!-- <section class="container py-12">
      <div class="grid md:grid-cols-3 gap-6">
        <div class="rounded-xl relative bg-gray-100 px-4 py-8 border gap-12">
          <div class="grid grid-cols-12 items-center">
            <img src="/icons/shield.svg" alt="" class="absolute left-0 top-0 ml-3 -mt-6">
            <div class="col-span-8">
              <h3 class="font-semibold text-sm">Book with Confidence</h3>
              <p class="text-sm mt-3">Keep calm! We will help you plan your dream trip.</p>
            </div>
            <div class="col-span-4">
              <img src="/images/home/operator5.jpg" alt="" class="bg-primary rounded-xl h-full w-full">
            </div>
          </div>
        </div>
        <div class="rounded-xl relative bg-gray-100 px-4 py-8 border gap-12">
          <div class="grid grid-cols-12 items-center">
            <img src="/icons/star-yellow.svg" alt="" class="absolute left-0 top-0 ml-3 -mt-6">
            <div class="col-span-8">
              <h3 class="font-semibold text-sm">Great Reviews</h3>
              <p class="text-sm mt-3">We are proud of our service quality and great reviews.</p>
            </div>
            <div class="col-span-4">
              <img src="/images/home/operator6.jpg" alt="" class="bg-primary rounded-xl h-full w-full">
            </div>
          </div>
        </div>
        <div class="items-center rounded-xl relative bg-gray-100 px-4 py-8 border gap-12">
          <div class="grid grid-cols-12 items-center">
            <img src="/icons/person.svg" alt="" class="absolute left-0 top-0 ml-3 -mt-6">
            <div class="col-span-8">
              <h3 class="font-semibold text-sm">Trusted local Peruvian Operators </h3>
              <p class="text-sm mt-3">Professional service from trusted local experts.</p>
            </div>
            <div class="col-span-4">
              <img src="/images/home/operator7.jpg" alt="" class="bg-primary rounded-xl h-full w-full">
            </div>
          </div>
        </div> -->
    <!--        <div class="grid grid-cols-2 rounded-xl relative bg-gray-100 px-4 py-8 border gap-12">-->
    <!--          <img src="/icons/shield.svg" alt="" class="absolute left-0 top-0 ml-3 -mt-6">-->
    <!--          <div class="">-->
    <!--            <h3 class="font-semibold text-sm">Book with Confidence</h3>-->
    <!--            <p class="text-sm mt-3">Keep calm! We will help you plan your dream trip.</p>-->
    <!--          </div>-->
    <!--          <div class="">-->
    <!--            <div class="bg-primary rounded-xl h-full w-full"></div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!-- </div>
  </section> -->


    <section class="py-24 bg-gray-100">
      <div class="container">
        <!--        <div class="elfsight-app-de637865-6596-4396-8bba-ef0f7b50bc9e"></div>-->
<!--        <div class="elfsight-app-0205a974-5637-4472-a992-5e12bca31e38" data-elfsight-app-lazy></div>-->
        <div class="elfsight-app-5eb4043b-fced-4876-890c-bcac70bb6720" data-elfsight-app-lazy></div>
      </div>
    </section>




    <!--    <section class="pb-6">-->
    <!--      <blog></blog>-->
    <!--    </section>-->

    <!--    <section class="pb-12">-->
    <!--      <div class="container md:mx-auto">-->
    <!--        <div class="rounded-xl overflow-hidden bg-gray-500">-->
    <!--          <div class="elfsight-app-d1e14e4b-52d0-4ad9-9068-f94e0de6bf50" data-elfsight-app-lazy></div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

    <section class="">
      <div class="flex items-center justify-center h-52 bg-orange-700 bg-opacity-90">
        <div class="text-center">
          <h1 class="text-white text-3xl md:text-4xl font-bold mb-6 tracking-wider">SO, READY TO START?</h1>
          <button class="bg-gray-900 text-white py-2 px-4 rounded text-sm cursor-pointer" @click="isModalOpen = true">
            GET IN TOUCH
          </button>

          <ModalSuscriptionForm :isOpen="isModalOpen" @close="isModalOpen = false"></ModalSuscriptionForm>
        </div>
      </div>
    </section>

    <!--    <section class="container pb-16 text-center">-->
    <!--      <img src="/images/logos/logo-gotolatam.svg" alt="" class="mx-auto w-52">-->
    <!--      <p class="my-6">We specialize in bringing you the finest in luxury South American Tours</p>-->
    <!--    </section>-->

  </div>
</template>