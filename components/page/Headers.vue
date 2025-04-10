<script lang="ts" setup name="nav">
import { usePackageStore } from "~/stores/packages";
import Nav from "~/components/page/Nav.vue";

const packageStore = usePackageStore()
</script>
<template>
  <div class="m-3 px-3 md:px-12 py-4 rounded-lg bg-slate-100 relative z-40">

    <div class="flex flex-row md:flex-coljustify-between  items-center gap-1 md:gap-6">
      <Nav></Nav>
      <div class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6" @click="packageStore.showModalMenu = !packageStore.showModalMenu">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </div>
  </div>
</template>
