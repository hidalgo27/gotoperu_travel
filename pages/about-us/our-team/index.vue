<script lang="ts" setup>

definePageMeta({
  layout: 'unique-footer'
});

import AllTeam from '~/components/about/AllTeam.vue';
import StartPlanningBanner from '~/components/about/StartPlanningBanner.vue';

const header = {
  title: 'Our Team',
  description: 'Meet the dedicated individuals behind GOTOGROUP, passionate about crafting your perfect Latin American adventure.',
  image: '/images/about-us/our-team.jpg',
  alt: 'Our Team at GOTOGROUP'
};

onMounted(async () => {
  if (process.client) {
    // @ts-ignore
    import('https://static.elfsight.com/platform/platform.js').then((module) => {

    });
  }
})
</script>
<template>
  <header class="h-[75vh] relative">
    <img src="https://gotoperu.com/images/team/banner2.jpg" alt="" class="object-cover w-screen h-full">
    <!--    <div class="absolute inset-x-0 bottom-0 text-center">-->
    <!--      <h1 class="mb-24 font-bold text-6xl text-white">-->
    <!--        about-->
    <!--      </h1>-->
    <!--    </div>-->
  </header>
  <section class="bg-primary/10 ">
    <main class="container py-24">
      <h1 class="italic text-4xl mb-6 font-playfair">Our Team</h1>
      <div class="xl:w-2/3 gap-2 leading-relaxed">
        <p>
          The driving force behind GOTOGROUP is our incredible team; an enthusiastic and diverse group of individuals
          united by a love for Latin America and a belief in the transformative power of travel. We are more than just
          travel agents; we serve as cultural ambassadors, adventure partners, and committed collaborators in crafting
          your dream vacation.
        </p>
        <p class="mt-4">
          For us, travel embodies the essence of making genuine connections: understanding the intricacies of local
          life, mingling with communities, and discovering a place's true character. This philosophy guides every member
          of the GOTOGROUP team, from initial planning to on-the-ground support. We're here to create bespoke excursions
          that showcase Latin America and allow you to experience it firsthand, leaving you with memories that will
          endure long after you return.
        </p>
        <p class="mt-4">
          Discover the dedicated individuals who comprise the GOTOGROUP family and are happy to share their love for
          Latin America with you.
        </p>
      </div>
    </main>
  </section>
  <AllTeam />
  <section class="py-24 bg-gray-100">
    <div class="container">
      <!--        <div class="elfsight-app-de637865-6596-4396-8bba-ef0f7b50bc9e"></div>-->
      <div class="elfsight-app-0205a974-5637-4472-a992-5e12bca31e38" data-elfsight-app-lazy></div>
    </div>
  </section>
  <StartPlanningBanner />
</template>
<style></style>