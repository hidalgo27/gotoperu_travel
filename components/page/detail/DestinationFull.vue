<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel"
import { usePackageStore } from "~/stores/packages";
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
  console.log(packageData.value.paquetes_destinos)
  return packageData.value.paquetes_destinos.flatMap(destino =>
    destino.destinos.destino_imagen.map(imagen => ({
      id: imagen.id,
      src: imagen.nombre,
      alt: destino.destinos.nombre,
      resumen: destino.destinos.resumen,
    }))
  )
})

const myCarousel = ref(null)
const currentSlide = ref(0)
const goToSlide = (index) => {
  myCarousel.value?.slideTo(index)
}
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

  <div class="flex mx-1 my-4 flex-wrap gap-2 justify-center lg:justify-start">
    <button v-for="(img, index) in imagesList" :key="img.id" @click="goToSlide(index)"
      class="px-4 py-2 border rounded-md transition duration-300 ease-in-out text-xs md:text-base" :class="{
        'btn-ternary !px-4 !text-sm': currentSlide === index,
        'btn-disabled !px-4 !text-sm': currentSlide !== index
      }">
      {{ img.alt }}
    </button>
  </div>
  <div class="   bg-gray-500  overflow-hidden">
    <carousel ref="myCarousel" v-model="currentSlide" :wrap-around="true" :breakpoints="breakpoints">
      <slide v-for="imagen in imagesList" :key="imagen.id">
        <div class="relative w-full">
          <nuxt-img :src="imagen.src" :alt="imagen.alt" :placeholder="[50, 25, 75, 5]"
            class="object-cover h-[700px] w-full" />
          <div class="absolute left-0 top-0 p-8 text-white text-start ">
            <div class="backdrop-blur-sm bg-black/50 text-2xl p-4 rounded-md">
              <h2 class="text-3xl font-bold mb-2">{{ imagen.alt }}</h2>
              <p class="text-base max-w-md" v-html="imagen.resumen"></p>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>
