<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel"
import { usePackageStore } from "~/stores/packages";
const packageStore = usePackageStore()
const { packageData } = storeToRefs(packageStore)
defineProps({
  tripUuid: {
    type: String,
    required: true
  }
});
const { $gsap } = useNuxtApp()
const breakpoints = {
  // 500px and up
  350: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
  // 700px and up
  700: {
    itemsToShow: 2.2,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
}

const imagesList2 = computed(() => {
  return packageData.value.flatMap(pkg =>
    pkg.paquetes_destinos.flatMap(destino =>
      destino.destinos.destino_imagen.map(imagen => ({
        id: imagen.id,
        src: imagen.nombre,
        alt: destino.destinos.nombre
      }))
    )
  )
})

const imagesList = computed(() => {
  if (!packageData.value) return []
  return packageData.value.paquetes_destinos.flatMap(destino =>
    destino.destinos.destino_imagen.map(imagen => ({
      id: imagen.id,
      src: imagen.nombre,
      alt: destino.destinos.nombre
    }))
  )
})

const getThreeStarPrice = (arr: any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

const precioDosEstrellas = computed(() => {
  if (!packageData.value) return null

  const precio = packageData.value.precio_paquetes.find(p => p.estrellas === 3)
  return precio?.precio_d || null
})

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.substring(1));
  if (!element) return;

  $gsap.to(window, {
    duration: 1,
    scrollTo: { y: element, offsetY: 155 },
    ease: "power3.inOut"
  });
};
</script>

<template>

  <header class="relative gap-6  mx-3">
    <div class=" rounded-lg  bg-gray-500  overflow-hidden">
      <nuxt-img v-if="packageData?.imagen_paquetes[0]" :src="packageData?.imagen_paquetes[0].nombre"
        :placeholder="[50, 25, 75, 5]" class="object-cover h-[700px] w-full" />
      <ClientOnly v-else>
        <carousel :wrap-around="true" :breakpoints="breakpoints">
          <slide v-for="imagen in imagesList" :key="imagen.id">
            <nuxt-img :src="imagen.src" :alt="imagen.alt" :placeholder="[50, 25, 75, 5]"
              class="object-cover h-[700px] w-full" />
          </slide>
        </carousel>
      </ClientOnly>


      <!--      <div class="absolute inset-x-0 bottom-0 bg-gray-600 h-40 w-full bg-gradient-to-r from-indigo-500">-->


      <!--      </div>-->

      <div
        class="absolute flex md:block justify-center md:left-0 bottom-0 lg:py-12 p-2 md:pl-12 md:pr-24 bg-gray-400 z-0 bg-gradient-to-t from-gray-800/50 bg-opacity-10 w-full">
        <h1 class="text-3xl text-white font-semibold">{{ packageData?.titulo }}</h1>
      </div>
      <!-- <div class="md:w-[450px] absolute right-0 top-12 md:bottom-0 m-2 md:m-12 z-0">
        <div class="bg-white/95 backdrop-grayscale-[1] py-12 px-6  rounded-lg">

          <div class="absolute -top-3 left-5 z-10 bg-gray-800 text-white px-2 py-1 rounded text-xs font-bold">
            TOP SELLER
          </div>

          <div class="">
            <h2 class="text-2xl font-semibold">{{ packageData?.duracion }} days</h2>
          </div>

          <div class="mt-3">
            <div v-if="precioDosEstrellas">
              <sup class="text-gray-500">From</sup>
              <div class="text-5xl font-extrabold flex text-gray-800 items-baseline gap-1">
                <span>$</span>
                <span>{{ precioDosEstrellas }}</span>
                <span class="text-sm text-gray-500">USD</span>
              </div>
            </div>
            <div class="font-bold text-red-500 flex items-baseline gap-1" v-else>
              Price not available
            </div>
            <p class="mt-3 text-sm text-gray-500 font-extrabold">
              Trip Code: <span class="font-medium">{{ packageData?.codigo }}</span>
            </p>
          </div>


          <div class="text-left">
            <div class="elfsight-app-19a38dd6-cb79-4354-ab2e-57709a6ad7e7" data-elfsight-app-lazy></div>
          </div>


          <div class="" v-if="tripUuid">
            <wetravel-we-travel-checkout-button :trip-uuid="`${tripUuid}`"></wetravel-we-travel-checkout-button>
          </div>

          <button @click="scrollToSection('#form-dream-adventure')"
            class="rounded-md py-3 px-5 text-gray-800 border bg-white hover:bg-gray-200 hover:text-gray-500 duration-300 w-full mt-3">
            Inquire now
          </button>

          <div class="mt-4 border-t text-xs pt-3">
            <p>Contact our travel advisor to use this itinerary (or others) as a base to design together your
              perfect
              peruvian adventure!</p>
            <p><span class="font-semibold text-secondary">For Example:</span> add one day / reduce the program
              lenght
              /
              upgrades hotels / add all meals / upgrade to private tours</p>
          </div>
        </div>
      </div> -->
    </div>
    <div class="container flex justify-end">

    </div>
  </header>
</template>
