<template>

  <div>
    <nuxt-link to="/"><img src="https://gotoperu-com.s3-us-west-1.amazonaws.com/logos/logo-gotoperu-black.png" class="w-[150px] md:w-[240px]"></nuxt-link>
  </div>
  <div class="">
    <nav class="gap-6 hidden md:flex">
      <nuxt-link to="/destinations/peru" class="flex gap-2 items-center"><img src="/icons/location.svg"> Destinations</nuxt-link>
      <nuxt-link to="/peru-travel-packages" class="flex gap-2 items-center"><img src="/icons/map.svg"> Peru Travel Packages</nuxt-link>
      <nuxt-link to="/#top-12" class="flex gap-2 items-center"><img src="/icons/star.svg"> Top tours</nuxt-link>
      <nuxt-link to="/reviews" class="flex gap-2 items-center"><img src="/icons/search.svg"> Reviews</nuxt-link>
      <nuxt-link to="/about" class="flex gap-2 items-center"><img src="/icons/user.svg"> About us</nuxt-link>
    </nav>
  </div>


</template>

<script lang="ts" setup>
</script>