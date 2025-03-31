<script setup lang="ts" name="CarouselP">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from "vue3-carousel";
import { usePackageStore } from "~/stores/packages";

const packageStore = usePackageStore()

const listPackages = ref([])

const breakpoints = {
  // 500px and up
  350: {
    itemsToShow: 1.2,
    snapAlign: 'start',
  },
  // 700px and up
  700: {
    itemsToShow: 2.2,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 2.2,
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

const getPackage = async () => {
  const res: any = await packageStore.getPackageTop()
  listPackages.value = res.slice(0, 7)
  console.log(listPackages.value)
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

interface Item {
  id: number;
  name: string;
}

const paisesUnicos = (destinos: any) => {
  const paisesVistos = new Set();
  return destinos.filter((destino: { destinos: { pais: any; }; }) => {
    const pais = destino.destinos.pais;
    if (!paisesVistos.has(pais.id)) {
      paisesVistos.add(pais.id);
      return true;
    }
    return false;
  }).map((destino: { destinos: { pais: any; }; }) => destino.destinos.pais);
};

const getThreeStarPrice = (arr: any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

onMounted(async () => {
  await getPackage()
})
</script>
<template>
  <div class="container">
    <div class="grid grid-cols-7">
      <!--      <div class="col-span-7 md:col-span-2">-->
      <!--        <h2 class="text-3xl font-bold mt-12 md:mt-0 hidden md:block">Top <br>Tours</h2>-->
      <!--        <p class="my-6 hidden md:block">Explore LATAM's most <br> captivating destinations <br> with our top tour selection</p>-->

      <!--        <h2 class="text-3xl font-bold mt-12 md:mt-0 md:hidden">Top Tours</h2>-->
      <!--        <p class="my-6 md:hidden">Explore LATAM's most captivating destinations with our top tour selection</p>-->

      <!--      </div>-->

      <div class="col-span-7 md:col-span-7">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

          <!--        <Carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">-->
          <!--          <div v-for="packages in listPackages" :key="packages.id">-->
          <!-- Aquí puedes poner el contenido de cada slide, por ejemplo: -->

          <!--          <div class="bg-white md:col-span-2 w-full rounded-xl my-2 block shadow-md relative overflow-hidden">-->

          <!--            <a href="/peru-travel-packages/Amazing-Peru-9-days"><img src="/images/banners/banner-navidad.jpg" alt="" class="object-cover  h-full">-->
          <!--&lt;!&ndash;            <div class="absolute p-6 mt-12 text-white top-0 inset-x-0 z-10">&ndash;&gt;-->
          <!--&lt;!&ndash;              <h2 class="text-6xl font-bold mt-12 md:mt-0 hidden md:block">Top <br>Tours</h2>&ndash;&gt;-->
          <!--&lt;!&ndash;              <p class="my-6 hidden text-xl md:block">Discover the most popular destinations in Peru with <br> the best selection of Peru travel packages.</p>&ndash;&gt;-->

          <!--&lt;!&ndash;              <nuxt-link to="/peru-travel-packages" type="button" class="btn-ternary">View all</nuxt-link>&ndash;&gt;-->

          <!--&lt;!&ndash;              <h2 class="text-4xl font-bold mt-12 md:mt-0 md:hidden">Top Tours</h2>&ndash;&gt;-->
          <!--&lt;!&ndash;              <p class="my-6 md:hidden">Discover the most popular destinations in Peru with the best selection of Peru travel packages.</p>&ndash;&gt;-->
          <!--&lt;!&ndash;            </div>&ndash;&gt;-->
          <!--            <div class="absolute inset-0 bg-gradient-to-b to-70% from-gray-900 from-0% opacity-50"></div></a>-->
          <!--          </div>-->
          <template v-for="(packages, index) in listPackages" :key="packages.id">
            <div v-if="index === 2"
              class="relative col-span-1 w-full rounded-xl my-2 shadow-md group flex flex-col h-full overflow-hidden">

              <!-- Imagen -->
              <NuxtImg src="/images/packages/package1.png" alt="Banner"
                class="w-full h-full object-cover rounded-xl shadow-md brightness-75" />

              <!-- Contenido sobre la imagen -->
              <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                <div class="bg-black bg-opacity-50 p-4 rounded-lg">
                  <NuxtImg src="/images/packages/best-offer-tag.webp" alt="Offer"
                    class="w-full h-full object-cover rounded-xl shadow-md" />
                </div>
                <p class="mt-4 text-lg font-semibold">Book before 8th April</p>
                <button class="mt-4 bg-white text-gray-900 font-bold py-2 px-4 rounded-full">DEALS THIS WAY</button>
              </div>
            </div>

            <a :href="'/peru-travel-packages/' + packages.url"
              class="p-3 bg-white col-span-1 w-full rounded-xl my-2 shadow-md cursor-pointer group flex flex-col h-full">
              <div class="relative">
                <img :src="packages.imagen" alt="" class="w-full rounded-lg">
                <div
                  class="bg-secondary px-2 py-1 z-10 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">
                  PAQUETE</div>
                <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-40"></div>
              </div>
              <div class="relative">
                <div class="my-3">{{ packages.duracion }} day tour</div>
                <h3 class="text-left text-lg font-semibold my-3">{{ packages.titulo }}</h3>
                <!-- <div class="flex text-xs font-semibold gap-1 items-center">
                  <template
                    v-for="(destination, index, array) in uniqueDestinos = paisesUnicos(packages.paquetes_destinos)"
                    :key="destination.id">
                    {{ destination.nombre }}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < uniqueDestinos.length - 1">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </template>
</div> -->
                <div v-if="getThreeStarPrice(packages.precio_paquetes) > 0" class="text-2xl font-semibold">
                  <span class="text-xs text-gray-400">From</span> ${{ getThreeStarPrice(packages.precio_paquetes) }}
                </div>
                <div v-else class="text-2xl font-semibold">
                  <sup class="italic light text-xs">Price </sup>Inquire
                </div>
                <!-- <div class="flex gap-2 mt-3 text-sm">
                <img src="/icons/map-location.svg" alt=""> Starting Airport <span class="text-primary font-semibold">{{
                  packages.codigo_vuelo }}</span>
              </div> -->
                <!-- <div class="border my-4"></div>
              <div class="flex justify-between text-lg font-semibold">

              </div> -->
              </div>
              <a :href="'/peru-travel-packages/' + packages.url"
                class="btn-secondary group-hover:bg-opacity-75 mt-auto text-center">View
                itinerary</a>
            </a>
          </template>

          <!--          </div>-->
        </div>
        <!--        </Carousel>-->
      </div>
    </div>
  </div>
</template>