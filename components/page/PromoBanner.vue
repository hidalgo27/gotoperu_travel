<script setup>
const { $gsap } = useNuxtApp();

const isVisible = ref(true);

const closeBanner = () => {
  $gsap.to('.bannerPromo', {
    opacity: 0,
    y: -50,
    duration: 0.5,
    onComplete: () => (isVisible.value = false),
  });
};

onMounted(() => {
  $gsap.fromTo('.bannerPromo', { opacity: 0, y: -50, duration: 0.5, ease: 'power3.in' }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
});
</script>

<template>
  <div v-if="isVisible"
    class="bannerPromo w-full bg-secondary hover:bg-opacity-50 duration-500 transition text-black text-center font-bold p-3 flex justify-between items-center">
    <p class="flex-1 text-center">FLASH SALE NOW ON! Save up to 20%. <NuxtLink class="underline cursor-pointer">View
        deals.</NuxtLink>
    </p>
    <button @click="closeBanner" class="mr-4 text-xl hover:text-gray-700">✕</button>
  </div>
</template>
