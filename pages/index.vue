<template>
  <div class="shadow">

    <div class="relative">
      <div class="h-[75vh] relative overflow-hidden vimeo-wrapper ">
        <div class="absolute bg-gradient-to-r from-gray-800 h-[75vh] opacity-20 z-10 inset-0"></div>
        <iframe src="https://player.vimeo.com/video/381676880?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" frameborder="0" allow="autoplay; fullscreen" class=""></iframe>
      </div>
      <div class="absolute inset-x-0 mb-52 bottom-0 z-10 text-center">
        <h2 class="text-white text-xl md:text-3xl container drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)]">THE BEST VACATION IN <span class="text-primary">SOUTH AMERICA</span> <span class="text-secondary">WITH THE BEST</span> PERU OPERATOR</h2>

        <!--        <InquireHome></InquireHome>-->



      </div>
      <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-50"></div>
    </div>

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


    <section class="py-12 bg-gray-100" id="top-12">
      <carousel-p></carousel-p>
    </section>


    <!--    <YouTube-->
    <!--        src="https://www.youtube.com/watch?v=jNQXAC9IVRw"-->
    <!--        ref="youtube2" />-->

    <!--    <button type="button" @click="play">sdsds</button>-->

    <section class="my-12 container">
      <div class="w-10/12 mx-auto">
        <div class="grid md:grid-cols-2 justify-center items-center gap-6 md:gap-24">
          <div class="">
            <div class="columns-2 gap-3 space-y-4 floa">
              <img src="/images/home/operator1.jpg" alt="" class="mt-3 rounded-xl">
              <img src="/images/home/operator2.jpg" alt="" class="rounded-xl">
              <img src="/images/home/operator3.jpg" alt="" class="rounded-xl">
              <img src="/images/home/operator4.jpg" alt="" class="rounded-xl">
            </div>
          </div>

          <div>
            <h2 class="text-3xl font-bold">PERU Travel Operator</h2>
            <p class="my-6 md:hidden">Traveling fills our soul with magical and unforgettable experiences. The best way to visit Peru is with one of the best operators in Peru. Our family of travel and operations specialists aims to provide
              <br> you with all the facilities to customize your travel program and make the most of your visit to Peru. The GOTOPERU team is here to help you and provide personalized attention.</p>

            <p class="mt-6 mb-12 hidden md:block">Traveling fills our soul with magical and unforgettable experiences. The best way to visit Peru is with one of the best operators in Peru. Our family of travel and operations specialists aims to provide you with all the facilities to customize your travel program and make the most of your visit to Peru. The GOTOPERU team is here to help you and provide personalized attention.</p>

            <a href="#form-dream-adventure" class="btn-primary">Create My Trip Now</a>
          </div>
        </div>
      </div>
    </section>

    <!--    <section class="md:py-12 pb-12 bg-gray-100">-->
    <!--      <carousel-h></carousel-h>-->
    <!--    </section>-->

    <section class="py-12 bg-gray-100">
      <div class="container">
        <destinations></destinations>
      </div>
    </section>

    <section class="mb-12 mt-12">
      <div class="container">
        <div class="elfsight-app-de637865-6596-4396-8bba-ef0f7b50bc9e"></div>
      </div>
    </section>

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


    <section class="container py-16">
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
        </div>
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
      </div>
    </section>

    <!--    <section class="container pb-16 text-center">-->
    <!--      <img src="/images/logos/logo-gotolatam.svg" alt="" class="mx-auto w-52">-->
    <!--      <p class="my-6">We specialize in bringing you the finest in luxury South American Tours</p>-->
    <!--    </section>-->

  </div>
</template>


<script lang="ts" setup>
import Destinations from "~/components/sections/destinations.vue";
import {usePackageStore} from "~/stores/packages";
const packageStore = usePackageStore()

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

onMounted(async () => {
  // if (youtube.value && youtube.value.playVideo) {
  //   youtube.value.playVideo();
  // }
  if (process.client) {
    // @ts-ignore
    import('https://static.elfsight.com/platform/platform.js').then((module) => {

    });
  }
})

</script>
