<script lang="ts" setup>
import { Dropdown } from 'floating-vue';
import { usePackageStore } from '~/stores/packages';

const packageStore = usePackageStore();
const listDestination = ref([]);
const dropdownRef = ref<InstanceType<typeof Dropdown> | null>(null);
const route = useRoute();
const getDestinations = async (url: any) => {
  const res: any = await packageStore.getCountry(url);
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

watch(() => route.fullPath, () => {
  dropdownRef.value?.hide();
});

onMounted(async () => {
  await getDestinations('peru');
});
</script>
<template>
  <div>
    <nuxt-link to="/"><img src="https://gotoperu-com.s3-us-west-1.amazonaws.com/logos/logo-gotoperu-black.png"
        class="w-[150px] md:w-[240px]"></nuxt-link>
  </div>
  <div class="">
    <nav class="gap-6 hidden md:flex">
      <!-- <nuxt-link to="/destinations/peru" class="flex gap-2 items-center"><img src="/icons/location.svg">
        Destinations</nuxt-link> -->
      <ClientOnly>
        <Dropdown ref="dropdownRef">
          <button class="flex gap-2 items-center">
            <img src="/icons/location.svg">
            Destinations
          </button>
          <template #popper="{ hide }">
            <div
              class="v-popper bg-white text-gray-800 rounded-t-md md:rounded-md  md:w-[80vh] lg:w-[65vh] 2xl:w-[50vh] flex md:flex-col lg:flex-row gap-6 text-sm p-6 lg:h-96  lg:min-h-96  h-[32rem] min-h-[32rem]">
              <div class="w-full ">
                <div class="col-span-1 relative">
                  <div class="flex flex-col mb-2">
                    <span class="text-xs italic">All destinations in </span>
                    <span class="text-4xl font-playfair-display font-semibold pl-1">{{ menu.title }}</span>
                  </div>
                  <div class="grid grid-cols-2 gap-x-10">
                    <div v-for="sub in menu.items" class="py-2 text-gray-800 hover:text-orange-500 duration-300">
                      <NuxtLink :to="sub.link">{{ sub.name }}</NuxtLink>
                    </div>
                  </div>
                </div>
                <NuxtLink :to="menu.url"
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
              <NuxtLink v-if="menu.image" :to="menu.url"
                class="hidden md:block w-full h-full lg:w-52 rounded-md overflow-hidden group relative">
                <NuxtImg :src="menu.image"
                  class="w-full h-full object-cover transition duration-500 ease-in-out transform group-hover:scale-105"
                  loading="lazy">
                </NuxtImg>
                <div
                  class="absolute bottom-0 w-full bg-opacity-50 text-white text-center p-2 flex items-center justify-between ">
                  <span>Discover {{ menu.title }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                    stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </NuxtLink>
            </div>
          </template>
        </Dropdown>
      </ClientOnly>
      <nuxt-link to="/peru-travel-packages" class="flex gap-2 items-center"><img src="/icons/map.svg"> Peru Travel
        Packages</nuxt-link>
      <!--      <nuxt-link to="/#top-12" class="flex gap-2 items-center"><img src="/icons/star.svg"> Top tours</nuxt-link>-->
      <!--      <nuxt-link to="/reviews" class="flex gap-2 items-center"><img src="/icons/search.svg"> Reviews</nuxt-link>-->
      <nuxt-link to="/about" class="flex gap-2 items-center"><img src="/icons/user.svg"> About us</nuxt-link>
      <span class="font-semibold">+1 (202) 4911478</span>
    </nav>
  </div>
</template>
<style>
body.no-scroll {
  overflow: hidden;
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