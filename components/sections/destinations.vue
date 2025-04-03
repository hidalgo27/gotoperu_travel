<template>
  <div class=" text-gray-900">
    <div class="">
      <div class="border-title-secondary mx-auto"></div>
      <h2 class="font-bold text-4xl text-center mb-12 mt-4">Travel Destinations</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink :to="'/destinations/peru/' + country.url"
          class="relative group overflow-hidden rounded-lg cursor-pointer" v-for="(country, index) in listPais"
          :key="country.url" :class="index == listPais.length - 1 ? 'hidden' : ''">
          <NuxtImg :alt="'Image of ' + country.nombre"
            class="w-full h-[450px] object-cover rounded-lg transition duration-500 ease-in-out transform group-hover:scale-105"
            :src="country.imagen" />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <span class="text-white text-lg font-semibold">{{ country.nombre }}</span>
          </div>
        </NuxtLink>
        <NuxtLink to="/destinations" class="relative group overflow-hidden rounded-lg cursor-pointer"
          v-if="listPais.length">
          <NuxtImg alt="See all destinations"
            class="w-full h-[450px] object-cover rounded-lg transition duration-500 ease-in-out transform group-hover:scale-105"
            :src="listPais[listPais.length - 1].imagen" />
          <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <span class="text-white text-lg font-semibold">See all destinations</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
  <!--   <h2 class="text-3xl font-bold text-center">Destinations</h2>
  <div class="flex md:justify-center w-full gap-3 my-6 overflow-x-scroll focus:touch-pan-x">
    <button type="button" class="px-5 py-2 font-medium rounded-full"
      :class="[countries == country.url ? 'bg-[#D6DD85] text-primary' : 'bg-gray-50 text-gray-800']"
      @click="countries = country.url" v-for="country in listPais">{{ country.nombre }}</button>
       <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Bolivia</button>
       <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Chile</button>
       <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Ecuador</button>
       <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Colombia</button>
       <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Argentina</button>
    <button type="button" class="px-5 py-2 bg-gray-100 text-gray-800 font-medium rounded-full">Brasil</button>
  </div>
  <template v-for="country2 in listPais">

    <div class="grid container md:grid-cols-12 md:gap-24 gap-6 items-center my-12" v-if="countries == country2.url">
      <div class="col-span-6">
             <transition name="pop" appear>
               <img :src="country2.imagen_s" alt="" class=" rounded-xl w-full object-cover">
             </transition>
               <img rc="/images/banners/mapa.png" alt="">
        <h3 class="text-3xl font-bold"><nuxt-link :to="'/destinations/countries/' + country2.url">{{ country2.nombre
            }}</nuxt-link></h3>
        <div class="md:pr-24">
          <transition name="left" appear>
            <div class="my-6" v-html="country2.resumen"></div>
          </transition>
          <nuxt-link :to="'/destinations/peru/' + country2.url" class="btn-primary">View {{ country2.nombre }}
            Tours</nuxt-link>
        </div>
      </div>
      <div class="col-span-6">

        <transition name="pop" appear>
          <img :src="country2.imagen" alt="" class=" rounded-xl  object-cover h-96">
        </transition>
      </div>

    </div>
  </template> -->
</template>

<script setup lang="ts">
import { usePackageStore } from "~/stores/packages";

const packageStore = usePackageStore()

const listPais = ref([])
const countries = ref('cusco')

const getCountry = async () => {
  const res: any = await packageStore.getCountry('peru')

  listPais.value = res.slice(0, 8)
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

const paises = computed(() => {
  return listPais.value.filter(pais => pais.url === countries.value)
})


onMounted(async () => {
  await getCountry()

})

</script>