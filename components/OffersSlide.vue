<script lang="ts" setup>
import { NuxtImg } from '#components';
import { Carousel, Slide } from 'vue3-carousel';

const offers = [
  {
    id: 1,
    title: 'Your trip, now!',
    logo: 'https://png.pngtree.com/png-vector/20250323/ourmid/pngtree-vibrant-special-offer-badge-design-png-image_15855886.png',
    image: '/images/banners/banners_home/machu-picchu.webp'
  },
  {
    id: 2,
    title: 'Discover new sensations',
    logo: 'https://static.vecteezy.com/system/resources/thumbnails/053/225/860/small/limited-offer-with-clock-for-promotion-last-offer-label-banner-for-sale-promotion-png.png',
    image: '/images/banners/banners_home/rainbow-mountain.webp'
  },
  {
    id: 3,
    title: 'Explore new sights',
    logo: 'https://images.icon-icons.com/2086/PNG/512/sale_offert_sales_tag_discount_icon_127452.png',
    image: '/images/banners/banners_home/Lake.webp'
  },
]
</script>
<template>
  <div class="container my-12">
    <h1 class="font-bold text-4xl mb-2">Offers for you</h1>
    <Carousel :items-to-show="3" wrap-around :transition="2000" pause-autoplay-on-hover>
      <slide class=" relative px-2" v-for="(offer, index) in offers" :key="index">
        <div class="relative ">
          <NuxtImg class="w-full h-full object-cover rounded-lg" :src="offer.image" />
          <div class="absolute inset-0 bg-gradient-to-t to-70% from-gray-900 from-0% opacity-80 rounded-lg"></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center flex-col text-center">
          <NuxtImg :src="offer.logo" class="w-48 h-24 mb-4" />
          <button class="btn-secondary-sm text-sm text-white">{{ offer.title }}</button>
        </div>
      </slide>
    </Carousel>
  </div>
</template>
<style></style>