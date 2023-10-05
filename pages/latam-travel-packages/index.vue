<template>
  <header class="h-[75vh] relative">
    <img src="https://gotolatam.com/images/banners/country/calafate.jpg" alt="" class="object-cover w-screen h-full">
    <div class="absolute inset-x-0 bottom-0 text-center">
      <h1 class="mb-24 font-bold text-6xl text-white">
        LATAM Travel Packages
      </h1>
    </div>
  </header>

  <!--  <sections class="my-12">
      <div class="container">
        <h1 class="text-3xl font-bold">Destinations</h1>
      </div>
    </sections>-->

  <section class="my-12">
    <div class="container my-6">
      <div class="grid text-center text-lg">
        <p>LATAM's packages are created by our team of travel specialists so that you can enjoy the most of your time in every destination in South America.</p>
        <p>Every detail of your travel itinerary is planned and executed to perfection by our partners in each South American destination. If you are looking for an activity or destination not listed in our travel packages, do not hesitate to contact us for more information.</p>
      </div>
    </div>
    <div class="container grid md:grid-cols-3 gap-12">

      <!-- Aquí puedes poner el contenido de cada slide, por ejemplo: -->

      <a :href="'/latam-travel-packages/'+packages.url" class="p-3 bg-white w-full rounded-xl my-2 shadow-md cursor-pointer" v-for="packages in listPackages" :key="packages.id">
        <div class="relative">
          <img :src="packages.imagen" alt="" class="rounded-lg w-full">
          <div class="bg-secondary px-2 py-1 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">PAQUETE</div>
        </div>
        <div class="">
          <h3 class="text-left text-lg font-semibold my-3">{{ packages.titulo }}</h3>
          <div class="flex text-xs font-semibold gap-1 items-center">
            <template v-for="(destination, index, array) in uniqueDestinos = paisesUnicos(packages.paquetes_destinos)" :key="destination.id">
              {{destination.nombre}}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < uniqueDestinos.length - 1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </template>
          </div>
          <div class="flex gap-2 mt-3 text-sm">
            <img src="/icons/map-location.svg" alt=""> Starting Airport <span class="text-primary font-semibold">{{ packages.codigo_vuelo }}</span>
          </div>
          <div class="border my-4"></div>
          <div class="flex justify-between text-lg font-semibold">
            <div>{{ packages.duracion }} days</div>
            <div v-if="getThreeStarPrice(packages.precio_paquetes) > 0">
              <span class="text-xs text-gray-400">From</span> ${{ getThreeStarPrice(packages.precio_paquetes) }}
            </div>
            <div v-else>
              <sup class="italic light text-xs">Price </sup>Inquire
            </div>
          </div>
        </div>
      </a>


    </div>
  </section>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel";
import {usePackageStore} from "~/stores/packages";

const packageStore = usePackageStore()

const listPackages = ref([])

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

const getPackage = async () => {
  const res:any = await packageStore.getPackage()


  listPackages.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

interface Item {
  id: number;
  name: string;
}


const paisesUnicos = (destinos:any) => {
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

const getThreeStarPrice = (arr:any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

onMounted(async () => {
  await getPackage()
})
</script>