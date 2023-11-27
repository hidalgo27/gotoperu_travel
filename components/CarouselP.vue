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
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <!--        <Carousel  ref="carouselRef" :wrap-around="true" :breakpoints="breakpoints">-->
          <!--          <div v-for="packages in listPackages" :key="packages.id">-->
          <!-- Aquí puedes poner el contenido de cada slide, por ejemplo: -->

          <div class="bg-white md:col-span-2 w-full rounded-xl my-2 block shadow-md relative overflow-hidden">
            <img src="https://www.peruforless.com/content-files/uploads/v2/be-machu-picchu-1-c.webp" alt="" class="object-cover  h-full">
            <div class="absolute text-center mt-12 text-white top-0 inset-x-0 z-10">
              <h2 class="text-3xl font-bold mt-12 md:mt-0 hidden md:block">Top <br>Tours</h2>
              <p class="my-6 hidden md:block">Explore LATAM's most <br> captivating destinations <br> with our top tour selection</p>

              <h2 class="text-3xl font-bold mt-12 md:mt-0 md:hidden">Top Tours</h2>
              <p class="my-6 md:hidden">Explore LATAM's most captivating destinations with our top tour selection</p>
            </div>
            <div class="absolute inset-0 bg-gradient-to-b to-70% from-gray-900 from-0% opacity-50"></div>
          </div>

          <nuxt-link :to="'/latam-travel-packages/'+packages.url" @click="codeW(packages.codigo_f)" class="p-3 bg-white col-span-1 w-full rounded-xl my-2 block shadow-md cursor-pointer" v-for="packages in listPackages" :key="packages.id">
            <div class="relative">
              <img :src="packages.imagen" alt="" class="w-full rounded-lg">
              <div class="bg-secondary px-2 py-1 z-10 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">PAQUETE</div>
              <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-40"></div>
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
          </nuxt-link>

          <!--          </div>-->
        </div>
        <!--        </Carousel>-->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="CarouselP">
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide} from "vue3-carousel";
import {usePackageStore} from "~/stores/packages";

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

const codeW = (item:any) => {
  console.log(item)
  packageStore.code_w = item
}

const getPackage = async () => {
  const res:any = await packageStore.getPackageTop()


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