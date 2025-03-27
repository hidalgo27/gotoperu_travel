<script lang="ts" setup>
import Footer from "~/components/page/Footer.vue";
import Headers from "~/components/page/Headers.vue";
import ModalMenu from "~/components/modal/ModalMenu.vue";
import FooterInquire from "~/components/form/FooterInquire.vue";
import Float from "~/components/page/Float.vue";
import PromoBanner from "~/components/page/PromoBanner.vue";
</script>

<template>
  <!--  <div class="tpl-snow">-->
  <!--    <div v-for="index in 50" :key="index"></div>-->
  <!--  </div>-->
  <PromoBanner></PromoBanner>
  <Headers>
  </Headers>

  <slot />

  <modal-menu></modal-menu>

  <FooterInquire></FooterInquire>
  <Footer></Footer>
  <Float></Float>
</template>