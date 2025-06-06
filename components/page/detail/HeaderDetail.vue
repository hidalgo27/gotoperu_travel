<script setup lang="ts">
import {Carousel, Slide} from "vue3-carousel"
import {usePackageStore} from "~/stores/packages";
const packageStore = usePackageStore()
const { packageData } = storeToRefs(packageStore)
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

</script>

<template>
  <header class="relative container border-gray-500   gap-6 grid grid-cols-12">
    <div class="col-span-2 md:col-span-8 rounded-lg  bg-gray-500  overflow-hidden">
      <carousel :wrap-around="true" :breakpoints="breakpoints">
        <slide v-for="imagen in imagesList" :key="imagen.id">
          <nuxt-img
              :src="imagen.src"
              :alt="imagen.alt"
              :placeholder="[50, 25, 75, 5]"
              class="object-cover h-[520px] w-full"
          />
        </slide>
      </carousel>
    </div>

    <div class="col-span-2 md:col-span-4 items-center relative z-0 bg-slate-100 p-6  rounded-lg ">
<!--      <div class="">-->
<!--        {{ packageData?.codigo }}-->
<!--        <h3 class="text-xl font-bold">Precio (Hotel 2 estrellas):</h3>-->
<!--        <p v-if="precioDosEstrellas">-->
<!--          ${{ precioDosEstrellas }}-->
<!--        </p>-->
<!--        <p v-else>-->
<!--          Precio no disponible-->
<!--        </p>-->
<!--      </div>-->


        <!-- Top seller badge -->
        <div class="absolute -top-3 left-5 z-10 bg-gray-800 text-white px-2 py-1 rounded text-xs font-bold">
          TOP SELLER
        </div>

        <!-- Details -->
        <div class="mt-5">
          <h2 class="text-2xl font-semibold">{{ packageData?.duracion }} days</h2>
<!--          <p class="text-gray-600">Ushuaia to Ushuaia</p>-->
        </div>

        <!-- Price -->
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
            Precio no disponible
          </div>
<!--          <p class="mt-1 text-sm">-->
<!--            Valid on <span class="text-sky-500">Mar 13 2026</span>-->
<!--          </p>-->
          <p class="mt-3 text-sm text-gray-500 font-extrabold">
            Trip Code: <span class="font-medium">{{ packageData?.codigo }}</span>
          </p>
        </div>

        <!-- Reviews -->
<!--        <div class="flex items-center gap-1 text-gray-400 mt-3">-->
<!--          <span>⭐️⭐️☆☆☆</span>-->
<!--          <span class="text-sm">No reviews</span>-->
<!--        </div>-->

      <div class="text-left">
        <div class="elfsight-app-19a38dd6-cb79-4354-ab2e-57709a6ad7e7" data-elfsight-app-lazy></div>
      </div>

        <!-- Book Now Button -->
        <button class="btn-primary  w-full mt-3">
          Book now
        </button>

        <!-- Wishlist button -->
        <button class="rounded-md py-3 px-5 text-gray-800 border bg-white hover:bg-gray-200 hover:text-gray-500 duration-300 w-full mt-3">
          Inquire now
        </button>

        <!-- Special Offers -->
        <div class="mt-4 border-t pt-3">
          <h3 class="text-gray-600 font-semibold">Special Offers</h3>
          <div class="text-sm mt-2">
            <p>
              <span class="text-sky-500 font-medium">Save 15% - Select Departures Nov 22 - Feb 20, 2026</span>
              <br>
              <span class="text-gray-400">Expires in 23 days | Promo Code G25GAV015ANT07</span>
            </p>
            <p class="mt-2">
              <span class="text-sky-500 font-medium">Save 20% - Select Departures Jan 30 - Mar 13, 2026</span>
              <br>
              <span class="text-gray-400">Expires in 23 days | Promo Code G25GAV020ANT05</span>
            </p>
          </div>
        </div>


    </div>
  </header>
</template>
