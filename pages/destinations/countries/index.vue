<template>
  <header class="h-[75vh] relative">
    <img src="https://gotolatam.com/images/400/1700/machu-picchu-full-day.jpg" alt="" class="object-cover w-screen h-full">
        <div class="absolute inset-x-0 bottom-0 text-center">
          <h1 class="mb-24 font-bold text-6xl text-white">
            Travel destinations to South America
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
      <div class="grid text-center px-6 text-lg">
        <p>The countries of South America hide the most beautiful destinations that every traveler wishes to visit. You will have the chance to learn about the cultures of each LATAM country, experience in person the great geographic diversity of each destination, and visit both the Wonders of the World and the Natural Wonders that are on this continent. Get ready for your trip to this continent full of dream destinations.</p>
      </div>
    </div>
    <div class="container grid md:grid-cols-3 gap-12">
      <a :href="'/destinations/countries/'+country.url" class="p-3 bg-white w-full rounded-xl my-2 shadow-md cursor-pointer" v-for="country in listDestination">
        <div class="relative">
          <img :src="country.imagen_s" alt="" class="rounded-lg">
        </div>
        <div class="">
          <h3 class="text-left text-lg font-semibold my-3">{{ country.nombre }}</h3>
          <div class="flex gap-2 mt-3 text-sm">
            <img src="/icons/map-location.svg" alt=""> {{country.resumen}}
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {usePackageStore} from "~/stores/packages";

const packageStore = usePackageStore()

const listDestination = ref([])

const getPais = async () => {
  const res:any = await packageStore.getPais()


  listDestination.value = res
  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

onMounted(async () => {
  await getPais()
})
</script>