<template>
  <header class="h-[75vh] relative">
    <img src="https://gotolatam.com/images/banners/country/calafate.jpg" alt="" class="object-cover w-screen h-full">
    <div class="absolute inset-x-0 bottom-0 text-center">
      <h1 class="mb-24 font-bold text-6xl text-white capitalize">
        {{ destino.replace('-', ' ') }} Tours
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
        <p>GOTOPERU packages are created by our team of travel specialists so that you can enjoy the most of your time
          in every destination in Peru.</p>
        <p>Every detail of your travel itinerary is planned and executed to perfection by our partners in each Peru
          destination. If you are looking for an activity or destination not listed in our travel packages, do not
          hesitate to contact us for more information.</p>
      </div>
    </div>

    <div
      class="container col-span-12 md:col-span-10 flex justify-center my-9 md:grid-cols-3 gap-3 overflow-x-scroll focus:touch-pan-x">
      <div class="flex" v-for="destino2 in listDestination">

        <nuxt-link :to="destino2.url" :for="destino2.id"
          class="w-full text-center gap-2 select-none cursor-pointer  text-gray-800 rounded-full px-5 py-2 transition-colors duration-200 ease-in-out grayscale peer-checked:grayscale-0 peer-checked:text-primary"
          :class="[destino2.url == destino ? 'bg-[#D6DD85]' : 'bg-gray-100']">

          <!--                  <img :src="destino.imagen" alt="" class=" w-8 h-8 rounded-full shadow-lg float-left">-->
          <span class="overflow-auto">{{ destino2.nombre }}</span>

        </nuxt-link>

      </div>
    </div>

    <div class="container grid md:grid-cols-3 gap-12">

      <!-- Aquí puedes poner el contenido de cada slide, por ejemplo: -->

      <a :href="'/peru-travel-packages/' + packages.paquetes.url"
        class="bg-white w-full rounded-xl my-2 shadow-md cursor-pointer group flex flex-col h-full"
        v-for="packages in listPackages" :key="packages.paquetes.id">
        <div class="relative">
          <img :src="packages.paquetes.imagen" alt="" class="rounded-lg w-full">
          <div
            class="bg-secondary px-2 py-1 z-10 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">
            PAQUETE</div>
          <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-40"></div>
        </div>
        <div class="relative p-4 flex flex-col h-full">
          <div>
            <div class="my-3">{{ packages.paquetes.duracion }} days</div>
            <h3 class="text-left lowercase font-semibold text-gray-500 my-3">{{ packages.paquetes.titulo }}</h3>
            <div class="flex flex-nowrap overflow-x-auto">
              <div class="flex text-xs font-semibold gap-1 items-center"
                v-for="(destination, index) in p = packages.paquetes.paquetes_destinos" :key="destination.id">
                <span class="truncate"
                  :class="[destination.destinos.url == destino ? 'bg-[#D6DD85] rounded-full px-2 text-primary' : 'bg-gray-50 text-gray-800']">{{
                    destination.destinos.nombre }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < p.length - 1">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </div>
            </div>
          </div>


          <!-- <div class="flex gap-2 mt-3 text-sm">
            <img src="/icons/map-location.svg" alt=""> Starting Airport <span class="text-primary font-semibold">{{
              packages.paquetes.codigo_vuelo }}</span>
          </div> -->
          <!-- <div class="border my-4"></div> -->
          <div class="flex items-item justify-between gap-6 mt-auto">
            <div>
              <div v-if="getThreeStarPrice(packages.paquetes.precio_paquetes) > 0" class="text-2xl font-semibold">
                <span class="text-xs text-gray-400">From</span> ${{ getThreeStarPrice(packages.paquetes.precio_paquetes)
                }}
              </div>
              <div v-else class="text-2xl font-semibold text-red-500">
                <sup class="italic light text-xs">Price </sup>Inquire
              </div>
            </div>

            <a :href="'/peru-travel-packages/' + packages.paquetes.url"
              class="btn-primary group-hover:bg-opacity-75 text-xs  text-center inline-block ">View
              itinerary</a>
          </div>
          <!-- <div class="flex justify-between text-lg font-semibold">
            <div>{{ packages.paquetes.duracion }} days</div>
          </div> -->

        </div>
      </a>


    </div>
  </section>
</template>

<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from "vue3-carousel";
import { usePackageStore } from "~/stores/packages";

const packageStore = usePackageStore()

const listPackages = ref([])

const listDestination = ref([])

const destinoImagen = ref([])

const destino = ref('')

const route = useRoute()

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
  const res: any = await packageStore.getCountryShow('peru', 'cusco')
  // console.log(res.paquetes)
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



// const destinoFiltrado = computed(() => {
//   return destinos.find(destino => destino.url === urlParam.value);
// });

const getThreeStarPrice = (arr: any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

const getDestinations = async (url: any) => {
  const res: any = await packageStore.getCountry(url)
  destinoImagen.value = res.filter(desti => desti.url === destino.value);
  listDestination.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

onMounted(async () => {
  await getPackage()
  destino.value = route.params.destino
  await getDestinations(route.params.country)

})
</script>