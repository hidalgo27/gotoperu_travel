<script setup lang="ts">
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
  // Primero filtramos por duración para cada sección
  const oneDayPackages = allPackages.value.filter(pkg => pkg.duracion === 1);
  const fourToSevenPackages = allPackages.value.filter(pkg => pkg.duracion >= 4 && pkg.duracion <= 7);
  const eightToFourteenPackages = allPackages.value.filter(pkg => pkg.duracion >= 8 && pkg.duracion <= 14);
  const fifteenPlusPackages = allPackages.value.filter(pkg => pkg.duracion >= 15);
  console.log(oneDayPackages);
  // Aplicamos filtro adicional para los paquetes de 1 día
  const filteredOneDay = oneDayPackages.filter(pkg => {
    return pkg.paquetes_destinos?.some(destino => {
      // Accedemos correctamente a la URL del destino
      return destino.destinos?.url === activeDayFilter.value;
    });
  });

  console.log(filteredOneDay)

  return {
    oneDay: filteredOneDay,
    fourToSeven: fourToSevenPackages,
    eightToFourteen: eightToFourteenPackages,
    fifteenPlus: fifteenPlusPackages
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
  <div class="container mx-auto px-4 py-8">
    <!-- Loading state -->
    <div v-if="isLoading" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      <p class="mt-2">Loading packages...</p>
    </div>

    <!-- Content when loaded -->
    <template v-else>
      <!-- Sección de 1 día con filtros -->
      <section class="mb-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-6">
          <h2 class="text-3xl font-bold mb-4 md:mb-0">DAY TOURS</h2>
          <div class="flex space-x-2 overflow-x-auto pb-2">
            <button v-for="category in dayTourCategories" :key="category.id" @click="activeDayFilter = category.id"
              :class="{
                'bg-primary text-white': activeDayFilter === category.id,
                'bg-gray-100 text-gray-800': activeDayFilter !== category.id
              }" class="px-4 py-2 rounded-full z-10 text-sm font-medium whitespace-nowrap transition-colors">
              {{ category.name }}
            </button>
          </div>
        </div>

        <div v-if="filteredPackages.oneDay.length > 0"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <a v-for="pack in filteredPackages.oneDay" :href="'/peru-travel-packages/' + pack.url"
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
                  class="btn-primary group-hover:bg-opacity-75 text-sm  text-center inline-block ">Book Now</a>
              </div>
            </div>
          </a>
        </div>
        <div v-else class="text-center py-8 bg-gray-50 rounded-lg">
          <p>No day tours available for this filter</p>
        </div>
      </section>

      <!-- Sección 4-7 días -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">4-7 DAYS TRAVEL PACKAGES</h2>

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
                  class="btn-primary group-hover:bg-opacity-75 text-sm  text-center inline-block ">Book Now</a>
              </div>
            </div>
          </a>
        </div>
        <div v-else class="text-center py-8 bg-gray-50 rounded-lg">
          <p>No packages available in this duration</p>
        </div>
      </section>

      <!-- Sección 8-14 días -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">8-14 DAYS TRAVEL PACKAGES</h2>

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
                  class="btn-primary group-hover:bg-opacity-75 text-sm  text-center inline-block ">Book Now</a>
              </div>
            </div>
          </a>
        </div>
        <div v-else class="text-center py-8 bg-gray-50 rounded-lg">
          <p>No packages available in this duration</p>
        </div>
      </section>

      <!-- Sección 15+ días -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold mb-6">15 DAYS + TRAVEL PACKAGES</h2>

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
                  class="btn-primary group-hover:bg-opacity-75 text-sm  text-center inline-block ">Book Now</a>
              </div>
            </div>
          </a>
        </div>
        <div v-else class="text-center py-8 bg-gray-50 rounded-lg">
          <p>No packages available in this duration</p>
        </div>
      </section>
    </template>
  </div>
</template>

<style scoped>
/* Estilos adicionales para mejor apariencia */
.container {
  max-width: 1200px;
}

/* Efecto hover para las tarjetas */
a:hover h3 {
  color: #3b82f6;
  /* Cambia al color primary en hover */
}

/* Transición suave para los botones de filtro */
button {
  transition: background-color 0.2s ease, color 0.2s ease;
}
</style>