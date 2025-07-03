<script lang="ts" setup>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

defineProps({
  listPackages: {
    type: Array,
    default: () => [],
  },
});
const currentSlide = ref(0);
const itemsToShow = ref(1);

const breakpoints = {
  0: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  768: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
};

const updateItemsToShow = () => {
  if (window.innerWidth >= 1280) {
    itemsToShow.value = 3;
  } else if (window.innerWidth >= 1024) {
    itemsToShow.value = 3;
  } else if (window.innerWidth >= 768) {
    itemsToShow.value = 2;
  } else {
    itemsToShow.value = 1;
  }
};

const getThreeStarPrice = (arr: any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

onMounted(() => {
  updateItemsToShow();
  window.addEventListener('resize', updateItemsToShow);
});

const carouselRef = ref();
const next = () => carouselRef.value.next();
const prev = () => carouselRef.value.prev();

const goToSlide = (index: number) => {
  carouselRef.value.slideTo(index);
};
</script>
<template>
  <section class="py-20 bg-blue-50">
    <div class="container">
      <div class="col-span-1 md:col-span-2 lg:col-span-3 font-playfair justify-center items-center flex flex-col ">
        <h2 class="text-center text-5xl mb-6">My favorite Packages</h2>
        <div class="border-title mb-6 mx-auto"></div>
      </div>
      <div class="relative w-full group/buttons">
        <button @click="prev"
          class="cursor-pointer absolute top-1/2 -translate-y-1/2 -left-4 z-10 p-2 bg-white group-hover/buttons:bg-white rounded-full shadow-lg lg:opacity-0 group-hover/buttons:opacity-100 transition-opacity duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </button>

        <button @click="next"
          class="cursor-pointer absolute top-1/2 -translate-y-1/2 -right-4 z-10 p-2 bg-white group-hover/buttons:bg-white rounded-full shadow-lg lg:opacity-0 group-hover/buttons:opacity-100 transition-opacity duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
        <ClientOnly>
          <Carousel ref="carouselRef" :breakpoints="breakpoints"
            @update:modelValue="(index: number) => currentSlide = index" class="flex items-center justify-center">
            <Slide v-for="(paquete, index) in listPackages" :key="index"
              class="p-3 relative w-full h-full flex items-center justify-center self-center">
              <a :href="'/peru-travel-paquete/' + paquete.url"
                class="bg-white col-span-1 w-full rounded-xl  shadow-md cursor-pointer group flex flex-col h-full">
                <div class="relative">
                  <img :src="paquete.imagen" alt="" class="w-full rounded-lg">
                  <div
                    class="bg-secondary px-2 py-1 z-10 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">
                    PAQUETE</div>
                  <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-40"></div>
                </div>
                <div class="relative p-4 flex flex-col h-full">
                  <div>
                    <div class="my-3">{{ paquete.duracion }} day tour</div>
                    <h3 class="text-left lowercase font-semibold text-gray-500 my-3">{{ paquete.titulo }}</h3>
                  </div>

                  <!-- <div class="flex text-xs font-semibold gap-1 items-center">
                  <template
                    v-for="(destination, index, array) in uniqueDestinos = paisesUnicos(paquete.paquetes_destinos)"
                    :key="destination.id">
                    {{ destination.nombre }}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < uniqueDestinos.length - 1">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </template>
</div> -->

                  <!-- <div class="flex gap-2 mt-3 text-sm">
                <img src="/icons/map-location.svg" alt=""> Starting Airport <span class="text-primary font-semibold">{{
                  paquete.codigo_vuelo }}</span>
              </div> -->
                  <!-- <div class="border my-4"></div>
              <div class="flex justify-between text-lg font-semibold">

              </div> -->
                  <div class="flex items-center gap-6 mt-auto justify-between">
                    <div>
                      <div v-if="getThreeStarPrice(paquete.precio_paquetes) > 0" class="text-2xl font-semibold">
                        <sup class="text-xs text-gray-400">From</sup> ${{ getThreeStarPrice(paquete.precio_paquetes) }}
                      </div>
                      <div v-else class="text-2xl font-semibold text-red-500">
                        <sup class="italic light text-xs">Price </sup>Inquire
                      </div>
                    </div>
                    <a :href="'/peru-travel-paquete/' + paquete.url"
                      class="btn-primary group-hover:bg-opacity-75 text-xs  text-center inline-block ">View
                      itinerary</a>
                  </div>
                  <!--                <a :href="'/peru-travel-paquete/' + paquete.url"-->
                  <!--                   class="btn-ternary  group-hover:bg-opacity-75 text-xs ml-3 text-center inline-block mt-6">Book Now</a>-->
                </div>
                <!-- <button class="m-2 btn-secondary group-hover:bg-opacity-75 mt-auto text-center">
                View itinerary
              </button> -->

              </a>
            </Slide>
          </Carousel>
        </ClientOnly>
      </div>
      <div class="flex justify-center gap-2 mt-8">
        <button v-for="index in listPackages.length" :key="index" @click="goToSlide(index - 1)"
          class="w-2 h-2 rounded-full transition-all cursor-pointer" :class="{
            'bg-primary scale-125': currentSlide === index - 1,
            'bg-gray-300': currentSlide !== index - 1
          }" :aria-label="`Ir al paquete ${index}`"></button>
      </div>
    </div>
  </section>
</template>