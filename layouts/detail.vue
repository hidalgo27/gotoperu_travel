<template>

  <div class="container flex justify-between py-6 relative z-0 items-center">
    <div class="md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" @click="packageStore.showModalMenu = !packageStore.showModalMenu">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </div>
    <Nav></Nav>
    <div class="">
      <a href="#form-dream-adventure" class="btn-secondary">Get a Quote</a>
    </div>
  </div>

  <slot />
  <modal-menu></modal-menu>
  <FooterInquireDetail></FooterInquireDetail>
  <Footer></Footer>
  <Float></Float>
</template>

<script lang="ts" setup>
import Float from "~/components/page/Float.vue";

useHead({
  script: [
    {
      src: 'https://cdn.wetravel.com/widgets/embed_checkout.js',
      async: true,
    },
  ],
})
import Nav from "~/components/page/Nav.vue";
import Footer from "~/components/page/Footer.vue";
import {usePackageStore} from "~/stores/packages";
import ModalMenu from "~/components/modal/ModalMenu.vue";
import FooterInquireDetail from "~/components/form/FooterInquireDetail.vue";

const packageStore = usePackageStore()
packageStore.showModalItinerary = false

</script>