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
  <!--  <PromoBanner></PromoBanner>-->
  <Headers>
  </Headers>

  <slot />

  <modal-menu></modal-menu>

  <section
    class="relative z-0  h-auto overflow-hidden bg-[url(/images/banners/machu-picchu.webp)] bg-top bg-cover bg-fixed ">
    <!--    <div class="absolute inset-x-0 z-10 h-full">-->
    <!--      <nuxt-img src="/images/banners/machu-picchu.jpg" class="w-full object-cover object-center"></nuxt-img>-->
    <!--    </div>-->
  </section>
  <Footer></Footer>
  <Float></Float>
</template>