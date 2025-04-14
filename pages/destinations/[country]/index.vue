<template>
  <header class="h-[75vh] relative">
    <img src="https://gotolatam.com/images/400/1700/machu-picchu-full-day.jpg" alt=""
      class="object-cover w-screen h-full">
    <div class="absolute inset-x-0 bottom-0 text-center">
      <h1 class="mb-24 font-bold text-6xl text-white">
        Peru Travel Packages
      </h1>
    </div>
  </header>

  <!--  <section class="mt-12">-->
  <!--    <div class="container">-->
  <!--      <div class="flex md:justify-center w-full gap-3 my-6 overflow-x-scroll focus:touch-pan-x">-->
  <!--        <a :href="'/destinations/'+country.url" class="px-5 py-2 font-medium rounded-full" :class="[countries == country.url ? 'bg-[#D6DD85] text-primary':'bg-gray-50 text-gray-800']" v-for="country in listCountry">{{country.nombre}}</a>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </section>-->

  <section class="my-12">
    <div class="container my-6">
      <div class="grid text-center px-6 text-lg">
        <p><span class="font-semibold">Peru</span> has countless destinations to discover and thousands of activities to
          do in the enchanting land of the Incas. Peru has remained the best tourist and culinary destination worldwide,
          so it is an option that no traveler misses when planning a trip to South America. Another factor that
          characterizes every destination in Peru is its biodiversity and its climatic variety since you can take a
          flight no more than 2 hours from the coast to the Andes and experience a drastic change in landscape,
          temperature, and altitude.</p>
      </div>
    </div>
    <div class="container grid md:grid-cols-2 lg:grid-cols-3 gap-12">
      <a :href="'/destinations/' + route.params.country + '/' + country.url"
        class="p-3 bg-white w-full rounded-xl my-2 shadow-md cursor-pointer" v-for="country in listDestination">
        <div class="relative">
          <img :src="country.imagen" alt="" class="rounded-lg">
        </div>
        <div class="">
          <h3 class="text-left text-lg font-semibold my-3">{{ country.nombre }}</h3>
          <div class="flex gap-2 mt-3 text-sm">
            <img src="/icons/map-location.svg" alt="">
            <span v-html="country.resumen"></span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { usePackageStore } from "~/stores/packages";

const route = useRoute()

const packageStore = usePackageStore()

const listDestination = ref([])

const country = ref('peru')

const listCountry = ref()

const getDestinations = async (url: any) => {
  const res: any = await packageStore.getCountry(url)
  console.log(res)
  listDestination.value = res

  // const response:any = await packageStore.getPais()
  // listCountry.value = response

  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}

onMounted(async () => {
  await getDestinations(route.params.country)
})
</script>