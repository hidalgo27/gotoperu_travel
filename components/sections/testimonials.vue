<template>
  <div class="container">
    <div class="grid grid-cols-7">

      <div class="col-span-7 overflow-hidden">

        <Carousel :wrap-around="true" :breakpoints="breakpoints" class="">
          <slide :key="1" class="">

            <!-- Aquí puedes poner el contenido de cada slide, por ejemplo: -->
            <div class="mx-3 relative rounded-2xl overflow-hidden">
              <div class="relative h-[400px] overflow-hidden">
                <img src="/images/testimonials/testimonial3.png" alt="" class="h-full object-cover">
                <div class="absolute inset-x-0 top-0 h-full pb-12 flex items-center">
                  <img src="/icons/pay.svg" alt="" class="mx-auto">
                </div>
              </div>
              <div class="absolute inset-x-0 bottom-0 bg-gray-800 rounded-b-2xl px-6 pb-3 pt-2 text-white">
                <img src="/icons/quotes.svg" alt="" class="-mt-9">
                <h3 class="text-sm my-2">Zeeshan B. / Toronto - Canada</h3>
                <p class="text-xs">…I would recommend GotoLatam 100%. You will not regret it!!!</p>
              </div>
            </div>

          </slide>

        </Carousel>
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


const getPackage = async () => {
  const res:any = await packageStore.getPackageOffers()


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