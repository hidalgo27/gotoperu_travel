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
import DescriptionWithLine from "~/components/page/DescriptionWithLine.vue";
const packageStore = usePackageStore()
const listDestinations = ref([])

const getDestinations = async (url: any) => {
  const res: any = await packageStore.getCountry(url)
  listDestinations.value = res.slice(0, 7)
  console.log(listDestinations.value)
}

const youtube2 = ref(null);

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
  if (process.client) {
    // @ts-ignore
    import('https://static.elfsight.com/platform/platform.js').then((module) => {

    });
  }
})

</script>
<template>
  <div class="shadow">
    <div class="relative">
      <div class="h-[90vh] relative overflow-hidden vimeo-wrapper ">
        <div class="absolute bg-gradient-to-r from-gray-800 h-[90vh] opacity-20 z-10 inset-0"></div>
        <iframe
          src="https://player.vimeo.com/video/1049078603?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1"
          frameborder="0" allow="autoplay; fullscreen" class=""></iframe>
      </div>
      <div class="absolute inset-x-0 bottom-12 z-10 h-full   flex  items-end">
        <div class="container text-center">

            <button class="backdrop-blur-md text-white px-4 py-2 rounded-md ">
              <span class="mr-2">See our 4,778 reviews on</span>
              <span class="text-green-400 font-bold">Trustpilot</span>
            </button>

          <!--        <h1-->
          <!--          class="text-white/80 drop-shadow-[0_0_1px_rgba(255,255,255,0.5)] leading-tight text-4xl 2xl:text-7xl tracking-wide font-semibold my-12">-->
          <!--          DO WILD THINGS-->
          <!--        </h1>-->
          <h2 class="text-white text-xl mt-4 md:text-3xl  drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">THE BEST VACATION

            IN <span class="text-primary">PERU</span> <span class="text-secondary">WITH THE BEST</span>  PERUVIAN OPERATOR
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

      <div class="mb-16">
        <DescriptionWithLine :text="welcome_text" :line="1"></DescriptionWithLine>
      </div>

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
      <div class="-mt-32">
        <svg class="mx-auto w-[35rem]" viewBox="0 0 400 200">
          <line x1="200" y1="143" x2="200" y2="1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"  stroke-dasharray="0.1 8" class="animatedSvgDown text-secondary"></line>
          <g class="g-svg-down">
            <circle cx="200" cy="170.765" r="24" transform="rotate(180 200 170.765)" fill="#FDEEE9" fill-opacity="0.4">
            </circle>
            <circle cx="200" cy="171.104" r="4" transform="rotate(180 200 171.104)" fill="#F05B2A"></circle>
          </g>
        </svg>
      </div>
      <div class="container text-center ">
        <nuxt-link to="/peru-travel-packages" type="button" class="btn-primary inline-block mt-4">View all travel packages</nuxt-link>
      </div>
      </div>
    </section>
    <!--    <YouTube-->
    <!--        src="https://www.youtube.com/watch?v=jNQXAC9IVRw"-->
    <!--        ref="youtube2" />-->

    <!--    <button type="button" @click="play">sdsds</button>-->
    <SliderBanner></SliderBanner>
    <ReservationPolicies></ReservationPolicies>
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
            <line x1="200" y1="143" x2="200" y2="1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"  stroke-dasharray="0.1 8" class="animatedSvgDown text-primary"></line>
            <g class="g-svg-down">
              <circle cx="200" cy="170.765" r="24" transform="rotate(180 200 170.765)" fill="#7D8506" fill-opacity="0.1">
              </circle>
              <circle cx="200" cy="171.104" r="4" transform="rotate(180 200 171.104)" fill="#7D8506"></circle>
            </g>
          </svg>
        </div>
        <div class="text-center ">
          <nuxt-link to="/peru-travel-packages" type="button" class="btn-primary inline-block mt-4">View all destinations</nuxt-link>
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
        <div class="elfsight-app-0205a974-5637-4472-a992-5e12bca31e38" data-elfsight-app-lazy></div>
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
          <a class="bg-gray-900 text-white py-2 px-4 rounded text-sm" href="#form-dream-adventure">GET IN
            TOUCH</a>
        </div>
      </div>
    </section>

    <!--    <section class="container pb-16 text-center">-->
    <!--      <img src="/images/logos/logo-gotolatam.svg" alt="" class="mx-auto w-52">-->
    <!--      <p class="my-6">We specialize in bringing you the finest in luxury South American Tours</p>-->
    <!--    </section>-->

  </div>
</template>