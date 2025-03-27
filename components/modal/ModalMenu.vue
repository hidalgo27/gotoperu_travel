<script lang="ts" setup>
import { usePackageStore } from "~/stores/packages";
import { Dropdown } from 'floating-vue';

const listDestination = ref([]);

const getDestinations = async (url: any) => {
  const res: any = await packageStore.getCountry(url);
  console.log(res);
  listDestination.value = res;
  listDestination.value = res.map((dest) => ({
    name: dest.nombre,
    link: `/destinations/peru/${dest.url}`,
  }));
};

const menu = ref({
  title: "Peru",
  items: listDestination,
  image: "http://gotoperu-mx.s3-us-west-1.amazonaws.com/destinations/1574357091600valle_1574357088.jpg",
  url: "/destinations/peru",
});

const packageStore = usePackageStore()
packageStore.showModalInquireGlobal = false

let count = 0;
const onShow = () => {
  if (count === 0) {
    document.body.classList.add('no-scroll');
  }
  count++;
};

const onHide = () => {
  count--;
  if (count === 0) {
    document.body.classList.remove('no-scroll');
  }
};

const statusModal = () => {
  packageStore.showModalMenu = false
}

onMounted(async () => {
  await getDestinations('peru');
});
</script>
<template>
  <Teleport to="body">
    <div v-if="packageStore.showModalMenu" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"
      @click="packageStore.showModalMenu = !packageStore.showModalMenu"></div>
    <transition name="slide">
      <div v-if="packageStore.showModalMenu"
        class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-white p-6 z-50 rounded-t-md">
        <nav class="flex flex-col gap-4">
          <button @click="packageStore.showModalMenu = !packageStore.showModalMenu" class="absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav class="divide-y">
            <ClientOnly>
              <Dropdown positioning-disabled @apply-show="onShow()" @apply-hide="onHide()">
                <button class="flex gap-2 items-center w-full py-4">
                  <img src="/icons/location.svg">
                  Destinations
                </button>
                <template #popper="{ hide }">
                  <div
                    class="v-popper bg-white text-gray-800 rounded-t-md md:rounded-md flex md:flex-col lg:flex-row gap-6 text-sm p-6 h-[22rem] ">
                    <button @click="hide()" class="absolute top-2 right-2 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" class="w-5 h-5 text-gray-500 hover:text-gray-800 transition">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <div class="w-full ">
                      <div class="col-span-1 relative">
                        <div class="flex flex-col mb-2">
                          <span class="text-xs italic">All destinations in </span>
                          <span class="text-4xl font-playfair-display font-semibold pl-1">{{ menu.title }}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-x-10">
                          <div v-for="sub in menu.items" class="py-2 text-gray-800 hover:text-orange-500 duration-300">
                            <NuxtLink :to="sub.link"
                              @click="packageStore.showModalMenu = !packageStore.showModalMenu, hide()">{{ sub.name }}
                            </NuxtLink>
                          </div>
                        </div>
                      </div>
                      <NuxtLink :to="menu.url" @click="packageStore.showModalMenu = !packageStore.showModalMenu, hide()"
                        class="md:hidden lg:inline-block :text-semibold duration-300 text-md absolute bottom-4 inline-block after:block after:w-full after:h-[2px] after:bg-secondary after:transition-all after:duration-300 after:origin-left hover:after:w-0">
                        <span class="flex items-center gap-1">
                          Explore all {{ menu.title }}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </span>
                      </NuxtLink>
                    </div>
                  </div>
                </template>
              </Dropdown>
            </ClientOnly>
            <nuxt-link to="/peru-travel-packages" @click="statusModal" class="flex py-4 gap-2 items-center"><img
                src="/icons/map.svg"> Peru Travel Packages</nuxt-link>
            <nuxt-link to="/#top-12" @click="statusModal" class="flex py-4 gap-2 items-center"><img
                src="/icons/star.svg">
              Top tours</nuxt-link>
            <nuxt-link to="/reviews" @click="statusModal" class="flex py-4 gap-2 items-center"><img
                src="/icons/search.svg">
              Reviews</nuxt-link>
            <nuxt-link to="/about" @click="statusModal" class="flex py-4 gap-2 items-center"><img src="/icons/user.svg">
              About us</nuxt-link>
          </nav>
        </nav>
      </div>
    </transition>
  </Teleport>
  <!-- <section class="modal-box">
    <transition name="fade" appear>
      <div class="modal-overlay" v-show="packageStore.showModalMenu" @click="packageStore.showModalMenu = false"></div>
    </transition>
    <transition name="left" appear>
      <div class="modal overflow-y-scroll" role="dialog" v-show="packageStore.showModalMenu">
        <div class="mb-3" @click="packageStore.showModalMenu = false">
          X Cerrar
        </div>
        <nav class="divide-y">
          <nuxt-link to="/destinations/countries" @click="statusModal" class="flex py-4 gap-2 items-center"><img
              src="/icons/location.svg"> Destinations</nuxt-link>
          <button @click="openDestinationsDropdown">Abrir Destinations</button>
          <nuxt-link to="/peru-travel-packages" @click="statusModal" class="flex py-4 gap-2 items-center"><img
              src="/icons/map.svg"> Peru Travel Packages</nuxt-link>
          <nuxt-link to="/#top-12" @click="statusModal" class="flex py-4 gap-2 items-center"><img src="/icons/star.svg">
            Top tours</nuxt-link>
          <nuxt-link to="/reviews" @click="statusModal" class="flex py-4 gap-2 items-center"><img
              src="/icons/search.svg"> Reviews</nuxt-link>
          <nuxt-link to="/about" @click="statusModal" class="flex py-4 gap-2 items-center"><img src="/icons/user.svg">
            About us</nuxt-link>
        </nav>
      </div>
    </transition>
  </section> -->
</template>
<style>
body.no-scroll {
  overflow: hidden;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s;
}

.slide-enter-from {
  transform: translate(-50%, 100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translate(-50%, 100%);
  opacity: 0;
}

.v-popper__popper--no-positioning {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
}

.v-popper__popper--no-positioning .v-popper__backdrop {
  display: block;
  background: rgba(0 0 0 / 90%);
}

.v-popper__popper--no-positioning .v-popper__wrapper {
  width: 100%;
  pointer-events: auto;
  transition: transform .15s ease-out;
}

.v-popper__popper--no-positioning.v-popper__popper--hidden .v-popper__wrapper {
  transform: translateY(100%);
}
</style>
