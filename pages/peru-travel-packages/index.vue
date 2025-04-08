<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from "vue3-carousel";
import { usePackageStore } from "~/stores/packages";
import ReservationPolicies from '~/components/page/ReservationPolicies.vue';
import ImgSlider from '~/components/page/ImgSlider.vue';
import FAQ from '~/components/sections/FAQ.vue';

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

const reservation_slides = {
  title: "Book with confidence",
  slides: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
  <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clip-rule="evenodd" />
  <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
</svg>
`,
      text: "Lock in your spot with a $200 deposit"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
</svg>
`,
      text: "Pay monthly or bi-weekly"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
  <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clip-rule="evenodd" />
</svg>
`,
      text: "Amend your booking up to 60 days pre-tip"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
</svg>
`,
      text: "Plans changed? Your payments are protected"
    },
  ]
};

const why_visit_slides = {
  title: "Why visit Perú with GOTOPERU?",
  slides: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
`,
      title: "Travel With Ease",
      text: "Some spots need a pre-booking. Some can only be accessed via a bumpy road. It could get overwhelming, right? Not for you, though – because we’ll sort it all for you!"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
`,
      title: "Sleep in the Amazon",
      text: "Relaxing in a hammock under a starry sky. Cool Peruvian breeze in your hair. Too good to be true? Nope, coz we’ll book the finest eco-lodges in the middle of the Amazon (and get you there by boat too)."
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
`,
      title: "Weave your way through the Sacred Valley",
      text: "Andean artisans practice Peruvian weaving, but this sacred tradition is under threat. On our epic MAKE TRAVEL MATTER® experiences, you can support locals and keep these precious customs alive."
    },
  ]
};

const imagen_paquetes = [
  {
    "id": 121,
    "nombre": "https://images.goway.com/production/styles/visual_media_content_3xl/s3/media/iStock-1499760492.jpg?VersionId=HMnaGSWLRd5MsxorknBI0tnyjQkJuq3b&h=0624ca61&itok=7XIsIW17",
    "alt": null,
    "idpaquetes": 168,
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 123,
    "nombre": "https://images.goway.com/production/styles/visual_media_content_3xl/s3/media/iStock-1490821055.jpg?VersionId=9WQPj2lCA_C_9Al2HTGgJu6Cvlsrg5wb&h=79355495&itok=dYVr9dPH",
    "alt": null,
    "idpaquetes": 168,
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 124,
    "nombre": "https://images.goway.com/production/styles/visual_media_content_3xl/s3/media/iStock-1434996243.jpg?VersionId=cbKZa5JgWejXT4Ogct1RlUoadGNKF_kX&h=022dcaef&itok=B5cVU9aQ",
    "alt": null,
    "idpaquetes": 168,
    "created_at": null,
    "updated_at": null
  },
  {
    "id": 125,
    "nombre": "https://images.goway.com/production/styles/visual_media_content_3xl/s3/media/iStock-1481251241.jpg?VersionId=r2tSNc28OdjQIBohu1N.rOizjEe5IIfV&h=f82a2171&itok=6bcKbUHP",
    "alt": null,
    "idpaquetes": 168,
    "created_at": null,
    "updated_at": null
  }
]

const carouselRef = ref();

const prevSlide = () => {
  carouselRef.value.prev();
}

const nextSlide = () => {
  carouselRef.value.next();
}

const getPackage = async () => {
  const res: any = await packageStore.getPackage()


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

const getThreeStarPrice = (arr: any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

onMounted(async () => {
  await getPackage()
})
</script>
<template>
  <header class="h-[75vh] relative">
    <img src="https://gotolatam.com/images/banners/country/calafate.jpg" alt="" class="object-cover w-screen h-full">
    <div class="absolute inset-x-0 bottom-0 text-center">
      <h1 class="mb-24 font-bold text-6xl text-white">
        Peru Travel Packages
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
        <p>The magic of Peru is waiting for you. Gotoperu offers the best Peru travel packages, so you can visit the
          various destinations that Peru offers and participate in the activities that can be done at each destination.
          Live the unforgettable experience of visiting the most emblematic neighborhoods on a Lima city tour,
          practicing kayaking in the beautiful Vilcanota River, or visiting the wonder of the world, Machu Picchu
          citadel, with the best operators in Peru.</p>
        <p class="mt-5">Gotoperu offers Peru travel packages covering the main Peru destinations such as Machu Picchu,
          Rainbow Mountain, Cusco, Lima, Sacred Valley, Titicaca Lake, Puno, Arequipa, Nazca, the Amazon, and many more.
        </p>
      </div>
    </div>
    <h3 class="flex justify-center font-bold text-4xl my-12">Top Peru Tours</h3>
    <div class="container grid md:grid-cols-2 lg:grid-cols-3 gap-12">

      <!-- Aquí puedes poner el contenido de cada slide, por ejemplo: -->

      <a :href="'/peru-travel-packages/' + packages.url"
        class="bg-white col-span-1 w-full rounded-xl  shadow-md cursor-pointer group flex flex-col h-full"
        v-for="packages in listPackages" :key="packages.id">
        <div class="relative">
          <img :src="packages.imagen" alt="" class="rounded-lg w-full">
          <div
            class="bg-secondary px-2 py-1 z-10 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">
            PAQUETE</div>
          <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-40"></div>
        </div>
        <div class="relative p-4 flex flex-col h-full">
          <div>
            <div class="my-3">{{ packages.duracion }} day tour</div>
            <h3 class="text-left lowercase font-semibold text-gray-500 my-3">{{ packages.titulo }}</h3>
          </div>

          <!-- <div class="flex text-xs font-semibold gap-1 items-center">
            <template v-for="(destination, index, array) in uniqueDestinos = paisesUnicos(packages.paquetes_destinos)"
              :key="destination.id">
              {{ destination.nombre }}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < uniqueDestinos.length - 1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </template>
</div> -->
          <div class="flex items-center justify-between gap-6 mt-auto">
            <div>
              <div v-if="getThreeStarPrice(packages.precio_paquetes) > 0" class="text-2xl font-semibold">
                <span class="text-xs text-gray-400">From</span> ${{ getThreeStarPrice(packages.precio_paquetes) }}
              </div>
              <div v-else class="text-2xl font-semibold">
                <sup class="italic light text-xs">Price </sup>Inquire
              </div>
            </div>
            <button class="btn-primary group-hover:bg-opacity-75 text-xs  text-center inline-block ">View
              itinerary</button>
          </div>


          <!-- <div class="flex gap-2 mt-3 text-sm">
            <img src="/icons/map-location.svg" alt=""> Starting Airport <span class="text-primary font-semibold">{{
              packages.codigo_vuelo }}</span>
          </div> -->
          <!-- <div class="border my-4"></div> -->
          <!-- <div class="flex justify-between text-lg font-semibold">
            <div>{{ packages.duracion }} days</div>
          </div> -->

        </div>
        <!-- <button class="m-2 btn-secondary group-hover:bg-opacity-75 mt-auto text-center">View
          itinerary</button> -->
      </a>
    </div>
  </section>
  <ReservationPolicies :slides="why_visit_slides" :reservationPolicies="false"></ReservationPolicies>
  <ReservationPolicies :slides="reservation_slides" :reservationPolicies="true"></ReservationPolicies>
  <ImgSlider :imagen_paquetes="imagen_paquetes"></ImgSlider>
  <FAQ></FAQ>
</template>