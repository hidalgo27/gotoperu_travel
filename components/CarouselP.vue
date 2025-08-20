<script setup lang="ts">
import { NuxtImg } from '#components';
import { ref, computed } from 'vue';
import { usePackageStore } from "~/stores/packages";

const packageStore = usePackageStore();
const allPackages = ref([]);
const activeDayFilter = ref('machu-picchu');
const isLoading = ref(true);

// Categorías para los filtros de 1 día
const dayTourCategories = [
  { id: 'machu-picchu', name: 'MACHU PICCHU' },
  // { id: 'cusco', name: 'CUSCO' },
  { id: 'huacachina', name: 'HUACACHINA' },
  // { id: 'amazon', name: 'AMAZON' },
  // { id: 'lima', name: 'LIMA' }
];

// Obtener todos los paquetes
const fetchAllPackages = async () => {
  try {
    isLoading.value = true;
    const res: any = await packageStore.getPackageTop();
    allPackages.value = res;
  } catch (error) {
    console.error('Error fetching packages:', error);
  } finally {
    isLoading.value = false;
  }
};

// Filtrado computado
const filteredPackages = computed(() => {
  const oneDayPackages = allPackages.value.filter(pkg => pkg.duracion === 1);
  // const fourToSevenPackages = allPackages.value.filter(pkg => pkg.duracion >= 4 && pkg.duracion <= 7);
  // const eightToFourteenPackages = allPackages.value.filter(pkg => pkg.duracion >= 8 && pkg.duracion <= 14);
  // const fifteenPlusPackages = allPackages.value.filter(pkg => pkg.duracion >= 15);

  const multidayPackages = allPackages.value.filter(pkg => pkg.duracion > 1).slice(0, 6);
  console.log('Multiday Packages:', multidayPackages);
  // const filteredOneDay = oneDayPackages.filter(pkg => {
  //   return pkg.paquetes_destinos?.some(destino => {
  //     return destino.destinos?.url === activeDayFilter.value;
  //   });
  // });

  return {
    oneDay: oneDayPackages,
    // fourToSeven: fourToSevenPackages,
    // eightToFourteen: eightToFourteenPackages,
    // fifteenPlus: fifteenPlusPackages,
    multiDay: multidayPackages
  };
});

const getThreeStarPrice = (arr: any) => {
  if (!arr) return 'Inquire';
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? `$${price.precio_d}` : 'Inquire';
};

onMounted(async () => {
  await fetchAllPackages();
});
</script>

<template>
  <div class="">
    <!-- Loading state -->
    <div v-if="isLoading" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      <p class="mt-2">Loading packages...</p>
    </div>

    <!-- Content when loaded -->
    <template v-else>
      <!-- Sección de 1 día con filtros -->
      <section class="mb-16">
        <div class="flex flex-col md:flex-row justify-center items-center mb-6">
          <div class="flex items-center justify-center mb-4 gap-2 ">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-6 text-secondary mb-0.5">
              <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                clip-rule="evenodd" />
            </svg> -->
            <h2 class="text-3xl font-semibold mb-4 md:mb-0 ">DAY TOURS</h2>
          </div>
          <!-- <div class="flex space-x-2 overflow-x-auto pb-2">
            <button v-for="category in dayTourCategories" :key="category.id" @click="activeDayFilter = category.id"
              :class="{
                'bg-primary text-white': activeDayFilter === category.id,
                'bg-gray-100 text-gray-800': activeDayFilter !== category.id
              }" class="px-4 py-2 rounded-full z-10 text-sm font-medium whitespace-nowrap transition-colors ">
              {{ category.name }}
            </button>
          </div> -->
        </div>

        <div v-if="filteredPackages.oneDay.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <a v-for="pack in filteredPackages.oneDay" :href="'/peru-travel-packages/' + pack.url"
            class="bg-white col-span-1 w-full rounded-xl  shadow-md cursor-pointer group flex flex-col h-full">
            <div class="relative">
              <div v-if="pack.offers_home === 1"
                class="bg-secondary px-2 py-1 z-10 rounded w-auto absolute top-2 mx-2  font-semibold text-white text-sm">
                Special Offer</div>
              <img :src="pack.imagen" alt="" class="w-full rounded-lg">
              <div
                class="bg-secondary px-2 py-1 z-10 rounded w-auto absolute bottom-0  mb-2 left-1/2 transform -translate-x-1/2 font-semibold text-black text-lg">
                $ 199</div>
              <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-40"></div>
            </div>
            <div class="relative p-4 flex flex-col h-full">
              <div>
                <!-- <div class="my-3">{{ pack.duracion }} day tour</div> -->
                <h3 class="text-left lowercase font-semibold  my-3">{{ pack.titulo }}</h3>
              </div>
              <span class="py-1 text-gray-400">Book now for today</span>
              <div class="flex items-center gap-6 mt-auto justify-between">
                <!-- <div>
                  <div v-if="getThreeStarPrice(pack.precio_paquetes) > 0" class="text-2xl font-semibold">
                    <sup class="text-xs text-gray-400">From</sup> ${{ getThreeStarPrice(pack.precio_paquetes) }}
                  </div>
                  <div v-else class="text-2xl font-semibold text-red-500">
                    <sup class="italic light text-xs">Price </sup>Inquire
                  </div>
                </div> -->
                <a :href="'/peru-travel-packages/' + pack.url"
                  class="btn-primary group-hover:bg-opacity-75 text-lg text-center inline-block w-full">View
                  Itinerary</a>
              </div>
            </div>
          </a>
        </div>
        <div v-else class="text-center py-8 bg-gray-50 rounded-lg">
          <p>No day tours available for this filter</p>
        </div>
      </section>

      <!-- Sección 4-7 días -->
      <!-- <section class="mb-16">
        <div class="flex items-end mb-8 gap-2 bg-white/50 p-4 rounded-lg ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="size-6 text-primary mb-0.5">
            <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
              clip-rule="evenodd" />
          </svg>
          <h2 class="text-3xl font-semibold mb-4 md:mb-0">4-7 Days Travel Packages</h2>
        </div>

        <div v-if="filteredPackages.fourToSeven.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <a v-for="pack in filteredPackages.fourToSeven" :href="'/peru-travel-packages/' + pack.url"
            class="bg-white col-span-1 w-full rounded-xl  shadow-md cursor-pointer group flex flex-col h-full">
            <div class="relative">
              <img :src="pack.imagen" alt="" class="w-full rounded-lg">
              <div
                class="bg-secondary px-2 py-1 z-10 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">
                PAQUETE</div>
              <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-40"></div>
            </div>
            <div class="relative p-4 flex flex-col h-full">
              <div>
                <div class="my-3">{{ pack.duracion }} day tour</div>
                <h3 class="text-left lowercase font-semibold text-gray-500 my-3">{{ pack.titulo }}</h3>
              </div>
              <div class="flex items-center gap-6 mt-auto justify-between">
                <div>
                  <div v-if="getThreeStarPrice(pack.precio_paquetes) > 0" class="text-2xl font-semibold">
                    <sup class="text-xs text-gray-400">From</sup> ${{ getThreeStarPrice(pack.precio_paquetes) }}
                  </div>
                  <div v-else class="text-2xl font-semibold text-red-500">
                    <sup class="italic light text-xs">Price </sup>Inquire
                  </div>
                </div>
                <a :href="'/peru-travel-packages/' + pack.url"
                  class="btn-primary group-hover:bg-opacity-75 text-sm  text-center inline-block ">View Itinerary</a>
              </div>
            </div>
          </a>
        </div>
        <div v-else class="text-center py-8 bg-gray-50 rounded-lg">
          <p>No packages available in this duration</p>
        </div>
      </section> -->

      <!-- Sección 8-14 días -->
      <!-- <section class="mb-16">

        <div class="flex items-end mb-8 gap-2 bg-white/50 p-4 rounded-lg ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="size-6 text-secondary mb-0.5">
            <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
              clip-rule="evenodd" />
          </svg>
          <h2 class="text-3xl font-semibold mb-4 md:mb-0">8-14 Days Travel Packages</h2>
        </div>

        <div v-if="filteredPackages.eightToFourteen.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <a v-for="pack in filteredPackages.eightToFourteen" :href="'/peru-travel-packages/' + pack.url"
            class="bg-white col-span-1 w-full rounded-xl  shadow-md cursor-pointer group flex flex-col h-full">
            <div class="relative">
              <img :src="pack.imagen" alt="" class="w-full rounded-lg">
              <div
                class="bg-secondary px-2 py-1 z-10 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">
                PAQUETE</div>
              <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-40"></div>
            </div>
            <div class="relative p-4 flex flex-col h-full">
              <div>
                <div class="my-3">{{ pack.duracion }} day tour</div>
                <h3 class="text-left lowercase font-semibold text-gray-500 my-3">{{ pack.titulo }}</h3>
              </div>
              <div class="flex items-center gap-6 mt-auto justify-between">
                <div>
                  <div v-if="getThreeStarPrice(pack.precio_paquetes) > 0" class="text-2xl font-semibold">
                    <sup class="text-xs text-gray-400">From</sup> ${{ getThreeStarPrice(pack.precio_paquetes) }}
                  </div>
                  <div v-else class="text-2xl font-semibold text-red-500">
                    <sup class="italic light text-xs">Price </sup>Inquire
                  </div>
                </div>
                <a :href="'/peru-travel-packages/' + pack.url"
                  class="btn-primary group-hover:bg-opacity-75 text-sm  text-center inline-block ">View Itinerary</a>
              </div>
            </div>
          </a>
        </div>
        <div v-else class="text-center py-8 bg-gray-50 rounded-lg">
          <p>No packages available in this duration</p>
        </div>
      </section> -->

      <!-- Sección 15+ días -->
      <!-- <section class="mb-16">
        <div class="flex items-end mb-8 gap-2 bg-white/50 p-4 rounded-lg ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="size-6 text-secondary mb-0.5">
            <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
              clip-rule="evenodd" />
          </svg>
          <h2 class="text-3xl font-semibold mb-4 md:mb-0">15 Days + Days Travel Packages</h2>
        </div>

        <div v-if="filteredPackages.fifteenPlus.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <a v-for="pack in filteredPackages.fifteenPlus" :href="'/peru-travel-packages/' + pack.url"
            class="bg-white col-span-1 w-full rounded-xl  shadow-md cursor-pointer group flex flex-col h-full">
            <div class="relative">
              <img :src="pack.imagen" alt="" class="w-full rounded-lg">
              <div
                class="bg-secondary px-2 py-1 z-10 rounded w-auto absolute bottom-0 -mb-2 m-2 text-[9px] font-semibold text-white">
                PAQUETE</div>
              <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-40"></div>
            </div>
            <div class="relative p-4 flex flex-col h-full">
              <div>
                <div class="my-3">{{ pack.duracion }} day tour</div>
                <h3 class="text-left lowercase font-semibold text-gray-500 my-3">{{ pack.titulo }}</h3>
              </div>
              <div class="flex items-center gap-6 mt-auto justify-between">
                <div>
                  <div v-if="getThreeStarPrice(pack.precio_paquetes) > 0" class="text-2xl font-semibold">
                    <sup class="text-xs text-gray-400">From</sup> ${{ getThreeStarPrice(pack.precio_paquetes) }}
                  </div>
                  <div v-else class="text-2xl font-semibold text-red-500">
                    <sup class="italic light text-xs">Price </sup>Inquire
                  </div>
                </div>
                <a :href="'/peru-travel-packages/' + pack.url"
                  class="btn-primary group-hover:bg-opacity-75 text-sm  text-center inline-block ">View Itinerary</a>
              </div>
            </div>
          </a>
        </div>
        <div v-else class="text-center py-8 bg-gray-50 rounded-lg">
          <p>No packages available in this duration</p>
        </div>
      </section> -->
      <section class="mb-16">
        <div class="flex flex-col md:flex-row justify-center items-center mb-6">
          <div class="flex items-end mb-4 gap-2">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="size-6 text-secondary mb-0.5">
              <path fill-rule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                clip-rule="evenodd" />
            </svg> -->
            <h2 class="text-3xl font-semibold mb-4 md:mb-0 uppercase">Multi Day tours</h2>
          </div>
        </div>

        <div v-if="filteredPackages.multiDay.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">

          <article v-for="(pack, index) in filteredPackages.multiDay" :key="pack.id"
            class="relative group overflow-hidden rounded-sm" :class="{
              'lg:col-span-3': index === 0 || index === filteredPackages.multiDay.length - 1,
              'lg:col-span-2': index > 0 && index < filteredPackages.multiDay.length - 1
            }">
            <NuxtImg alt="Two people in traditional Peruvian clothing smiling and embracing each other"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              :src="pack.imagen" />
            <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-80 p-1"></div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end text-white">
              <h2 class="font-semibold text-lg leading-tight mb-1">
                {{ pack.titulo }}
              </h2>

              <hr class="border-white mb-3" />
              <p class="text-xs mb-1 opacity-90 flex flex-wrap items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                <span v-for="(destination, index) in pack.paquetes_destinos" :key="destination.id" class="inline">
                  {{ destination.destinos.nombre }}
                  <template v-if="index < pack.paquetes_destinos.length - 2">, </template>
                  <template v-else-if="index === pack.paquetes_destinos.length - 2"> & </template>
                </span>
              </p>
              <p class="text-sm  mb-3">
                <span class="font-bold text-lg">
                  {{ pack.duracion }} days
                </span>
                / from:
                <span v-if="pack.precio_paquetes[1].precio_d" class="font-bold text-lg">
                  {{ getThreeStarPrice(pack.precio_paquetes) }}
                </span>
                <span v-else class="font-bold text-lg">
                  Please Inquire
                </span>
              </p>
              <a :href="'/peru-travel-packages/' + pack.url"
                class="btn-secondary-sm text-sm font-semibold px-4 py-1 rounded-sm w-max" type="button">
                View Itinerary
              </a>
            </div>
          </article>
        </div>
        <div v-else class="text-center py-8 bg-gray-50 rounded-lg">
          <p>No day tours available for this filter</p>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped></style>