<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
const slides = [
  {
    image: "https://images.goway.com/production/styles/hero_s1_xl/s3/hero/iStock-1919241099.jpeg?h=b631e5b1&itok=9LU4KnKh 1x",
    title: "Escape to The Islands of Tahiti",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor dolorem id magnam quas tempora tenetur veritatis? Aliquid cum distinctio eligendi excepturi, fuga inventore magni necessitatibus nisi tempore unde veniam.",
    buttonText: "Explore Here",
  },
  {
    image: "https://images.goway.com/production/styles/hero_s1_3xl/s3/hero/iStock-157728558_0.jpg?h=99baf7c0&itok=TcVBqOWU 1x",
    title: "Discover the Beauty of Bora Bora",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor dolorem id magnam quas tempora tenetur veritatis? Aliquid cum distinctio eligendi excepturi, fuga inventore magni necessitatibus nisi tempore unde veniam.",
    buttonText: "Learn More",
  },
];
</script>
<template>
  <section class="">
    <carousel :items-to-show="1" :gap="200" wrap-around :transition="2000" pause-autoplay-on-hover>
      <slide v-for="(slide, index) in slides" :key="index" class="relative">
        <NuxtImg :src="slide.image" alt="Slide Image" class="w-full h-[60vh] object-cover" loading="lazy"
          webp="" />
        <div class="absolute  inset-0 flex items-center bg-gray-800 bg-opacity-20">
          <div class="container text-center">
            <h2 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-playfair">
              {{ slide.title }}
            </h2>
            <p class="text-white font-light text-xl inline-block mt-8 mb-12">{{slide.description}}</p>
            <NuxtLink to="/destinations"
                      class="btn-ternary-outline-white inline-block text-left"
            >
              {{ slide.buttonText }}
            </NuxtLink>
          </div>
        </div>
      </slide>
    </Carousel>
  </section>
</template>
<style></style>