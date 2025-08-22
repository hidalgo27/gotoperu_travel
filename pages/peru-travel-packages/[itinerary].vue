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
  listPackages.value = res || []
  listPackages2.value = res[0] || {}
  console.log(listPackages2.value)
  packageStore.titlePackages = res[0].titulo || ''
  packageStore.imgPackages = res[0].imagen || ''
  packageStore.packageData = res[0] || {}
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
        <a href="#overview" @click.prevent="scrollToSection('#overview')">Overview</a>
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



          <!-- <div class="" v-for="(destination, index, array) in uniqueDestinos = paisesUnicos(packages.paquetes_destinos)"
            :key="destination.id">
            <img :src="destination.imagen" alt="" class="w-full aspect-video rounded-xl shadow-xl">

          </div> -->





          <div class="container grid grid-cols-12 gap-4 lg:gap-12 my-8">
            <article class="col-span-12 md:col-span-6 lg:col-span-8 order-2 md:order-1" id="overview">
              <div class="grid grid-cols-3 text-xs md:grid-cols-4  gap-6">
                <div v-if="listPackages2?.paquetes_destinos"
                  v-for="(destination, index) in listPackages2.paquetes_destinos" :key="destination.id">

                  <div class="relative">
                    <img :src="destination.destinos.imagen" alt="" class=" h-full object-cover rounded-xl shadow-xl">
                    <div class="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-gray-800 rounded-b-xl">
                      {{ destination.destinos.nombre }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 text-sm text-gray-700 py-6">

                <!-- Group Size -->
                <div class="flex items-center gap-2" v-if="listPackages2?.group_size">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                  <div>
                    <p class="font-bold">Group Size:</p>
                    <p>{{ listPackages2?.group_size }}</p>
                  </div>
                </div>

                <!-- Max Altitude -->
                <div class="flex items-center gap-2" v-if="listPackages2?.altitud">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>

                  <div>
                    <p class="font-bold">Max Altitude:</p>
                    <p>{{ listPackages2?.altitud }}</p>
                  </div>
                </div>

                <!-- Difficulty -->
                <!-- <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                  <div>
                    <p class="font-bold">Difficulty:</p>
                    <p>Mild</p>
                  </div>
                </div> -->

                <!-- Duration -->
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <div>
                    <p class="font-bold">Duration:</p>
                    <p>{{ listPackages2?.duracion || 0 }} Days</p>
                  </div>
                </div>
              </div>
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
              <article class=" bg-slate-100 p-6 rounded-lg" id="itinerary">
                <ItineraryDetail :itinerary="listPackages2?.paquete_itinerario || []"
                  :pkg-id="listPackages2?.id || null" :duration="listPackages2?.duracion || 0" :initial-count="34" />
              </article>
            </article>


            <!-- <article class="col-span-12 md:col-span-6 lg:col-span-6 bg-slate-100 p-6 rounded-lg" id="itinerary">
              <ItineraryDetail :itinerary="listPackages2?.paquete_itinerario || []" :pkg-id="listPackages2?.id || null"
                :duration="listPackages2?.duracion || 0" :initial-count="34" />
            </article> -->
            <div class="col-span-12 md:col-span-6 lg:col-span-4 order-1 md:order-2">
              <div class="border-primary border py-12 px-6  rounded-lg sticky top-6">

                <!-- Top seller badge -->
                <div class="absolute -top-3 left-5 z-10 bg-gray-800 text-white px-2 py-1 rounded text-xs font-bold">
                  TOP SELLER
                </div>

                <!-- Price -->
                <div class="mt-3 text-center">
                  <div v-if="listPackages2?.precio_paquetes?.find(p => p.estrellas === 3)">
                    <sup class="text-gray-500">From</sup>
                    <div class="text-5xl font-extrabold flex text-gray-800 items-baseline gap-1 justify-center">
                      <span>$</span>
                      <span>{{listPackages2?.precio_paquetes?.find(p => p.estrellas === 3)?.precio_d}}</span>
                      <span class="text-sm text-gray-500">USD</span>
                    </div>
                  </div>
                  <div class="font-bold text-red-500 flex items-baseline gap-1" v-else>
                    Price not available
                  </div>

                  <p class="mt-3 text-sm text-gray-500 font-extrabold">
                    Trip Code: <span class="font-medium">{{ listPackages2?.codigo }}</span>
                  </p>
                </div>

                <ul class="mt-4 text-left text-sm space-y-2 text-gray-700 border-t border-primary py-2">
                  <li class="flex gap-2 items-center">
                    <span class="text-orange-500 text-lg">❶</span> Trips Managed by Local Experts
                  </li>
                  <li class="flex gap-2 items-center">
                    <span class="text-orange-500 text-lg">❷</span> Easy, Fast, Risk-Free Bookings
                  </li>
                  <li class="flex gap-2 items-center">
                    <span class="text-orange-500 text-lg">❸</span> Personalized Small Group Tours
                  </li>
                  <li class="flex gap-2 items-center">
                    <span class="text-orange-500 text-lg">❹</span> Great Value for Money
                  </li>
                  <li class="flex gap-2 items-center">
                    <span class="text-orange-500 text-lg">❺</span> Unique, Customized Itineraries
                  </li>
                  <li class="flex gap-2 items-center">
                    <span class="text-orange-500 text-lg">❻</span> Best Local Certified Guides
                  </li>
                </ul>

                <!-- Reviews -->
                <!--        <div class="flex items-center gap-1 text-gray-400 mt-3">-->
                <!--          <span>⭐️⭐️☆☆☆</span>-->
                <!--          <span class="text-sm">No reviews</span>-->
                <!--        </div>-->

                <div class="text-left">
                  <div class="elfsight-app-19a38dd6-cb79-4354-ab2e-57709a6ad7e7" data-elfsight-app-lazy></div>
                </div>

                <!-- Book Now Button -->
                <!--            <button class="btn-primary  w-full mt-3">-->
                <!--              Book now-->
                <!--            </button>-->

                <div class="" v-if="codeWetravel">
                  <wetravel-we-travel-checkout-button
                    :trip-uuid="`${codeWetravel}`"></wetravel-we-travel-checkout-button>
                </div>
                <!-- Wishlist button -->
                <button @click="scrollToSection('#form-dream-adventure')"
                  class="rounded-md py-3 px-5 text-gray-800 border bg-white hover:bg-gray-200 hover:text-gray-500 duration-300 w-full mt-3">
                  Inquire now
                </button>

                <!--         Special Offers-->
                <div class="mt-4 border-t text-xs pt-3">
                  <p>Contact our travel advisor to use this itinerary (or others) as a base to design together your
                    perfect
                    peruvian adventure!</p>
                  <p><span class="font-semibold text-secondary">For Example:</span> add one day / reduce the program
                    lenght
                    /
                    upgrades hotels / add all meals / upgrade to private tours</p>
                </div>

                <span class="pt-3 font-semibold text-center flex justify-center">You need assistance?</span>
                <a href="https://api.whatsapp.com/send?phone=51912668025" target="_blank"
                  class="flex items-center justify-center text-green-500 font-semibold pt-3">
                  <nuxt-img src="/icons/whatsapp.png" alt="WhatsApp" class="w-6" /> +51 912 668 025
                </a>
              </div>
            </div>
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