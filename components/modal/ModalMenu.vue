<template>
  <section class="modal-box">
    <transition name="fade" appear>
      <div class="modal-overlay"
           v-show="packageStore.showModalMenu"
           @click="packageStore.showModalMenu = false"></div>
    </transition>
    <transition name="left" appear>
      <div class="modal overflow-y-scroll"
           role="dialog"
           v-show="packageStore.showModalMenu"
      >
        <div class="mb-3" @click="packageStore.showModalMenu = false">
          X Cerrar
        </div>
        <nav class="divide-y">
          <nuxt-link to="/destinations/countries" @click="statusModal" class="flex py-4 gap-2 items-center"><img src="/icons/location.svg"> Destinations</nuxt-link>
          <nuxt-link to="/peru-travel-packages" @click="statusModal" class="flex py-4 gap-2 items-center"><img src="/icons/map.svg"> Peru Travel Packages</nuxt-link>
          <nuxt-link to="/#top-12" @click="statusModal" class="flex py-4 gap-2 items-center"><img src="/icons/star.svg"> Top tours</nuxt-link>
          <nuxt-link to="/reviews" @click="statusModal" class="flex py-4 gap-2 items-center"><img src="/icons/search.svg"> Reviews</nuxt-link>
          <nuxt-link to="/about" @click="statusModal" class="flex py-4 gap-2 items-center"><img src="/icons/user.svg"> About us</nuxt-link>
        </nav>
      </div>
    </transition>
  </section>
</template>
<script lang="ts" setup>
import {usePackageStore} from "~/stores/packages";
import Nav from "~/components/page/Nav.vue";

const packageStore = usePackageStore()
packageStore.showModalInquireGlobal = false

const  statusModal = () => {
  packageStore.showModalMenu = false
}
</script>