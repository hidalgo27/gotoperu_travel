<template>
  <!--  <footer class="bg-gray-800 py-8 text-secondary text-center text-sm">-->
  <!--&lt;!&ndash;    <nuxt-link to="/"><img src="/images/logos/logo-gotolatam.svg" class="w-[180px] md:w-[240px] mx-auto"></nuxt-link>&ndash;&gt;-->
  <!--    © Copyright 2023 GotoLATAM. All rights reserved.-->
  <!--  </footer>-->
  <footer class="relative bg-gray-800 dark:bg-gray-800 text-gray-500 dark:text-gray-50 pb-16">

    <div class="container pt-12">
      <div class="text-center mb-20  p-6">
<!--        <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">-->
<!--          <img src="https://gotolatam.com/images/logos/logo-gotolatam-white.png" alt="" class="mx-auto">-->
<!--        </a>-->
<!--        <span class="text-white px-3">part of</span>-->
        <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
          <img src="https://gotolatam.com/images/logos/logo-gotoperu-white.png" alt="" class="mx-auto">
        </a>
        <p class="mt-4 font-semibold text-secondary">CONTACT US ALSO VIA EMAIL: info@gotoperu.com</p>
      </div>
      <div class="grid grid-cols-2 gap-4 dark:text-gray-300 md:grid-cols-5 mb-24">
        <div>
          <p class="font-semibold tracking-wide text-secondary mb-6">
            Peru Travel Packages
          </p>

          <ul class="mt-2 space-y-2">
            <li>
              <a href="#top-12" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Top Tours</a>
            </li>
            <li>
              <nuxt-link to="/latam-travel-packages" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Travel Packages</nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-semibold tracking-wide text-secondary mb-6">
            Destinations
          </p>
          <ul class="mt-2 space-y-2">

            <li v-for="country in listPais">
              <nuxt-link :to="'/destinations/peru/'+country.url" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">{{ country.nombre }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-semibold tracking-wide text-secondary mb-6">Peru</p>
          <ul class="mt-2 space-y-2">
            <li>
              <nuxt-link to="/peru-travel-packages" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Peru Travel Packages</nuxt-link>
            </li>
          </ul>
        </div>

        <div>
          <p class="font-semibold tracking-wide text-secondary mb-6">
            Travel Info
          </p>
          <ul class="mt-2 space-y-2">
            <li>
              <!--              <a href="/reviews" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Reviews</a>-->
              <nuxt-link to="/reviews" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Reviews</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">About us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="https://www.tripadvisor.com/Attraction_Review-g294314-d15202262-Reviews-Gotoperu-Cusco_Cusco_Region.html" target="_blank" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Tripadvisor</nuxt-link>
            </li>
            <li>
              <nuxt-link to="https://g.page/r/CaB25zxYNJutEB0/review" target="_blank" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Google Reviews</nuxt-link>
            </li>
            <li>
              <nuxt-link to="https://www.wetravel.com/users/gotoperu" target="_blank" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">WeTravel Reviews</nuxt-link>
            </li>
            <li>
              <nuxt-link to="https://www.trustpilot.com/review/gotoperu.com" target="_blank" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">Trustpilot</nuxt-link>
            </li>
            <!--            <li>-->
            <!--              <a href="#" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">sdsdsdsd</a>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <a href="#" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">sdsdsdsd</a>-->
            <!--            </li>-->
            <!--            <li>-->
            <!--              <a href="#" class="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">sdsdsdsd</a>-->
            <!--            </li>-->
          </ul>
        </div>
        <div>

          <div class="bg-gray-900 p-4 rounded-lg shadow-inner">
            <img src="https://gotolatam.com/images/fiorella.jpg" alt="">
            <a href="#form-dream-adventure" class="btn-primary lg:px-4 block text-center ">Contact Us</a>

          </div>
        </div>
      </div>

      <div class="flex flex-col justify-between pt-5 sm:flex-row">
        <p class="text-sm dark:text-gray-300">
          <span class="font-semibold">PERU MAIN OFFICE:</span>  Avenida El Sol 449 . Cusco , Cusco , Peru | <span class="font-semibold">USA OFFICE:</span>  501 E Kennedy Blvd, Tampa, FL 33602
        </p>
      </div>

      <div class="flex flex-col justify-between pt-5 pb-10 border-t border-gray-500 sm:flex-row">
        <p class="text-sm dark:text-gray-300">
          © Copyright 2023 GotoPeru. All rights reserved.
        </p>
        <!--                        <div class="flex items-center mt-4 space-x-4 sm:mt-0">-->
        <!--                            <a href="/" class="transition-colors duration-300 text-blue-100 hover:text-blue-400">-->
        <!--                                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">-->
        <!--                                        <path-->
        <!--                                            d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"-->
        <!--                                        ></path>-->
        <!--                                    </svg>-->
        <!--                              </a>-->
        <!--                            <a href="/" class="transition-colors duration-300 text-gray-300 hover:text-gray-600">-->
        <!--                                  <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">-->
        <!--                                        <circle cx="15" cy="15" r="4"></circle>-->
        <!--                                        <path-->
        <!--                                            d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"-->
        <!--                                        ></path>-->
        <!--                                    </svg>-->
        <!--                              </a>-->
        <!--                            <a href="/" class="transition-colors duration-300 text-blue-400 hover:text-blue-600">-->
        <!--                                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">-->
        <!--                                        <path-->
        <!--                                            d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"-->
        <!--                                        ></path>-->
        <!--                                    </svg>-->
        <!--                              </a>-->
        <!--                        </div>-->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {usePackageStore} from "~/stores/packages";

const packageStore = usePackageStore()

const listPais = ref([])
const countries = ref('peru')

const getCountry = async () => {
  const res:any = await packageStore.getCountry('peru')

  listPais.value = res
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