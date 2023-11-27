<template>
  <div>
    <button
        class="btn-primary wtrvl-checkout_button  z-10 hidden"
        id="wetravel_button_widget"
        data-env="https://www.wetravel.com"
        data-version="v0.3"
        data-uid="239346"
        :data-uuid="codeWetravel"
        :href="'https://www.wetravel.com/checkout_embed?uuid='+codeWetravel"
        ref="targetButton" @click="targetAction">
      Book Now
    </button>
    
    <div v-for="packages in listPackages">


      <!--  <header class="h-[75vh] relative">-->
      <!--    <img src="/images/banners/banner-lg.png" alt="" class="object-cover w-screen h-full">-->
      <!--    <div class="absolute inset-x-0 bottom-0 text-center hidden md:block">-->
      <!--      <h1 class="mb-24 font-bold text-6xl text-white">-->
      <!--        {{packages.titulo}}-->
      <!--      </h1>-->
      <!--    </div>-->
      <!--  </header>-->

      <div class="relative">
        <div class="h-[75vh] relative overflow-hidden vimeo-wrapper">
          <iframe src="https://player.vimeo.com/video/772468390?background=1&autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1" frameborder="0" allow="autoplay; fullscreen" class=""></iframe>
        </div>
        <div class="absolute inset-x-0 bottom-0 text-center">
          <h1 class="text-white text-xl md:text-4xl drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] mb-24">{{packages.titulo}}</h1>
        </div>
      </div>

      <section class="bg-slate-100 py-8">
        <div class="container grid md:grid-cols-12 gap-12 items-center">
          <div class="md:col-span-9">
            <div class="grid grid-cols-12 md:grid-cols-3">
              <div class="col-span-6 md:col-span-1">
                <h3 class="text-gray-400 text-xs flex gap-1 font-semibold mb-2 items-center"><img src="/icons/map.svg" alt="" class="opacity-70"> TRIP</h3>
                <h2 class="md:text-2xl font-semibold">{{packages.titulo}}</h2>
              </div>
              <div class="col-span-3 md:col-span-1">
                <h3 class="text-gray-400 text-xs flex gap-1 font-semibold mb-2 items-center"><img src="/icons/map.svg" alt="" class="opacity-70"> DAYS</h3>
                <h2 class="md:text-2xl font-semibold">{{ packages.duracion }}D/{{ packages.duracion - 1 }}N</h2>
              </div>
              <div class="col-span-3 md:col-span-1">
                <h3 class="text-gray-400 text-xs flex gap-1 font-semibold mb-2 items-center"><img src="/icons/map.svg" alt="" class="opacity-70"> FROM</h3>
                <h2 class="md:text-2xl font-semibold flex items-center gap-2" v-if="getThreeStarPrice(packages.precio_paquetes) > 0">
                  ${{ getThreeStarPrice(packages.precio_paquetes) }}
                  <span class="text-[8px] leading-3">PER <br> PERSON</span></h2>
                <h2 class="md:text-2xl font-semibold flex items-center gap-2" v-else>
                  INQUIRE</h2>
              </div>
            </div>
          </div>
          <div class="md:col-span-3 hidden md:block">
            <a href="#form-dream-adventure" class="btn-primary text-center block w-full">Get a Quote</a>
            <button class="btn-ternary mt-2 block w-full" ref="triggerButton" @click="clickOtherButton(packages.codigo_f)" v-if="packages.codigo_f">
              Book Now
            </button>
          </div>
        </div>
      </section>
      <section class="container">
        <div class="flex gap-3 my-12 overflow-x-scroll focus:touch-pan-x">
          <a href="#review"  class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Review</a>
          <a href="#itinerary" class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary" >Itinerary</a>
          <a href="#included" class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Included</a>
          <!--      <a href="#hotels" class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Hotels</a>-->
          <!--      <a href="included" class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Hotels</a>-->
          <a href="#prices" class="px-5 text-sm py-2 bg-slate-100 text-gray-800 font-medium rounded-full focus:bg-[#D6DD85] focus:text-primary">Prices</a>
        </div>
      </section>

      <section class="shadow pb-24">
        <div class="container grid md:grid-cols-12 gap-12">
          <div class="md:col-span-9">
            <!--        <img src="/images/banners/map.png" alt="" class="rounded-2xl w-full">-->


            <!--          <div class="" v-for="(destination, index, array) in uniqueDestinos = paisesUnicos(packages.paquetes_destinos)" :key="destination.id">-->
            <!--            <img :src="destination.imagen" alt="" class="w-full aspect-video rounded-xl shadow-xl">-->

            <!--          </div>-->
            <div class="grid md:grid-cols-3 gap-6">
              <div v-for="(destination, index) in p = packages.paquetes_destinos" :key="destination.id">

                <div class="relative">
                  <img :src="destination.destinos.imagen" alt="" class=" h-full object-cover rounded-xl shadow-xl">
                  <div class="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-gray-800 rounded-b-xl">
                    {{destination.destinos.nombre}}
                  </div>
                </div>

                <!--              <div class="col-span-8 columns-4">-->
                <!--                <div v-for="destino in obtenerDestinosPorPais(pais.id)" :key="destino.id">-->
                <!--                  <img :src="destino.imagen" alt="" class="w-full  rounded-xl shadow-xl">-->
                <!--                  {{destino.nombre}}-->
                <!--                </div>-->
                <!--              </div>-->

              </div>
            </div>



            <div class="grid my-8 space-y-2">
              <div class="flex gap-2">
                <img src="/icons/location.svg" alt=""> <span class="font-bold">Start</span> Lima, Peru
              </div>
              <!--          <div class="flex gap-2">-->
              <!--            <img src="/icons/location.svg" alt=""> <span class="font-bold">Finish</span> La Paz, Bolivia-->
              <!--          </div>-->
              <div class="flex gap-2">
                <img src="/icons/location.svg" alt="">
                <span class="font-bold">Destinations</span>


                <span class="badged-sm" :class="randomColorClasses[index % randomColorClasses.length]" v-for="(destination, index) in p = packages.paquetes_destinos" :key="destination.id">
              {{destination.destinos.nombre}}
            </span>

                <!--            <div class="flex flex-nowrap overflow-x-auto">-->
                <!--              <div class="flex text-xs font-semibold gap-1 items-center" v-for="(destination, index) in p = packages.paquetes_destinos" :key="destination.id">-->
                <!--&lt;!&ndash;                <span class="truncate" :class="[destination.destinos.nombre.toLowerCase() == destino.replace('-',' ') ? 'bg-[#D6DD85] rounded-full px-2 text-primary':'bg-gray-50 text-gray-800']">{{destination.destinos.nombre}}</span>&ndash;&gt;-->
                <!--                {{destination.destinos.nombre}}-->
                <!--                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-400" v-if="index < p.length - 1">-->
                <!--                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />-->
                <!--                </svg>-->
                <!--              </div>-->
                <!--            </div>-->

                <!--            <span class="badged-sm bg-primary">Perú</span>
                            <span class="badged-sm bg-secondary">Bolivia</span>
                            <span class="badged-sm bg-primary">Chile</span>
                            <span class="badged-sm bg-secondary">Brasil</span>
                            <span class="badged-sm bg-gray-800">Colombia</span>-->
              </div>

              <!--          <div v-for="(destinos, pais) in getGroupedByCountry(packages.paquetes_destinos)" :key="pais">
                          <p :class="randomColorClasses[destinos[0].id % randomColorClasses.length]">
                            {{ pais }}
                          </p>
                          <ul>
                            <li v-for="destino in destinos" :key="destino.id">
                              {{ destino.nombre }}
                            </li>
                          </ul>
                        </div>-->
              <div class="flex gap-2">
                <img src="/icons/search.svg" alt=""> <span class="font-bold">Code</span> {{ packages.codigo }}
              </div>
            </div>

            <article>
              <h2 class="text-2xl font-bold mb-8">Overview</h2>
              <div v-html="packages.descripcion">
              </div>
            </article>

            <article class="my-12" id="itinerary">
              <h2 class="text-2xl font-bold mb-8">Itinerary</h2>
              <div class="">

                <div class="w-full mx-auto relative">

                  <div v-for="(itinerary, index) in packages.paquete_itinerario.slice(0, showCount[packages.id])" :key="itinerary.id" class="flex item">
                    <div class="relative w-20 text-center gap-12">
                      <div class="absolute -z-10 left-1/2 top-0 bottom-0 border-l-2 border-dashed border-slate-300"></div>
                      <div class="bg-white py-2  font-bold text-xs" :class="[currentItem == index ? 'text-secondary' : 'text-slate-500']">DAY {{index + 1}}</div>
                    </div>
                    <div class="space-y-2 w-full " :class="[index + 1 == items.length ? 'border-y' : 'border-t']">
                      <div>
                        <button @click="toggleItem(index)" class="w-full text-left p-4 flex justify-between items-center hover:bg-gray-200">
                          {{ itinerary.itinerarios.titulo }}
                          <span>
                        {{ currentItem == index ? '-' : '+' }}
                      </span>
                        </button>
                        <transition name="bottom">
                          <div v-if="currentItem === index" class="p-4" v-html="itinerary.itinerarios.resumen">

                          </div>
                        </transition>
                      </div>
                    </div>
                  </div>

                  <button @click="expand(packages.id)" v-if="showCount[packages.id] < packages.paquete_itinerario.length" class="mt-4 p-4 bg-[#ffeece] mt-2 font-bold text-secondary rounded w-full hover:bg-secondary hover:text-white">
                    View More
                  </button>

                  <button @click="contract(packages.id)" v-if="showCount[packages.id] > 4" class="px-4 py-2 w-full mt-2 rounded text-gray-400 hover:text-primary">
                    View Less
                  </button>

                </div>
              </div>

            </article>

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

            <article id="included">
              <h2 class="text-2xl font-bold mb-8">Our Rates includes</h2>
              <div v-html="packages.incluye"></div>
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

            <article class="my-12">
              <h2 class="text-2xl font-bold mb-8">Not Included</h2>
              <div v-html="packages.noincluye"></div>
              <!--<ul class="list-inside list-image-[url(/icons/star.svg)]">
                <li>National & International Flights</li>
                <li>Travel Insurance</li>
                <li>Visas</li>
                <li>Tips</li>
              </ul>-->
            </article>

            <article class="my-12 hidden">
              <h2 class="text-2xl font-bold mb-8">Hotels considered</h2>
              <div class="flex justify-between">
                <div class="flex items-center gap-2">
                  <img src="/icons/hotel.svg" alt=""> Overnight
                </div>
                <div class="flex gap-2 items-center">
                  Category:
                  <div class="relative col-span-2">
                    <input type="text" class="is-input-ico rounded-right-0 border-right-0 peer" placeholder=" " @focus="openPopover(1)" @blur="closePopover(1)">
                    <label class="is-input-ico-label">Choose Category</label>
                    <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <img src="/icons/search.svg" alt="">
                    </div>
                    <div class="absolute z-10 inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                    <transition name="top" appear>
                      <div class="box-option-select" v-show="viewPopover == 1" @mouseover="mouseIsOverPopover = true" @mouseleave="mouseIsOverPopover = false">
                        <div class="grid items-start text-left">
                          <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer flex gap-2">
                            <img src="/icons/star.svg" alt="">
                            <img src="/icons/star.svg" alt="">
                          </div>
                          <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer flex gap-2">
                            <img src="/icons/star.svg" alt="">
                            <img src="/icons/star.svg" alt="">
                            <img src="/icons/star.svg" alt="">
                          </div>
                          <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer flex gap-2">
                            <img src="/icons/star.svg" alt="">
                            <img src="/icons/star.svg" alt="">
                            <img src="/icons/star.svg" alt="">
                            <img src="/icons/star.svg" alt="">
                          </div>
                          <div class="py-2 px-3 hover:bg-secondary hover:text-white cursor-pointer flex gap-2">
                            <img src="/icons/star.svg" alt="">
                            <img src="/icons/star.svg" alt="">
                            <img src="/icons/star.svg" alt="">
                            <img src="/icons/star.svg" alt="">
                            <img src="/icons/star.svg" alt="">
                          </div>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
            </article>

            <article class="hidden" id="prices">
              <div class="grid grid-cols-12 bg-gray-800 rounded-t-xl py-3 text-white divide-x items-center">
                <div class="col-span-2 text-center pl-6">
                  Nights
                </div>
                <div class="col-span-4 pl-6">
                  <div>
                    City
                  </div>
                </div>
                <div class="col-span-6 pl-6">
                  <div>
                    Hotel
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-12 py-2 bg-slate-100 divide-x divide-slate-300 items-center my-2">
                <div class="col-span-2 pl-6 leading-none text-primary text-center">
                  <span class="text-xs">Nights</span><br>
                  <span class="text-2xl font-bold">04</span>
                </div>
                <div class="col-span-4 pl-6">
                  Quito
                </div>
                <div class="col-span-6 pl-6">
                  Vieja Cuba
                </div>
              </div>

              <div class="grid grid-cols-12 py-2 bg-slate-100 divide-x divide-slate-300 items-center my-2">
                <div class="col-span-2 pl-6 leading-none text-primary text-center">
                  <span class="text-xs">Nights</span><br>
                  <span class="text-2xl font-bold">04</span>
                </div>
                <div class="col-span-4 pl-6">
                  Quito
                </div>
                <div class="col-span-6 pl-6">
                  Vieja Cuba
                </div>
              </div>

              <button @click="loadMore" v-if="canLoadMore" class=" p-4 bg-[#eff2d6] font-bold text-primary rounded w-full hover:bg-primary hover:text-white">
                View More
              </button>

              <button @click="loadLess" v-if="canLoadLess" class="px-4 py-2 w-full mt-2 rounded text-gray-400 hover:text-primary">
                View Less
              </button>

            </article>

            <article class="my-12" id="prices">
              <h2 class="text-2xl font-bold mb-8">Dates & availability</h2>
              <div v-for="(price, index) in packages.precio_paquetes">
                <div class="p-4 border-l-8 rounded-l-lg bg-slate-100 grid grid-cols-3 mb-4 items-center" :class="randomColorBorder[index % randomColorBorder.length]" v-if="price.estrellas > 2">
                  <div class="">
                    <div class="text-lg font-bold">Price {{price.estrellas}} Stars</div>
                    <div class="flex items-center gap-2">
                      <img src="/icons/calendar.svg" alt="">
                      <span class="font-bold text-3xl" v-if="price.precio_t > 0">${{ price.precio_t }}</span>
                      <span class=" text-red-500 italic text-xl" v-else>Inquire</span>
                    </div>
                  </div>
                  <div class="">
                    <p class="font-bold mb-2" v-if="price.estrellas == 3">Per adult in a twin share room <span class="italic text-primary">Best</span></p>
                    <p class="font-bold mb-2" v-if="price.estrellas == 4">Per adult in a twin share room <span class="italic text-secondary">Superior</span></p>
                    <p class="font-bold mb-2" v-if="price.estrellas == 5">Per adult in a twin share room <span class="italic text-gray-800">Luxury</span></p>
                    <p class="text-sm text-slate-400">Price per person based on double room</p>
                  </div>
                  <div class="">
                    <!--              <button type="button" class="btn-secondary w-full mb-3">Get a Quote</button>-->
                    <button type="button" class="btn-primary-outline w-full" v-if="price.estrellas == 3" @click="getQuote(['3'])">Get a Quote</button>
                    <button type="button" class="btn-secondary-outline w-full" v-if="price.estrellas == 4" @click="getQuote(['4'])">Get a Quote</button>
                    <button type="button" class="btn-ternary-outline w-full" v-if="price.estrellas == 5" @click="getQuote(['5'])">Get a Quote</button>
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
          <div class="md:col-span-3">
            <div class="bg-[#eef3d3] p-6 rounded-2xl sticky top-10 text-center">
              <!--          <img src="/images/home/operator1.png" alt="" class="mx-auto -mt-16 rounded-full h-24 w-24 object-cover  border border-primary">-->
              <div class="columns-2 gap-3 space-y-4 floa">
                <img src="/images/home/operator1.jpg" alt="" class="mt-3 rounded-xl">
                <img src="/images/home/operator2.jpg" alt="" class="rounded-xl">
                <img src="/images/home/operator3.jpg" alt="" class="rounded-xl">
                <img src="/images/home/operator4.jpg" alt="" class="rounded-xl">
              </div>
              <div class="p-6 rounded-2xl bg-white my-4">
                <!--            <h4 class="text-center text-primary font-semibold">¡Hello, I'm Yoa!</h4>-->
                <p class="text-sm text-center font-light mt-3">Travel fills our hearts and souls, and what better way to do it than with a tailor-made program created by one of LATAM's best travel advisors.</p>
              </div>
              <!--          <a href="#form-dream-adventure" class="rounded-lg py-2 w-full px-6 text-white bg-green-500 hover:bg-opacity-95 text-center block duration-300">Get a Quote</a>-->
              <button class="btn-ternary animate-bounce w-full" ref="triggerButton" @click="clickOtherButton(packages.codigo_f)" v-if="packages.codigo_f">
                Book Now
              </button>
              <!--          <button type="button" class="rounded-lg py-2 w-full px-6 text-primary border border-primary hover:bg-primary hover:text-white duration-300 mt-3">Write Us</button>-->
            </div>
          </div>
        </div>
      </section>

      <!--    <ModalItinerary></ModalItinerary>-->
    </div>

  </div>
</template>

<script lang="ts" setup>
// useHead({
//   script: [ { src: 'https://cdn.wetravel.com/widgets/embed_checkout.js' } ]
// })
// import InquireHome from "~/components/form/InquireHome.vue";
useHead({
  script: [
    {
      src: 'https://cdn.wetravel.com/widgets/embed_checkout.js',
      async: true,
    },
  ],
})
definePageMeta({
  layout: 'detail',
})

import {usePackageStore} from "~/stores/packages";

const triggerButton = ref(null);
const targetButton = ref(null);

const packageStore = usePackageStore()

const route = useRoute()

const router = useRouter()

const codeWetravel = ref()
const viewButton = ref(false)


const listPackages = ref([])

const showCount = ref({})

const currentItem = ref(null); //
const viewPopover = ref()// índice del ítem actualmente abierto

const randomColorClasses = ['bg-primary', 'bg-secondary', 'bg-gray-800', 'bg-yellow-500', 'bg-indigo-500'];

const randomColorBorder = ['border-primary','border-primary', 'border-secondary', 'border-gray-800', 'border-yellow-500', 'border-indigo-500'];

const clickOtherButton = async (item:any) => {
  // @ts-ignore
  codeWetravel.value = item
  await nextTick();
  targetButton.value.click();
};

const targetAction = () => {
  console.log('Botón objetivo clickeado!');
};

const getQuote = (item) => {
  router.push("#form-dream-adventure")
  packageStore.hotelDetail = item
}

function openPopover(val){
  if (val){
    viewPopover.value = val
  }else {
    viewPopover.value = 0
  }
}
function closePopover(val){
  setTimeout(() => {
    if (mouseIsOverPopover) {
      if (val){
        viewPopover.value = 0
      }
    }
  }, 100);

}


const mouseIsOverPopover = ref(false)

const items = ref([
  { title: 'Título 1', content: 'Contenido 1' },
  { title: 'Título 2', content: 'Contenido 2' },
  { title: 'Título 3', content: 'Contenido 3' },
  { title: 'Título 4', content: 'Contenido 4' },
  { title: 'Título 5', content: 'Contenido 5' },
  { title: 'Título 6', content: 'Contenido 6' },
  { title: 'Título 7', content: 'Contenido 7' },
]);
const toggleItem = (index) => {
  if (currentItem.value === index) {
    currentItem.value = null;
  } else {
    currentItem.value = index;
  }
};

const displayedItems = ref(listPackages.value.slice(0, 2));

const loadMore = () => {
  let nextItems = items.value.slice(displayedItems.value.length, displayedItems.value.length + 2);
  // @ts-ignore
  displayedItems.value = [...displayedItems.value, ...nextItems];
};
const loadLess = () => {
  displayedItems.value = displayedItems.value.slice(0, displayedItems.value.length - 2);
};

const canLoadLess = computed(() => displayedItems.value.length > 2);

const canLoadMore = computed(() => items.value.length > displayedItems.value.length);


const getPackageItinerary = async (url) => {
  const res = await packageStore.getItinerary(url)
  listPackages.value = res

  packageStore.titlePackages = res[0].titulo

  // if (res.token) {
  //   policyStore['tokenLogin'] = res.token
  //   loadingUser.value = false
  // }
}


const getThreeStarPrice = (arr:any) => {
  const price = arr.find((priceInfo: { estrellas: number; }) => priceInfo.estrellas === 3);
  return price ? price.precio_d : 'No disponible';
}

/*const capitalizeFirstLetter = (string) => {
  return string
      ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
      : '';
};*/

const getGroupedByCountry = (arr) => {
  const grouped = {};
  for (const paqueteDestino of arr) {
    const { destinos } = paqueteDestino;
    const { pais, nombre, id } = destinos;
    // @ts-ignore
    if (!grouped[pais]) {
      // @ts-ignore
      grouped[pais] = [];
    }
    // @ts-ignore
    grouped[pais].push({ nombre, id });
  }
  return grouped;
};

// const paisesUnicos = (destinos:any) => {
//   const paisesVistos = new Set();
//   return destinos.filter((destino: { destinos: { pais: any; }; }) => {
//     const pais = destino.destinos.pais;
//     if (!paisesVistos.has(pais.id)) {
//       paisesVistos.add(pais.id);
//       return true;
//     }
//     return false;
//   }).map((destino: { destinos: { pais: any; }; }) => destino.destinos.pais);
// };


// const obtenerDestinosPorPais = (paisId:number) => {
//   const destinos: any[] = [];
//   listPackages.value.forEach(paquete => {
//     paquete.paquetes_destinos.forEach((destino: { destinos: { pais: { id: number; }; }; }) => {
//       if (destino.destinos.pais.id === paisId) {
//         destinos.push(destino.destinos);
//       }
//     });
//   });
//   return destinos;
// };


const expand = (id) => {
  // @ts-ignore
  const totalLength = listPackages.value.find(p => p.id === id).paquete_itinerario.length;
  // @ts-ignore
  showCount.value[id] = Math.min(showCount.value[id] + 8, totalLength); // Aumentar de 2 en 2
};


const contract = (id) => {
  // @ts-ignore
  showCount.value[id] = Math.max(4, showCount.value[id] - 4); // Reducir de 2 en 2, mínimo 2
};


// const loadScript = () => {
//   const scriptExists = document.querySelector('script[src="https://cdn.wetravel.com/widgets/embed_checkout.js"]') !== null;
//   if (!scriptExists) {
//     const script = document.createElement('script');
//     script.src = 'https://cdn.wetravel.com/widgets/embed_checkout.js';
//     script.type = 'text/javascript';
//     script.async = true;
//     document.head.appendChild(script);
//   }
// }


onMounted(async () => {

  // loadScript()
  // console.log(route)
  await getPackageItinerary(route.params.itinerary)
  listPackages.value.forEach(p => {
    // @ts-ignore
    showCount.value[p.id] = 8;
  });

  // await nextTick();
  codeWetravel.value = packageStore.code_w
  viewButton.value = true

})


// onUnmounted(() => {
//   const script = document.querySelector('script[src="https://cdn.wetravel.com/widgets/embed_checkout.js"]');
//   if (script) {
//     script.remove();
//   }
// });


</script>