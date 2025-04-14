<template>
  <div class="fixed z-40 bottom-0 right-0">
    <!-- Botón de cotización -->
    <div class="py-2 px-4 sm:inline-flex md:hidden">
      <a href="#form-dream-adventure">
        <div class="flex items-center">
          <span class="bg-gray-800 text-white py-2 px-4 rounded-lg border-2 border-secondary">
            Start my quote
          </span>
          <nuxt-img src="/images/home/operator5.jpg" alt="User Image"
            class="w-16 h-16 rounded-full bg-white object-cover object-top border-2 border-secondary" />
        </div>
      </a>
    </div>

    <!-- Botón de WhatsApp -->
    <div class="flex justify-end px-6 py-5">
      <div class="relative h-10 w-10">
        <span class="animate-ping absolute inset-0 rounded-full bg-gray-400 opacity-75"></span>
        <a href="https://api.whatsapp.com/send?phone=51912668025" target="_blank"
          class="absolute inset-0 flex items-center justify-center">
          <nuxt-img src="/icons/whatsapp.png" alt="WhatsApp" class="w-8" />
        </a>
      </div>
    </div>
  </div>
</template>
