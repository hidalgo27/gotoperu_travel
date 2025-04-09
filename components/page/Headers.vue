<script lang="ts" setup name="nav">
import { usePackageStore } from "~/stores/packages";
import Nav from "~/components/page/Nav.vue";

const packageStore = usePackageStore()
</script>
<template>
  <div class="m-3 px-12 py-4 rounded-lg bg-slate-100 relative z-50">
    <div class=" flex justify-between  items-center">
      <div class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6" @click="packageStore.showModalMenu = !packageStore.showModalMenu">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <Nav></Nav>
      <div class="flex gap-4 items-center">
        <div class="text-right">
          <span class="font-semibold">+1 (202) 4911478</span>
          <p class="text-xs">Or contact your travel advisor</p>
        </div>
        <a href="#form-dream-adventure" class="btn-secondary">Get a Quote</a>
      </div>
    </div>
  </div>
</template>
