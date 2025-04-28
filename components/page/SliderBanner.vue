<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
const slides = [
  {
    image: "images/banners/banners_home/andean.webp",
    title: "Discover the Andes Mountains",
    description: "Journey through the majestic Andes Mountains, a breathtaking range that stretches across Peru, home to ancient cultures, stunning landscapes, and unforgettable adventures waiting to be discovered.",
    buttonText: "Discover Andes",
  },
  {
    image: "images/banners/banners_home/lake.webp",
    title: "Experience the Lakes of Peru",
    description: "Experience the magic of the lakes, from the serene waters of Lake Titicaca to the stunning beauty of Huacachina Oasis, where adventure and tranquility meet in perfect harmony.",
    buttonText: "Experience Lake",
  },
  {
    image: "images/banners/banners_home/rainbow-mountain.webp",
    title: "Admire Rainbow Mountain",
    description: "Hike to the vibrant peaks of Rainbow Mountain, also known as Vinicunca, and witness a natural spectacle of colors formed over centuries, a must-see destination for any traveler in Peru.",
    buttonText: "Admire Mountain",
  },
  {
    image: "images/banners/banners_home/machu-picchu.webp",
    title: "Explore Machu Picchu",
    description: "Step into the mystical world of Machu Picchu, the iconic Incan citadel hidden among Peru's lush mountains, offering breathtaking views, rich history, and a profound sense of wonder.",
    buttonText: "Explore Machu Picchu",
  },
];
</script>
<template>
  <section class="">
    <carousel :items-to-show="1" :gap="200" wrap-around :transition="2000" pause-autoplay-on-hover>
      <slide v-for="(slide, index) in slides" :key="index" class="relative">
        <NuxtImg :src="slide.image" alt="Slide Image" class="w-full h-[60vh] object-cover" loading="lazy" webp="" />
        <div class="absolute  inset-0 flex items-center bg-gray-800 bg-opacity-20">
          <div class="container text-center">
            <h2 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">
              {{ slide.title }}
            </h2>
            <p class="text-white font-light text-xl inline-block mt-8 mb-12">{{ slide.description }}</p>
            <NuxtLink to="/destinations" class="btn-ternary-outline-white inline-block text-left">
              {{ slide.buttonText }}
            </NuxtLink>
          </div>
        </div>
      </slide>
    </Carousel>
  </section>
</template>
<style></style>