<script lang="ts" setup>
// useHead({
//   script: [ { src: 'https://cdn.wetravel.com/widgets/embed_checkout.js' } ]
// })
// import InquireHome from "~/components/form/InquireHome.vue";

import HeaderDetail from "~/components/page/detail/HeaderDetail.vue";

definePageMeta({
  layout: 'detail',
})

import { NuxtImg } from "#components";
import Departures from "~/components/page/Departures.vue";
import { usePackageStore } from "~/stores/packages";
import HeaderDetail2 from "~/components/page/detail/HeaderDetail2.vue";
import DestinationFull from "~/components/page/detail/DestinationFull.vue";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ItineraryDetail from "~/components/page/detail/ItineraryDetail.vue";

const { $gsap } = useNuxtApp()
$gsap.registerPlugin(ScrollToPlugin);
const packageStore = usePackageStore()

const route = useRoute()

const router = useRouter()

const codeWetravel = ref()
const viewButton = ref(false)


const listPackages = ref([])
const listPackages2 = ref(null)

const itemRefs = ref({})
const showCount = ref({})


const randomColorBorder = ['border-primary', 'border-primary', 'border-secondary', 'border-gray-800', 'border-yellow-500', 'border-indigo-500'];

const getQuote = (item) => {
  router.push("#form-dream-adventure")
  packageStore.hotelDetail = item
}


const items = ref([
  { title: 'Título 1', content: 'Contenido 1' },
  { title: 'Título 2', content: 'Contenido 2' },
  { title: 'Título 3', content: 'Contenido 3' },
  { title: 'Título 4', content: 'Contenido 4' },
  { title: 'Título 5', content: 'Contenido 5' },
  { title: 'Título 6', content: 'Contenido 6' },
  { title: 'Título 7', content: 'Contenido 7' },
]);


const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId.substring(1));
  if (!element) return;

  $gsap.to(window, {
    duration: 1,
    scrollTo: { y: element, offsetY: 155 },
    ease: "power3.inOut"
  });
};


const getPackageItinerary = async (url) => {
  const res = await packageStore.getItinerary(url)
  listPackages.value = res
  listPackages2.value = res[0]
  packageStore.titlePackages = res[0].titulo
  packageStore.imgPackages = res[0].imagen
  packageStore.packageData = res[0]

}


watch(listPackages, (newVal) => {
  if (!newVal || !newVal.length) return

  newVal.forEach(pkg => {
    if (showCount.value[pkg.id] == null) showCount.value[pkg.id] = 4
    if (!itemRefs.value[pkg.id]) itemRefs.value[pkg.id] = []
  })
}, { immediate: true })

const registerItemRef = (el, id) => {
  if (!el) return
  if (!itemRefs.value[id]) itemRefs.value[id] = []
  if (!itemRefs.value[id].includes(el)) itemRefs.value[id].push(el)
}

onMounted(async () => {
  if (process.client) {
    // @ts-ignore
    import('https://static.elfsight.com/platform/platform.js').then((module) => {

    });
  }
  await getPackageItinerary(route.params.itinerary)
  const defaultCount = listPackages.value[0]?.paquete_itinerario.length || 4
  listPackages.value.forEach(p => {
    // @ts-ignore
    showCount.value[p.id] = defaultCount;
  });

  // await nextTick();
  codeWetravel.value = packageStore.packageData?.codigo_f || ''
  viewButton.value = true

})


// onUnmounted(() => {
//   const script = document.querySelector('script[src="https://cdn.wetravel.com/widgets/embed_checkout.js"]');
//   if (script) {
//     script.remove();
//   }
// });

onBeforeRouteLeave(() => {
  packageStore.$reset()
})
</script>
<template>
  <div>
<!--    {{codeWetravel}}-->
<!--        <button-->
<!--            class="btn-primary wtrvl-checkout_button  z-10 "-->
<!--            id="wetravel_button_widget"-->
<!--            data-env="https://www.wetravel.com"-->
<!--            data-version="v0.3"-->
<!--            data-uid="239346"-->
<!--            :data-uuid="''+codeWetravel"-->
<!--            :href="'https://www.wetravel.com/checkout_embed?uuid='+codeWetravel"-->
<!--            ref="targetButton" @click="targetAction">-->
<!--          Book Now-->
<!--        </button>-->

    <section class="">
      <HeaderDetail2 :trip-uuid="`${codeWetravel}`"></HeaderDetail2>
    </section>


<!--    <wetravel-we-travel-checkout-button :trip-uuid="`${codeWetravel}`"></wetravel-we-travel-checkout-button>-->


        <!--  <header class="h-[75vh] relative">-->
        <!--    <img src="/images/banners/banner-lg.png" alt="" class="object-cover w-screen h-full">-->
        <!--    <div class="absolute inset-x-0 bottom-0 text-center hidden md:block">-->
        <!--      <h1 class="mb-24 font-bold text-6xl text-white">-->
        <!--        {{packages.titulo}}-->
        <!--      </h1>-->
        <!--    </div>-->
        <!--  </header>-->

        <!--        <div class="relative">-->
        <!--          <div class="h-[75vh] relative overflow-hidden vimeo-wrapper">-->
        <!--            <iframe-->
        <!--              src="https://player.vimeo.com/video/772468390?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1"-->
        <!--              frameborder="0" allow="autoplay; fullscreen" class=""></iframe>-->
        <!--          </div>-->
        <!--          <div class="absolute inset-x-0 bottom-0 text-center">-->
        <!--            <h1 class="text-white text-xl md:text-4xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] mb-24">{{ packages.titulo-->
        <!--            }}-->
        <!--            </h1>-->
        <!--          </div>-->
        <!--        </div>-->


        <section class="bg-slate-100 py-8 hidden">
          <div class="container grid md:grid-cols-12 gap-12 items-center">
            <div class="md:col-span-9">
              <div class="grid grid-cols-12 md:grid-cols-3">
                <div class="col-span-6 md:col-span-1">
                  <h3 class="text-gray-400 text-xs flex gap-1 font-semibold mb-2 items-center"><img src="/icons/map.svg"
                                                                                                    alt="" class="opacity-70"> TRIP</h3>
                  <h2 class="md:text-2xl font-semibold">{{ listPackages2?.titulo }}</h2>
                </div>
                <!-- <div class="col-span-3 md:col-span-1">
                  <h3 class="text-gray-400 text-xs flex gap-1 font-semibold mb-2 items-center"><img src="/icons/map.svg"
                      alt="" class="opacity-70"> DAYS</h3>
                  <h2 class="md:text-2xl font-semibold">{{ packages.duracion }}D/{{ packages.duracion - 1 }}N</h2>
                </div> -->
                <!-- <div class="col-span-3 md:col-span-1">
                  <h3 class="text-gray-400 text-xs flex gap-1 font-semibold mb-2 items-center"><img src="/icons/map.svg"
                      alt="" class="opacity-70"> FROM</h3>
                  <h2 class="md:text-2xl font-semibold flex items-center gap-2"
                    v-if="getThreeStarPrice(packages.precio_paquetes) > 0">
                    ${{ getThreeStarPrice(packages.precio_paquetes) }}
                    <span class="text-[8px] leading-3">PER <br> PERSON</span>
                  </h2>
                  <h2 class="md:text-2xl font-semibold flex items-center gap-2" v-else>
                    INQUIRE</h2>
                </div> -->
              </div>
            </div>
            <!-- <div class="md:col-span-3 hidden md:block">
              <a href="#form-dream-adventure" class="btn-primary text-center block w-full">Get a Quote</a>
              <button class="btn-ternary mt-2 block w-full" ref="triggerButton"
                @click="clickOtherButton(packages.codigo_f)" v-if="packages.codigo_f">
                Book Now
              </button>
            </div> -->
          </div>
        </section>



        <section class="container  my-4">
          <div class="flex gap-3 justify-center">
            <a href="#review" @click.prevent="scrollToSection('#review')">Review</a>
            <a href="#itinerary" @click.prevent="scrollToSection('#itinerary')">Itinerary</a>
            <a href="#included" @click.prevent="scrollToSection('#included')">Included</a>
            <!--      <a href="#hotels" class="px-5 text-sm py-2  focus:bg-[#D6DD85] focus:text-primary">Hotels</a>-->
            <!--      <a href="included" class="px-5 text-sm py-2  focus:bg-[#D6DD85] focus:text-primary">Hotels</a>-->
            <a href="#prices" @click.prevent="scrollToSection('#prices')">Prices</a>
          </div>
        </section>

        <hr>
        </hr>

        <section class=" mt-12 pb-24">
          <div class="">
            <div class="">



              <!--          <div class="" v-for="(destination, index, array) in uniqueDestinos = paisesUnicos(packages.paquetes_destinos)" :key="destination.id">-->
              <!--            <img :src="destination.imagen" alt="" class="w-full aspect-video rounded-xl shadow-xl">-->

              <!--          </div>-->
              <!--              <div class="grid grid-cols-3 text-xs md:grid-cols-5  gap-6">-->
              <!--                <div v-for="(destination, index) in p = packages.paquetes_destinos" :key="destination.id">-->

              <!--                  <div class="relative">-->
              <!--                    <img :src="destination.destinos.imagen" alt="" class=" h-full object-cover rounded-xl shadow-xl">-->
              <!--                    <div class="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-gray-800 rounded-b-xl">-->
              <!--                      {{ destination.destinos.nombre }}-->
              <!--                    </div>-->
              <!--                  </div>-->

              <!--                  &lt;!&ndash;              <div class="col-span-8 columns-4">&ndash;&gt;-->
              <!--                  &lt;!&ndash;                <div v-for="destino in obtenerDestinosPorPais(pais.id)" :key="destino.id">&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  <img :src="destino.imagen" alt="" class="w-full  rounded-xl shadow-xl">&ndash;&gt;-->
              <!--                  &lt;!&ndash;                  {{destino.nombre}}&ndash;&gt;-->
              <!--                  &lt;!&ndash;                </div>&ndash;&gt;-->
              <!--                  &lt;!&ndash;              </div>&ndash;&gt;-->

              <!--                </div>-->
              <!--              </div>-->




              <div class="container grid grid-cols-12 gap-4 lg:gap-12 my-8">
                <article class="col-span-12 md:col-span-6 lg:col-span-6" id="review">
                  <div class="border-title-secondary"></div>
                  <h2 class="text-3xl font-bold mb-8 mt-2">Overview</h2>
                  <div v-html="listPackages2?.descripcion">
                  </div>
                  <!--                  <div class="grid grid-cols-3 text-xs md:grid-cols-4 mt-12 gap-6">-->
                  <!--                    <div v-for="(destination, index) in p = packages.paquetes_destinos" :key="destination.id">-->

                  <!--                      <div class="relative">-->
                  <!--                        <img :src="destination.destinos.imagen" alt="" class=" h-full object-cover rounded-xl shadow-xl">-->
                  <!--                        <div class="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-gray-800 rounded-b-xl">-->
                  <!--                          {{ destination.destinos.nombre }}-->
                  <!--                        </div>-->
                  <!--                      </div>-->

                  <!--                      &lt;!&ndash;              <div class="col-span-8 columns-4">&ndash;&gt;-->
                  <!--                      &lt;!&ndash;                <div v-for="destino in obtenerDestinosPorPais(pais.id)" :key="destino.id">&ndash;&gt;-->
                  <!--                      &lt;!&ndash;                  <img :src="destino.imagen" alt="" class="w-full  rounded-xl shadow-xl">&ndash;&gt;-->
                  <!--                      &lt;!&ndash;                  {{destino.nombre}}&ndash;&gt;-->
                  <!--                      &lt;!&ndash;                </div>&ndash;&gt;-->
                  <!--                      &lt;!&ndash;              </div>&ndash;&gt;-->

                  <!--                    </div>-->
                  <!--                  </div>-->


                  <img :src="listPackages2?.mapa" alt="" class="rounded-2xl my-12 w-full">

                </article>


                <article class="col-span-12 md:col-span-6 lg:col-span-6 bg-slate-100 p-6 rounded-lg" id="itinerary">
                  <ItineraryDetail
                      :itinerary="listPackages2?.paquete_itinerario || []"
                      :pkg-id="packages?.id || null"
                      :duration="packages?.duracion || 0"
                      :initial-count="34"
                  />
                </article>
              </div>

              <section>
                <DestinationFull></DestinationFull>
              </section>

              <section class="bg-slate-100 py-12">
                <div class="container grid md:grid-cols-12 gap-4 lg:gap-12 my-8">
                  <article class="col-span-6" id="included">
                    <div class="border-title-secondary"></div>
                    <h2 class="text-2xl font-bold mb-8 mt-2">Our Rates includes</h2>
                    <div class="pl-6" v-html="listPackages2?.incluye"></div>
                    <!--          <div class="grid grid-cols-4 gap-6">-->
                    <!--            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">-->
                    <!--              <img src="/icons/star.svg" alt="" class="mb-3 w-6">-->
                    <!--              <p class="text-sm">Private transport Airport - Hotel</p>-->
                    <!--            </div>-->
                    <!--            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">-->
                    <!--              <img src="/icons/star.svg" alt="" class="mb-3 w-6">-->
                    <!--              <p class="text-sm">Profesional <br> Guides</p>-->
                    <!--            </div>-->
                    <!--            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">-->
                    <!--              <img src="/icons/star.svg" alt="" class="mb-3 w-6">-->
                    <!--              <p class="text-sm">Train Ollantaytambo - Machupicchu</p>-->
                    <!--            </div>-->
                    <!--            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">-->
                    <!--              <img src="/icons/star.svg" alt="" class="mb-3 w-6">-->
                    <!--              <p class="text-sm">Helpline 24 hours a day, 7 days a week</p>-->
                    <!--            </div>-->
                    <!--            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">-->
                    <!--              <img src="/icons/star.svg" alt="" class="mb-3 w-6">-->
                    <!--              <p class="text-sm">All The Entrances & Tours</p>-->
                    <!--            </div>-->
                    <!--            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">-->
                    <!--              <img src="/icons/star.svg" alt="" class="mb-3 w-6">-->
                    <!--              <p class="text-sm">41 Nights With 3 Stars hotel</p>-->
                    <!--            </div>-->
                    <!--            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">-->
                    <!--              <img src="/icons/star.svg" alt="" class="mb-3 w-6">-->
                    <!--              <p class="text-sm">Meals As Per Program</p>-->
                    <!--            </div>-->
                    <!--            <div class="rounded-2xl p-4 bg-slate-100 text-gray-800 hover:bg-primary hover:text-white">-->
                    <!--              <img src="/icons/star.svg" alt="" class="mb-3 w-6">-->
                    <!--              <p class="text-sm">Train Service</p>-->
                    <!--            </div>-->
                    <!--          </div>-->
                  </article>

                  <article class="col-span-6">
                    <div class="border-title-secondary"></div>
                    <h2 class="text-2xl font-bold mb-8 mt-2">Not Included</h2>
                    <div class="pl-6" v-html="listPackages2?.noincluye"></div>
                    <!--<ul class="list-inside list-image-[url(/icons/star.svg)]">
                  <li>National & International Flights</li>
                  <li>Travel Insurance</li>
                  <li>Visas</li>
                  <li>Tips</li>
                </ul>-->
                  </article>
                </div>
              </section>
              <!--        <div>
                      <div>
                        <h4>Itinerarios:</h4>
                        <ul>
                          &lt;!&ndash; Muestra solo los elementos hasta el índice en showCount[paquete.id] &ndash;&gt;
                          <li v-for="itinerario in packages.paquete_itinerario.slice(0, showCount[packages.id])" :key="itinerario.id">
                            {{ itinerario.itinerarios.titulo }}
                          </li>
                        </ul>
                        &lt;!&ndash; Botón para expandir/colapsar &ndash;&gt;
            &lt;!&ndash;            <button @click="toggleExpand(packages.id)">
                          {{ showCount[packages.id] >= packages.paquete_itinerario.length ? 'Ver menos' : 'Ver más' }}
                        </button>&ndash;&gt;

                        <button @click="expand(packages.id)" v-if="showCount[packages.id] < packages.paquete_itinerario.length">
                          Ver más
                        </button>
                        &lt;!&ndash; Botón para contraer &ndash;&gt;
                        <button @click="contract(packages.id)" v-if="showCount[packages.id] > 2">
                          Ver menos
                        </button>
                      </div>
                    </div>-->




              <section class="container mt-12" id="prices">
                <Departures></Departures>
              </section>
              <article class="my-12 hidden" id="prices">
                <h2 class="text-2xl font-bold mb-8">Dates & availability</h2>
                <div v-for="(price, index) in listPackages2?.precio_paquetes">
                  <div class="p-4 border-l-8 rounded-l-lg bg-slate-100 grid grid-cols-3 mb-4 items-center"
                       :class="randomColorBorder[index % randomColorBorder.length]" v-if="price.estrellas > 2">
                    <div class="">
                      <div class="text-lg font-bold">Price {{ price.estrellas }} Stars</div>
                      <div class="flex items-center gap-2">
                        <img src="/icons/calendar.svg" alt="">
                        <span class="font-bold text-3xl" v-if="price.precio_t > 0">${{ price.precio_t }}</span>
                        <span class=" text-red-500 italic text-xl" v-else>Inquire</span>
                      </div>
                    </div>
                    <div class="">
                      <p class="font-bold mb-2" v-if="price.estrellas == 3">Per adult in a twin share room <span
                          class="italic text-primary">Best</span></p>
                      <p class="font-bold mb-2" v-if="price.estrellas == 4">Per adult in a twin share room <span
                          class="italic text-secondary">Superior</span></p>
                      <p class="font-bold mb-2" v-if="price.estrellas == 5">Per adult in a twin share room <span
                          class="italic text-gray-800">Luxury</span></p>
                      <p class="text-sm text-slate-400">Price per person based on double room</p>
                    </div>
                    <div class="">
                      <!--              <button type="button" class="btn-secondary w-full mb-3">Get a Quote</button>-->
                      <button type="button" class="btn-primary-outline w-full" v-if="price.estrellas == 3"
                              @click="getQuote(['3'])">Get a Quote</button>
                      <button type="button" class="btn-secondary-outline w-full" v-if="price.estrellas == 4"
                              @click="getQuote(['4'])">Get a Quote</button>
                      <button type="button" class="btn-ternary-outline w-full" v-if="price.estrellas == 5"
                              @click="getQuote(['5'])">Get a Quote</button>
                    </div>
                  </div>
                </div>

                <!--          <div class="p-4 border-l-8 rounded-l-lg bg-slate-100 border-secondary mt-4 grid grid-cols-3 items-center">
                          <div class="">
                            <div class="text-lg font-bold">Superior class</div>
                            <div class="flex items-center gap-2">
                              <img src="/icons/calendar.svg" alt="">
                              <span class="font-bold text-3xl">$7876</span>
                            </div>
                          </div>
                          <div class="">
                            <p class="font-bold mb-2">Per adult in a twin share room</p>
                            <p class="text-sm text-slate-400">Want your own room? <br> From an extra $980</p>
                          </div>
                          <div class="">
                            <button type="button" class="btn-ternary w-full mb-3">Get a Quote</button>
                            <button type="button" class="btn-ternary-outline w-full">Get a Quote</button>
                          </div>
                        </div>-->
              </article>


            </div>
            <!-- <div class="md:col-span-3">
              <div class="bg-[#eef3d3] p-6 rounded-2xl sticky top-10 text-center">
                         <img src="/images/home/operator1.png" alt="" class="mx-auto -mt-16 rounded-full h-24 w-24 object-cover  border border-primary">
                <div class="columns-2 gap-3 space-y-4 floa">
                  <img src="/images/home/operator1.jpg" alt="" class="mt-3 rounded-xl">
                  <img src="/images/home/operator2.jpg" alt="" class="rounded-xl">
                  <img src="/images/home/operator3.jpg" alt="" class="rounded-xl">
                  <img src="/images/home/operator4.jpg" alt="" class="rounded-xl">
                </div>
                <div class="p-6 rounded-2xl bg-white my-4">
                             <h4 class="text-center text-primary font-semibold">¡Hello, I'm Yoa!</h4>
                  <p class="text-sm text-center font-light mt-3">Travel fills our hearts and souls, and what better way
                    to do it than with a tailor-made program created by one of Peru best travel advisors.</p>
                </div>
                         <a href="#form-dream-adventure" class="rounded-lg py-2 w-full px-6 text-white bg-green-500 hover:bg-opacity-95 text-center block duration-300">Get a Quote</a>
                             <button class="btn-ternary animate-bounce w-full" ref="triggerButton" @click="clickOtherButton(packages.codigo_f)" v-if="packages.codigo_f">
                               Book Now
                             </button>
                         <button type="button" class="rounded-lg py-2 w-full px-6 text-primary border border-primary hover:bg-primary hover:text-white duration-300 mt-3">Write Us</button>
              </div>
            </div> -->
          </div>
        </section>

        <section class="py-24 bg-gray-100">
          <div class="container">
            <!--        <div class="elfsight-app-de637865-6596-4396-8bba-ef0f7b50bc9e"></div>-->
            <div class="elfsight-app-0205a974-5637-4472-a992-5e12bca31e38" data-elfsight-app-lazy></div>
          </div>
        </section>

        <!--    <ModalItinerary></ModalItinerary>-->
      </div>

</template>