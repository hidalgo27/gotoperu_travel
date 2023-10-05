<template>
  <div class="container">
    <div class="grid grid-cols-7">
      <div class="col-span-2">
        <h2 class="text-3xl font-bold">Top <br>12 tours</h2>
        <p class="my-6">We specialize inn <br> brinding you the <br> finest n luxury <br> South American <br>tours.</p>
        <button type="button" class="btn-ternary-outline flex gap-2 my-6 items-center">
          <img src="/icons/map.svg" alt="">
          View all
        </button>
        <div class="flex gap-6">
          <button class="rounded-full border-2 p-2  border-gray-500 focus:bg-gray-800 focus:text-white" @click="prevSlide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 mx-auto">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button class="rounded-full border-2 p-2  border-gray-500 focus:bg-gray-800 focus:text-white" @click="nextSlide">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div class="col-span-5">
        <Carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">
          <slide v-for="item in items" :key="item.id">
            <!-- Aquí puedes poner el contenido de cada slide, por ejemplo: -->
            <div class="mx-3 p-3 bg-white w-full rounded-lg my-2 shadow-md">
              <div class="relative">
                <img src="/images/packages/package1.png" alt="">
                <div class="bg-secondary px-2 py-1 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">PAQUETE</div>
              </div>
              <div class="">
                <h3 class="text-left text-lg font-semibold my-3">{{ item.image }}</h3>
                <div class="flex text-xs font-semibold gap-1 items-center">
                  PERU
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                  COLOMBIA
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                  BRASIL
                </div>
                <div class="flex gap-2 mt-3 text-sm">
                  <img src="/icons/map-location.svg" alt=""> Starting Airport <span class="text-primary">Cuzco</span>
                </div>
                <div class="border my-4"></div>
                <div class="flex justify-between text-lg font-semibold">
                  <div>15 days</div>
                  <div><span class="text-xs text-gray-400">From</span> $350</div>
                </div>
              </div>
            </div>
          </slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Carousel, Slide} from "vue3-carousel";

    const items = ref([
      {id: 1, image: 'ruta-de-imagen1.jpg', description: 'Descripción 1'},
      {id: 2, image: 'ruta-de-imagen2.jpg', description: 'Descripción 2'},
      {id: 3, image: 'ruta-de-imagen3.jpg', description: 'Descripción 3'},
      {id: 4, image: 'ruta-de-imagen4.jpg', description: 'Descripción 4'},
      {id: 5, image: 'ruta-de-imagen5.jpg', description: 'Descripción 5'},
    ]);

    const breakpoints = {
      // 700px and up
      700: {
        itemsToShow: 3.5,
            snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3.2,
            snapAlign: 'start',
      },
    }

    const carouselRef = ref();

    const prevSlide = () => {
      carouselRef.value.prev();
    }

    const nextSlide = () => {
      carouselRef.value.next();
    }


</script>