<template>
  <div class="tpl-snow">
    <div v-for="index in 50" :key="index"></div>
  </div>
  
  <Headers></Headers>

  <slot />

  <modal-menu></modal-menu>

  <FooterInquire></FooterInquire>
  <Footer></Footer>
</template>

<script lang="ts" setup >
import Footer from "~/components/page/Footer.vue";
import Headers from "~/components/page/Headers.vue";
import ModalMenu from "~/components/modal/ModalMenu.vue";
import FooterInquire from "~/components/form/FooterInquire.vue";
</script>