<script setup lang="ts">
import {Carousel, Slide} from "vue3-carousel"
import {usePackageStore} from "~/stores/packages";
const packageStore = usePackageStore()
const { packageData } = storeToRefs(packageStore)
const breakpoints = {
  // 500px and up
  350: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
  // 700px and up
  700: {
    itemsToShow: 2.2,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
}


const imagesList = computed(() => {
  if (!packageData.value) return []

  return packageData.value.paquetes_destinos.flatMap(destino =>
      destino.destinos.destino_imagen.map(imagen => ({
        id: imagen.id,
        src: imagen.nombre,
        alt: destino.destinos.nombre
      }))
  )
})



</script>

<template>
<!--  <div class="   bg-gray-500  overflow-hidden">-->

<!--        <div class=" w-full" v-for="imagen in imagesList" :key="imagen.id" >-->
<!--          <div class="relative" v-if="imagen.alt === 'Cusco'">-->
<!--            <nuxt-img-->
<!--                :src="imagen.src"-->
<!--                :alt="imagen.alt"-->
<!--                :placeholder="[50, 25, 75, 5]"-->
<!--                class="object-cover h-[700px] w-full"-->
<!--            />-->
<!--            <div class="absolute top-0 max-a p-12 text-white font-bold text-2xl ">-->
<!--              {{imagen.alt}}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->


<!--  </div>-->
    <div class="   bg-gray-500  overflow-hidden">
      <carousel :wrap-around="true" :breakpoints="breakpoints">
        <slide v-for="imagen in imagesList" :key="imagen.id">
          <div class="relative w-full">
            <nuxt-img
                :src="imagen.src"
                :alt="imagen.alt"
                :placeholder="[50, 25, 75, 5]"
                class="object-cover h-[700px] w-full"
            />
            <div class="absolute top-0 max-a p-12 text-white font-bold text-2xl ">
              {{imagen.alt}}
            </div>
          </div>
        </slide>
      </carousel>
    </div>

</template>
