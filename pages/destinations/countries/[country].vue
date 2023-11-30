<template>
  <header class="h-[75vh] relative">

    <img :src="country.imagen" alt="" class="object-cover w-screen h-full" v-for="country in paisess">
    <!--    <div class="absolute inset-x-0 bottom-0 text-center">
          <h1 class="mb-24 font-bold text-6xl text-white">
            Destinations
          </h1>
        </div>-->
  </header>

<!--  <sections class="my-12">
    <div class="container">
      <h1 class="text-3xl font-bold uppercase">{{ route.params.country }} Travel Packages</h1>
    </div>
  </sections>-->

  <section class="my-12">
    <div class="container grid md:grid-cols-12 gap-24">
      <div class="md:col-span-3 space-y-3">

        <router-link :to="country.url" class="aside-country block" v-for="country in listPais">
          {{ country.nombre }}</router-link>

      </div>
      <div class="md:col-span-9 ">

        <h1 class="text-3xl font-bold uppercase">{{ route.params.country }} Travel Packages</h1>
        <hr class="my-6">
          <div class="grid md:grid-cols-2 gap-12">
            <a :href="'/peru-travel-packages/'+packages.url" class="p-3 bg-white w-full rounded-xl shadow-md cursor-pointer" v-for="packages in paquetesPeru" :key="packages.id">
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
                  <img src="/icons/map-location.svg" alt=""> Starting Airport <span class="text-primary font-semibold"> {{ packages.codigo_vuelo }}</span>
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

        <h2 class="text-3xl mt-12 font-bold uppercase">{{ route.params.country }} Multi Countries</h2>
        <hr class="my-6">


        <div class="grid md:grid-cols-2 gap-12">
          <a :href="'/peru-travel-packages/'+packages.url" class="p-3 bg-white w-full rounded-xl shadow-md cursor-pointer" v-for="packages in paquetesConPeruYDosPaisesMinimo" :key="packages.id">
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
                <img src="/icons/map-location.svg" alt=""> Starting Airport <span class="text-primary"> ---</span>
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

      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {usePackageStore} from "~/stores/packages";
import {Slide} from "vue3-carousel";


const route = useRoute()

const packageStore = usePackageStore()

const listDestination = ref([])
const listPais = ref([])

const country = ref(route.params.country)

const listMulti = ref([])

const getCountry = async (url:any) => {
  const res:any = await packageStore.getPackageTop()

  listDestination.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

const getPais = async () => {
  const res:any = await packageStore.getPais()

  listPais.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}


const paquetesPeru = computed(() => {
  return listDestination.value.filter(paquete => {
    return paquete.paquetes_destinos.every((destino: { destinos: { pais: { url: string | string[]; }; }; }) => {
      return destino.destinos.pais.url === country.value;
    });
  });
});

const paisess = computed(() => {
  return listPais.value.filter(pais => {
    return pais.url === country.value
  })
})

const paquetesConPaisPeru = computed(() => {
  return listDestination.value.filter(paquete => {
    return paquete.paquetes_destinos.some((destino: { destinos: { pais: { url: string | string[]; }; }; }) => {
      return destino.destinos.pais.url === country.value;
    });
  });
});

const paquetesConPeruYDosPaisesMinimo = computed(() => {
  return listDestination.value.filter(paquete => {
    // Filtra los destinos que tengan países únicos, incluyendo Perú
    const destinosUnicos = [...new Set(paquete.paquetes_destinos.map((destino: { destinos: { pais: { url: any; }; }; }) => destino.destinos.pais.url))];

    // Verifica si hay al menos tres países únicos incluyendo Perú
    return destinosUnicos.length >= 2 && destinosUnicos.includes(country.value); // 1 representa el ID de Perú
  });
});

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
  await getCountry(route.params.country)
  await getPais()
})
</script>